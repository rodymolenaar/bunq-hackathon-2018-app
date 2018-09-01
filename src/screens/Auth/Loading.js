import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import TokenService from "../../TokenService";
import {setApiKey, setToken} from "../../actions";
import store from '../../store'
import withHttp from "../../withHttp";

class LoadingScreen extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this._bootstrapAsync();
    // }

    // Fetch the token from storage then navigate to our appropriate place
    // _bootstrapAsync = async () => {
    //     const userToken = await AsyncStorage.getItem('userToken');
    //
    //     // This will switch to the App screen or Auth screen and this loading
    //     // screen will be unmounted and thrown away.
    //     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    // };

    async componentDidMount() {
        global.navigation = this.props.navigation

        let token = await AsyncStorage.getItem('token', '')

        if (token.length > 0) {
            store.dispatch(setToken(token))
        }

        this.props.http.get('/account')
            .then(response => response.data.payload)
            .then(account => {
                store.dispatch(setApiKey(account.apiKey))

                if (! store.getState().application.apiKey.length > 0) {
                    this.props.navigation.navigate('ApiKey', { noGoingBack: true });
                }
            })
            .then(() => this.props.navigation.navigate(token.length > 0 ? 'App' : 'Auth'))
    }

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //
    }
})

export default withHttp()(LoadingScreen)