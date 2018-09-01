import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, View, SafeAreaView, StyleSheet, Button, TouchableOpacity, TextInput, Platform, Alert} from "react-native";
import Title from "../../components/Title";
import Container from "../../components/Container";
import styled from "styled-components";
import Header from "../../components/Header";
import withHttp from "../../withHttp";

class ApiKeyScreen extends React.Component {
    state = {
        apiKey: ''
    }

    onChangeText = text => {
        this.setState({
            apiKey: text
        })
    }

    saveApiKey = () => {
        this.props.http.patch('/account', {
            api_key: this.state.apiKey
        })
        .then(() => {
            this.props.navigation.goBack()
            Alert.alert('Nieuwe API key opgeslagen')
        })
        .catch(error => {
            console.log(error.response.data)
            Alert.alert(
                'Something Went Wrong',
                error.response.data.message || error.message,
            )
        })
    }

    render() {
        return (
            <View>
                <Header
                    left={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={40} color="#fff" style={{paddingVertical: 5}}/>
                        </TouchableOpacity>
                    }
                />
                <View style={styles.container}>
                    <Container>
                        <View style={{flexDirection: 'row'}}>
                            <Title>Your Api Key</Title>
                            <View style={{marginLeft: 'auto'}}>
                                <Button
                                    onPress={this.saveApiKey}
                                    title="Save"
                                    color="#2f83c8"
                                    accessibilityLabel="Save your API key"
                                />
                            </View>
                        </View>

                        <Text style={{marginBottom: 12}}>
                            Your API key is used to see your bunq transactions and to make payments to charity on your behalf.
                        </Text>

                        <Text style={styles.inputLabel}>API key</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Paste your API key here"
                            placeholderTextColor="rgba(0, 0, 0, 0.4)"
                            autoCorrect={false}
                            multiline
                            numberOfLines={3}
                            autoFocus
                            enablesReturnKeyAutomatically={true}
                            autoCapitalize="none"
                            value={this.state.apiKey}
                            onChangeText={this.onChangeText}
                            returnKeyType="next"
                            underlineColorAndroid="#1e4b9d"
                        />
                    </Container>
                </View>
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
                height: 60,
                borderBottomWidth: 1,
                borderColor: '#666',
            },
        }),
        marginBottom: 16,
        fontSize: 14,
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

export default withHttp()(ApiKeyScreen)