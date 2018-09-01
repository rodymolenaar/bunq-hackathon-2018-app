import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, SafeAreaView, StyleSheet, View, Button, Picker, TextInput, TouchableOpacity} from "react-native";
import styled from 'styled-components'
import Title from "../../../components/Title";
import Container from "../../../components/Container";
import {TouchableRipple} from "react-native-paper";
import Header from "../../../components/Header";

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
                <View style={{paddingTop: 10}}>
                    <Container>
                        <Title>Select merchant</Title>
                    </Container>

                    <TouchableRipple onPress={() => console.warn('More, Less, About the same')}>
                        <Merchant>
                            <View>
                                <Text>AH TO GO 8643</Text>
                                <Description>NL83 INGB 0882 839 293</Description>
                            </View>
                            <View style={{marginLeft: 'auto', alignItems: 'center', justifyContent: 'center'}}>
                                <Value>0,01</Value>
                            </View>
                        </Merchant>
                    </TouchableRipple>
                </View>
            </View>
        );
    }
}

export default SelectMerchantScreen