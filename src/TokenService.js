import { AsyncStorage } from 'react-native'
import axios from 'axios'
import Config from './Config'

class TokenService {
    static async getUser() {
        let auth = JSON.parse(await AsyncStorage.getItem('auth'))

        if (auth && auth.user !== undefined) {
            return auth.user
        }
    }

    static async getToken() {
        let auth = JSON.parse(await AsyncStorage.getItem('auth'))

        if (auth && auth.access_token !== undefined) {
            return auth.access_token
        }
    }

    static async getRefreshToken() {
        let auth = JSON.parse(await AsyncStorage.getItem('auth'))

        if (auth && auth.refresh_token !== undefined) {
            return auth.refresh_token
        }
    }

    static async issueNewToken() {
        try {
            const response = await axios.post(Config.baseUrl + '/token', {
                'grant_type': 'refresh_token',
                'refresh_token': await this.getRefreshToken(),
            });

            await AsyncStorage.setItem('auth', JSON.stringify(response.data))

            return response.data.access_token
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export default TokenService