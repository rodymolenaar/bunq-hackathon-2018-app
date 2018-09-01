import React from "react";
import {Text, View} from "react-native";
import {Button} from "react-native-paper";
import {withNavigation} from "react-navigation";
import store from '../store'
import {connect} from "react-redux";

const NoApiKey = ({ navigation, apiKey }) => apiKey ? null : (
    <View style={{backgroundColor: '#e40321', padding: 16}}>
        <Text style={{color: '#fff', marginBottom: 10}}>You need to enter your bunq API key in order to use this application.</Text>
        <Button raised compact color="#fff" onPress={() => navigation.navigate('ApiKey')}>
            Add your API key
        </Button>
    </View>
)

export default connect(state => ({
    apiKey: state.application.apiKey
}))(withNavigation(NoApiKey))