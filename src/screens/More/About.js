import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, View, SafeAreaView, StyleSheet, Button, TouchableOpacity } from "react-native";
import Title from "../../components/Title";
import Container from "../../components/Container";
import styled from "styled-components";
import Header from "../../components/Header";

class AboutScreen extends React.Component {
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
                <View style={styles.container}>
                    <Container>
                        <Title>About this app</Title>

                        <Text style={{marginBottom: 12}}>
                            This app is the result of the very first bunq hackathon in 2018. We had a very good time and are pleased to be able to show this app to you today.
                        </Text>
                        <Text style={{marginBottom: 16}}>
                            Created by: Rick van der Linden, Daniël Hansen and Rody Molenaar.
                        </Text>
                    </Container>
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

export default AboutScreen