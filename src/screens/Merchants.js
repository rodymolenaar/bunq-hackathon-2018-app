import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, View, SafeAreaView, StyleSheet, ScrollView, Image, ActivityIndicator} from "react-native";
import Title from "../components/Title";
import Container from "../components/Container";
import styled from "styled-components";
import Header from "../components/Header";
import NoApiKey from "../components/NoApiKey";
import withHttp from "../withHttp";

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

class MerchantsScreen extends React.Component {
    state = {
        loading: true
    }

    fetchMerchants = () => {
        this.props.http.get('/merchants')
            .then(response => response.data.payload)
            .then(merchants => this.props.onFetchMerchants(merchants))
            .then(() => this.setState({ loading: false }))
    }

    componentDidMount() {
        this.fetchMerchants()
    }

    render() {
        return (
            <View style={{flexGrow: 1}}>
                <Header />
                <ScrollView style={{flexGrow: 1}}>
                    <NoApiKey />
                    <View style={styles.container}>
                        <Container>
                            <Title>Merchants</Title>
                            <Text>You've previously sent money to these accounts.</Text>
                        </Container>

                        {this.state.loading && (
                            <View>
                                <ActivityIndicator />
                            </View>
                        )}

                        {this.props.merchants.map(merchant => (
                            <Merchant key={merchant.id}>
                                <View style={{marginRight: 16, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={{ uri: merchant.image_url, headers: {
                                            Authorization: 'Bearer ' + this.props.token,
                                        }, }} style={{width: 30, height: 30, borderRadius: 99999}} />
                                </View>
                                <View>
                                    <Text>{merchant.name}</Text>
                                    <Description>{merchant.description}</Description>
                                </View>
                            </Merchant>
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
    }
})

export default withHttp()(MerchantsScreen)