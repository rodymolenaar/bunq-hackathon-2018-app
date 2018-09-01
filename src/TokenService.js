import { AsyncStorage } from 'react-native'
import axios from 'axios'
import Config from './Config'
import store from './store'
import {setAppUser, setRefreshToken, setToken} from "./actions";

class TokenService {
    static async getUser() {
        if (store.getState().application.user === undefined) {
            let user = JSON.parse(await AsyncStorage.getItem('user'))

            store.dispatch(setAppUser(user))
        }

        return store.application.user
    }

    static async getToken() {
        if (store.getState().application.token === undefined) {
            let token = await AsyncStorage.getItem('token', '')

            store.dispatch(setToken(token))
        }

        return store.getState().application.token
    }

    static async getRefreshToken() {
        if (store.getState().application.refresh_token === undefined) {
            let token = await AsyncStorage.getItem('refresh_token')

            store.dispatch(setRefreshToken(refresh_token))
        }

        return store.application.refresh_token
    }

    static async issueNewToken() {
        try {
            const response = await axios.post(Config.baseUrl + '/token', {
                'grant_type': 'refresh_token',
                'refresh_token': await this.getRefreshToken(),
            });

            let { token } = response.data;

            await AsyncStorage.setItem('token', token);

            store.dispatch(setToken(token));

            return token
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export default TokenService