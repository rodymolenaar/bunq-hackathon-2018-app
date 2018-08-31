import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, View, SafeAreaView, StyleSheet, Button } from "react-native";
import Title from "../../components/Title";
import Container from "../../components/Container";
import styled from "styled-components";
import Header from "../../components/Header";

const Charity = styled.View`
    padding-vertical: 14px;
    padding-horizontal: 16px;
    border-top-width: 1px;
    border-color: #eee;
    background-color: #fff;
`;

const Name = styled.Text`
    color: #000;
    font-size: 14px;
    margin-bottom: 4px;
`;

const Description = styled.Text`
    color: #727376;
    font-size: 12px;
`;

class SelectCharitiesScreen extends React.Component {
    state = {
        charities: [
            {
                id: 1,
                name: 'Longfonds',
                iban: 'NL95INGB0000055055'
            }
        ]
    }



    render() {
        return (
            <View>
                <Header />
                <View style={styles.container}>
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
                    </Container>

                    {this.state.charities.map(charity => (
                        <Charity key={charity.id}>
                            <Name>{charity.name}</Name>
                            <Description>{charity.iban}</Description>
                        </Charity>
                    ))}
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

export default SelectCharitiesScreen