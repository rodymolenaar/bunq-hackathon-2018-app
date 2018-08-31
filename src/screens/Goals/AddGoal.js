import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, SafeAreaView, StyleSheet, View, Button} from "react-native";
import styled from 'styled-components'
import Title from "../../components/Title";
import Container from "../../components/Container";
import {TouchableRipple} from "react-native-paper";
import Header from "../../components/Header";

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
    render() {
        return (
            <View>
                <Header />
                <View style={{paddingTop: 10}}>
                    <Container>
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Title>Add Goal</Title>
                            </View>
                            <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                                <Button
                                    onPress={() => this.props.navigation.goBack()}
                                    title="Cancel"
                                    color="#e40020"
                                    accessibilityLabel="Cancel your new goal"
                                />
                                <Button
                                    onPress={() => console.warn('Edit')}
                                    title="Save"
                                    color="#2f83c7"
                                    accessibilityLabel="Save your new goal"
                                />
                            </View>
                        </View>
                    </Container>

                    <TouchableRipple onPress={() => console.warn('More, Less, About the same')}>
                        <Input>
                            <View>
                                <Text style={{fontSize: 16}}>I want to spend</Text>
                            </View>
                            <View style={{marginLeft: 'auto'}}>
                                <Text style={{fontSize: 16, color: '#727376'}}>Select</Text>
                            </View>
                        </Input>
                    </TouchableRipple>

                    <Input>
                        <View>
                            <Text style={{fontSize: 16}}>Than</Text>
                        </View>
                        <View style={{marginLeft: 'auto'}}>
                            <Text style={{fontSize: 16, color: '#727376'}}>0.00</Text>
                        </View>
                    </Input>

                    <Input>
                        <View>
                            <Text style={{fontSize: 16}}>On</Text>
                        </View>
                        <View style={{marginLeft: 'auto'}}>
                            <Text style={{fontSize: 16, color: '#727376'}}>Select</Text>
                        </View>
                    </Input>

                    <Input>
                        <View>
                            <Text style={{fontSize: 16}}>Each</Text>
                        </View>
                        <View style={{marginLeft: 'auto'}}>
                            <Text style={{fontSize: 16, color: '#727376'}}>Select</Text>
                        </View>
                    </Input>
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

export default AddGoalScreen