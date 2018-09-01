import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Button, StyleSheet, Text, View} from "react-native";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Title from "../../components/Title";
import styled from "styled-components";
import {TouchableRipple} from "react-native-paper";

const ListItem = styled.View`
    padding-vertical: 14px;
    padding-horizontal: 16px;
    border-top-width: 1px;
    border-color: #eee;
    background-color: #fff;
`;

class MoreScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => <Icon name="menu" color={tintColor} size={28} />,
        tabBarLabel: 'More'
    }

    render() {
        return (
            <View>
                <Header />
                <View style={styles.container}>
                    <Container>
                        <Title>More</Title>
                    </Container>

                    <ListItem>
                        <Text>Maximum donation amount</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Change email address</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Change password</Text>
                    </ListItem>
                    <TouchableRipple onPress={() => this.props.navigation.navigate('ApiKey')}>
                        <ListItem>
                            <Text>API key</Text>
                        </ListItem>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => this.props.navigation.navigate('About')}>
                        <ListItem>
                            <Text>About this app</Text>
                        </ListItem>
                    </TouchableRipple>
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

export default MoreScreen