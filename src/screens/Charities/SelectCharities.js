import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, View, SafeAreaView, StyleSheet, Button, ScrollView, TouchableOpacity} from "react-native";
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

class SelectCharitiesScreen extends React.Component {
    pick = charity => {
        if (charity.selected) {
            this.props.onUpdateCharity({
                id: charity.id,
                selected: false
            })
        } else {
            this.props.onUpdateCharity({
                id: charity.id,
                selected: true
            })
        }

        setInterval(() => {
            this.props.http.patch('/account/charities', {
                charities: this.props.selectedCharities.map(charity => charity.id)
            })
        }, 500);


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
                <ScrollView style={styles.container}>
                    <Container>
                        <Title>Pick Your Charities</Title>
                        <SubTitle>{this.props.navigation.state.params.category.name}</SubTitle>
                    </Container>

                    {this.props.charities.map(charity => (
                        <TouchableRipple key={charity.name} onPress={() => this.pick(charity)}>
                            <Category>
                                <Name>{charity.name}</Name>
                                {charity.selected && <Icon name="check" size={24} color="#2f83c8" style={{position: 'absolute', right: 12, top: 12, bottom: 0, justifyContent: 'center'}}/>}
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

export default withHttp()(SelectCharitiesScreen)