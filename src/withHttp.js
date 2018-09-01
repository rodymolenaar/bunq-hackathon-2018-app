import React from 'react'
import TokenService from './TokenService'
import axios from 'axios'
import { AsyncStorage } from 'react-native'
import Config from './Config'

export default (authorization = true) => Component => {
    return class withHttp extends React.Component {
        static navigationOptions = Component.navigationOptions

        constructor(props) {
            super(props)

            this.http = axios.create({
                baseURL: Config.baseUrl
            })

            if (authorization) {

                // Add a request interceptor to set the token header (interceptor is used because tokenstorage is async)
                this.http.interceptors.request.use(async (config) => {
                    config.headers.common.Authorization = 'Bearer ' + await TokenService.getToken()
                    return config
                })

                this.http.interceptors.response.use(response => response, async (error) => {
                    const originalRequest = error.config;

                    if (error.response && error.response.status === 401 && originalRequest.headers['Authorization'] !== undefined && !originalRequest._retry) {
                        originalRequest._retry = true

                        return TokenService.issueNewToken()
                            .then(token => {
                                originalRequest.headers[ 'Authorization' ] = 'Bearer ' + token
                                this.http.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + token

                                return this.http(originalRequest)
                            })
                            .catch(async (error) => {
                                if (error.response && error.response.status === 401) {
                                    await AsyncStorage.clear()

                                    this.props.navigation.navigate('Auth')
                                }
                            })
                    } else if (error !== undefined) {
                        return Promise.reject(error)
                    } else {
                        return this.http(originalRequest)
                    }
                })
            }
        }

        render() {
            return <Component http={this.http} {...this.props} />
        }
    }
}