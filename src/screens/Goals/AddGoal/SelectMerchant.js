import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Picker,
    TextInput,
    TouchableOpacity,
    ActivityIndicator, Image, ScrollView
} from "react-native";
import styled from 'styled-components'
import Title from "../../../components/Title";
import Container from "../../../components/Container";
import {TouchableRipple} from "react-native-paper";
import Header from "../../../components/Header";
import withHttp from "../../../withHttp";

const Merchant = styled.View`
    padding-vertical: 16px;
    padding-horizontal: 16px;
    border-top-width: 1px;
    border-color: #eee;
    background-color: #fff;
    flex-direction: row;
`

const Value = styled.Text`
    color: #2f83c7;
    font-size: 18px;
    margin-bottom: 4px;
`

const Description = styled.Text`
    color: #727376;
    font-size: 12px;
`

class SelectMerchantScreen extends React.Component {
    state = {
        loading: true
    }

    pick = merchant => {
        this.props.setNewGoal({
            ...this.props.newGoal,
            merchant
        })
    }

    fetchMerchants = () => {
        this.props.http.get('/merchants')
            .then(response => response.data.payload)
            .then(merchants => this.props.onFetchMerchants(merchants))
            .then(() => this.setState({ loading: false }))
    }

    componentDidMount() {
        console.log(this.props)
        this.fetchMerchants()
    }

    render() {
        return (
            <View style={{flexGrow: 1}}>
                <Header
                    left={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={40} color="#fff" style={{paddingVertical: 5}}/>
                        </TouchableOpacity>
                    }
                />
                <ScrollView style={{flexGrow: 1}}>
                <View style={{paddingTop: 10}}>
                    <Container>
                        <Title>Select merchant</Title>
                    </Container>

                    {this.state.loading && (
                        <View>
                            <ActivityIndicator />
                        </View>
                    )}

                    {this.props.merchants.map(merchant => (
                        <TouchableRipple key={merchant.id} onPress={() => this.pick(merchant)}>
                            <Merchant>
                                <View style={{marginRight: 16, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={{ uri: merchant.image_url, headers: {
                                            Authorization: 'Bearer ' + this.props.token,
                                        }, }} style={{width: 30, height: 30, borderRadius: 99999}} />
                                </View>
                                <View>
                                    <Text>{merchant.name}</Text>
                                    <Description>{merchant.description}</Description>
                                </View>
                                {this.props.newGoal.merchant && this.props.newGoal.merchant.id === merchant.id && <Icon name="check" size={24} color="#2f83c8" style={{position: 'absolute', right: 12, top: 20, bottom: 0, justifyContent: 'center'}}/>}
                            </Merchant>
                        </TouchableRipple>
                    ))}
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default withHttp()(SelectMerchantScreen)