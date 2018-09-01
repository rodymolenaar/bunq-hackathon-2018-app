import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, View, SafeAreaView, StyleSheet, ScrollView} from "react-native";
import Title from "../components/Title";
import Container from "../components/Container";
import styled from "styled-components";
import Header from "../components/Header";
import NoApiKey from "../components/NoApiKey";

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

                        <Merchant>
                            <View>
                                <Text>AH TO GO 8643</Text>
                                <Description>NL83 INGB 0882 839 293</Description>
                            </View>
                            <View style={{marginLeft: 'auto', alignItems: 'center', justifyContent: 'center'}}>
                                <Value>0,01</Value>
                            </View>
                        </Merchant>
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

export default MerchantsScreen