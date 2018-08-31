import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, View, SafeAreaView, StyleSheet } from "react-native";
import Title from "../components/Title";
import Container from "../components/Container";
import styled from "styled-components";
import Header from "../components/Header";

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
`

const Description = styled.Text`
    color: #727376;
`

class MerchantsScreen extends React.Component {
    render() {
        return (
            <View>
                <Header />
                <View style={styles.container}>
                    <Container>
                        <Title>Merchants</Title>
                        <Text>You've previously sent money to these accounts.</Text>
                    </Container>

                    <Merchant>
                        <View>
                            <Text>Factuur 615727</Text>
                            <Description>Factuur betaald</Description>
                        </View>
                        <View style={{marginLeft: 'auto', alignItems: 'center', justifyContent: 'center'}}>
                            <Value>0,01</Value>
                        </View>
                    </Merchant>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
    }
})

export default MerchantsScreen