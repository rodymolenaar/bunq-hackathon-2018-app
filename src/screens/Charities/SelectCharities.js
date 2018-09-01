import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, View, SafeAreaView, StyleSheet, Button, ScrollView} from "react-native";
import Title from "../../components/Title";
import Container from "../../components/Container";
import styled from "styled-components";
import Header from "../../components/Header";
import withHttp from "../../withHttp";
import TouchableRipple from "react-native-paper/src/components/TouchableRipple";
import SubTitle from "../../components/SubTitle";

const Category = styled.View`
    padding-vertical: 14px;
    padding-horizontal: 16px;
    border-top-width: 1px;
    border-color: #eee;
    background-color: #fff;
    flex-direction: row;
`;

const Name = styled.Text`
    color: #000;
    font-size: 16px;
`;

const Description = styled.Text`
    color: #727376;
    font-size: 12px;
`;

@withHttp(false)
class SelectCharitiesScreen extends React.Component {
    render() {
        return (
            <View>
                <Header />
                <ScrollView style={styles.container}>
                    <Container>
                        <View style={{flexDirection: 'row'}}>
                            <Title>Pick Your Charities</Title>
                            <View style={{marginLeft: 'auto'}}>
                                <Button
                                    onPress={() => this.props.navigation.goBack()}
                                    title="Back"
                                    color="#2f83c8"
                                    accessibilityLabel="Save your selection of charities"
                                />
                            </View>
                        </View>
                        <SubTitle>{this.props.navigation.state.params.category.name}</SubTitle>
                    </Container>

                    {this.props.navigation.state.params.category.charities.map(category => (
                        <TouchableRipple key={category.name} onPress={() => console.warn('Category selected')}>
                            <Category>
                                <Name>{category.name}</Name>
                                <Icon name="check" size={24} color="#2f83c8" style={{position: 'absolute', right: 12, top: 12, bottom: 0, justifyContent: 'center'}}/>
                            </Category>
                        </TouchableRipple>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    }
})

export default SelectCharitiesScreen