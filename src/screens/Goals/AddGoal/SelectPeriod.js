import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, SafeAreaView, StyleSheet, View, Button, Picker, TextInput, TouchableOpacity} from "react-native";
import styled from 'styled-components'
import Title from "../../../components/Title";
import Container from "../../../components/Container";
import {TouchableRipple} from "react-native-paper";
import Header from "../../../components/Header";

const Input = styled.View`
    padding-vertical: 14px;
    padding-horizontal: 16px;
    border-top-width: 1px;
    border-color: #eee;
    flex-direction: row;
    background-color: #fff;
    flex-direction: row;
`;

class SelectPeriodScreen extends React.Component {

    pick = pick => {
        this.props.setNewGoal({
            ...this.props.newGoal,
            period: pick
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
                <View style={{paddingTop: 10}}>
                    <Container>
                        <Title>Select period</Title>
                    </Container>

                    <TouchableRipple onPress={() => this.pick('week')}>
                        <Input>
                            <Text style={{fontSize: 16}}>Week</Text>
                            {this.props.newGoal.period === 'week' && <Icon name="check" size={24} color="#2f83c8" style={{position: 'absolute', right: 12, top: 12, bottom: 0, justifyContent: 'center'}}/>}
                        </Input>
                    </TouchableRipple>

                    <TouchableRipple onPress={() => this.pick('month')}>
                        <Input>
                            <Text style={{fontSize: 16}}>Month</Text>
                            {this.props.newGoal.period === 'month' && <Icon name="check" size={24} color="#2f83c8" style={{position: 'absolute', right: 12, top: 12, bottom: 0, justifyContent: 'center'}}/>}
                        </Input>
                    </TouchableRipple>

                    <TouchableRipple onPress={() => this.pick('year')}>
                        <Input>
                            <Text style={{fontSize: 16}}>Year</Text>
                            {this.props.newGoal.period === 'year' && <Icon name="check" size={24} color="#2f83c8" style={{position: 'absolute', right: 12, top: 12, bottom: 0, justifyContent: 'center'}}/>}
                        </Input>
                    </TouchableRipple>
                </View>
            </View>
        );
    }
}

export default SelectPeriodScreen