import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, SafeAreaView, StyleSheet, View, Button, Picker, TextInput, TouchableOpacity} from "react-native";
import styled from 'styled-components'
import Title from "../../../components/Title";
import Container from "../../../components/Container";
import {TouchableRipple} from "react-native-paper";
import Header from "../../../components/Header";
import {NavigationEvents} from "react-navigation";
import withHttp from "../../../withHttp";

const Input = styled.View`
    padding-vertical: 14px;
    padding-horizontal: 16px;
    border-top-width: 1px;
    border-color: #eee;
    flex-direction: row;
    background-color: #fff;
    flex-direction: row;
`;

class AddGoalScreen extends React.Component {
    onChangeText = text => {
        this.props.setNewGoal({
            ...this.props.newGoal,
            amount: text
        })
    }

    isReady = () => {
        let { operator, amount, merchant, period } = this.props.newGoal

        return operator && merchant && period && amount.length > 0
    }

    save = () => {
        let { operator, amount, merchant, period } = this.props.newGoal;

        this.props.http.post('/goal', {
            operator,
            amount: parseInt(amount) * 100,
            merchant_id: merchant.id,
            period
        })
        .then(response => response.data.payload)
        .then(goal => this.onCreateGoal(goal))

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
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Title>Add Goal</Title>
                            </View>
                            <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                                <Button
                                    disabled={!this.isReady()}
                                    onPress={this.save}
                                    title="Save"
                                    color="#2f83c7"
                                    accessibilityLabel="Save your new goal"
                                />
                            </View>
                        </View>
                    </Container>

                    <TouchableRipple onPress={() => this.props.navigation.navigate('SelectOperator')}>
                        <Input>
                            <View>
                                <Text style={{fontSize: 16}}>I want to spend</Text>
                            </View>
                            <View style={{marginLeft: 'auto'}}>
                                {this.props.newGoal.operator ? <Text style={{fontSize: 16, color: '#2f83c8'}}>{this.props.newGoal.operator}</Text> : <Text style={{fontSize: 16, color: '#727376'}}>Select</Text>}
                            </View>
                        </Input>
                    </TouchableRipple>

                    <Input>
                        <View>
                            <Text style={{fontSize: 16}}>{this.props.newGoal.operator === 'equal' ? 'To' : 'Than' }</Text>
                        </View>
                        <View style={{marginLeft: 'auto'}}>
                            <TextInput placeholder="0.00" onChangeText={this.onChangeText} value={this.props.newGoal.amount} placeholderTextColor="#727376" style={{fontSize: 16, color: '#3385c8'}} />
                        </View>
                    </Input>

                    <TouchableRipple onPress={() => this.props.navigation.navigate('SelectMerchant')}>
                        <Input>
                            <View>
                                <Text style={{fontSize: 16}}>On</Text>
                            </View>
                            <View style={{marginLeft: 'auto'}}>
                                {this.props.newGoal.merchant ? <Text style={{fontSize: 16, color: '#2f83c8'}}>{this.props.newGoal.merchant.name}</Text> : <Text style={{fontSize: 16, color: '#727376'}}>Select</Text>}
                            </View>
                        </Input>
                    </TouchableRipple>

                    <TouchableRipple onPress={() => this.props.navigation.navigate('SelectPeriod')}>
                        <Input>
                            <View>
                                <Text style={{fontSize: 16}}>Each</Text>
                            </View>
                            <View style={{marginLeft: 'auto'}}>
                                {this.props.newGoal.period ? <Text style={{fontSize: 16, color: '#2f83c8'}}>{this.props.newGoal.period}</Text> : <Text style={{fontSize: 16, color: '#727376'}}>Select</Text>}
                            </View>
                        </Input>
                    </TouchableRipple>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    goal: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '800',
        fontSize: 20
    },
    target: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '600'
    }
})

export default withHttp()(AddGoalScreen)