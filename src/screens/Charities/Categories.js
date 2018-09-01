import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, View, SafeAreaView, StyleSheet, Button, ScrollView, TouchableOpacity} from "react-native";
import Title from "../../components/Title";
import Container from "../../components/Container";
import styled from "styled-components";
import Header from "../../components/Header";
import withHttp from "../../withHttp";
import TouchableRipple from "react-native-paper/src/components/TouchableRipple";

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

class CategoriesScreen extends React.Component {
    fetchCharities = () => {
        this.props.http.get('/charities')
            .then(response => response.data.payload)
            .then(categories => this.props.onFetchCategories(categories))
            .catch(error => console.error(error))
    }


    componentDidMount() {
        if (! this.props.categories.length > 0) {
            this.fetchCharities()
        }
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
                    </Container>

                    {this.props.categories.map(category => (
                        <TouchableRipple key={category.name} onPress={() => this.props.navigation.navigate('SelectCharities', { category })}>
                            <Category>
                                <Name>{category.name}</Name>
                                <Icon name="chevron-right" size={34} color="#727376" style={{position: 'absolute', right: 6, top: 6, bottom: 0, justifyContent: 'center'}}/>
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
        paddingTop: 10
    }
})

export default withHttp()(CategoriesScreen)