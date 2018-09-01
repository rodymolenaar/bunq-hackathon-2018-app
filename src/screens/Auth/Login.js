import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, View, SafeAreaView, StyleSheet, TextInput, Platform, ScrollView, Alert, AsyncStorage} from "react-native";
import Title from "../../components/Title";
import Container from "../../components/Container";
import styled from "styled-components";
import Header from "../../components/Header";
import {Button} from "react-native-paper";
import withHttp from "../../withHttp";
import {setAppUser, setRefreshToken, setToken} from "../../actions";
import store from '../../store'

@withHttp(false)
class LoginScreen extends React.Component {

    state = {
        email: '',
        password: ''
    }

    onChangeText = property => text => {
        this.setState({
            [property]: text
        })
    }

    isReady = () => {
        let { email, password } = this.state;
        return email.length > 3 && password.length > 0;
    }

    login = () => {
        let { email, password } = this.state

        this.props.http.post('/token', {
            email,
            password
        })
            .then(async (response) => {
                let { token } = response.data.payload;

                await AsyncStorage.setItem('token', token);

                store.dispatch(setToken(token));
            })
            .then(() => this.props.navigation.navigate('App'))
            .catch(error => {
                Alert.alert(
                    'Something Went Wrong',
                    error.response.data.message || error.message,
                )
            })
    }

    render() {
        return (
            <View>
                <Header />
                <ScrollView style={styles.container}>
                    <Container>
                        <Title>Sign in</Title>
                    </Container>

                    <Container>
                        <Text style={styles.inputLabel}>Email address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="johndoe@example.com"
                            placeholderTextColor="rgba(0, 0, 0, 0.4)"
                            autoCorrect={false}
                            autoFocus
                            enablesReturnKeyAutomatically={true}
                            autoCapitalize="none"
                            value={this.state.email}
                            onChangeText={this.onChangeText('email')}
                            returnKeyType="next"
                            underlineColorAndroid="#1e4b9d"
                        />

                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder=""
                            placeholderTextColor="rgba(0, 0, 0, 0.4)"
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            value={this.state.password}
                            onChangeText={this.onChangeText('password')}
                            returnKeyType="next"
                            underlineColorAndroid="#1e4b9d"
                        />
                    </Container>

                    <Container>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                                <Button onPress={() => this.props.navigation.navigate('Register')} color="#1e4b9d">
                                    Register
                                </Button>
                                <Button disabled={!this.isReady()} raised onPress={this.login} color="#1e4b9d">
                                    Sign in
                                </Button>
                            </View>
                        </View>
                    </Container>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
    },
    input: {
        ...Platform.select({
            ios: {
                height: 40,
                borderBottomWidth: 1,
                borderColor: '#666',
            },
        }),
        marginBottom: 16,
        fontSize: 19,
        fontWeight: 'bold',
        color: '#333'
    },
    inputLabel: {
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6,
        ...Platform.select({
            android: {
                paddingHorizontal: 4
            },
        }),
    }
})

export default LoginScreen