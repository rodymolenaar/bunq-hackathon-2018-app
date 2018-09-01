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

class SelectOperatorScreen extends React.Component {
    pick = pick => {
        this.props.setNewGoal({
            ...this.props.newGoal,
            operator: pick
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
                        <Title>I want to spend</Title>
                    </Container>

                    <TouchableRipple onPress={() => this.pick('less')}>
                        <Input>
                            <Text style={{fontSize: 16}}>Less</Text>
                            {this.props.newGoal.operator === 'less' && <Icon name="check" size={24} color="#2f83c8" style={{position: 'absolute', right: 12, top: 12, bottom: 0, justifyContent: 'center'}}/>}
                        </Input>
                    </TouchableRipple>

                    <TouchableRipple onPress={() => this.pick('more')}>
                        <Input>
                            <Text style={{fontSize: 16}}>More</Text>
                            {this.props.newGoal.operator === 'more' && <Icon name="check" size={24} color="#2f83c8" style={{position: 'absolute', right: 12, top: 12, bottom: 0, justifyContent: 'center'}}/>}
                        </Input>
                    </TouchableRipple>

                    <TouchableRipple onPress={() => this.pick('equal')}>
                        <Input>
                            <Text style={{fontSize: 16}}>Equal</Text>
                            {this.props.newGoal.operator === 'equal' && <Icon name="check" size={24} color="#2f83c8" style={{position: 'absolute', right: 12, top: 12, bottom: 0, justifyContent: 'center'}}/>}
                        </Input>
                    </TouchableRipple>
                </View>
            </View>
        );
    }
}

export default SelectOperatorScreen