import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, SafeAreaView, StyleSheet, View, Button, AsyncStorage, ScrollView, ActivityIndicator} from "react-native";
import styled from 'styled-components'
import Title from "../../components/Title";
import Container from "../../components/Container";
import Header from "../../components/Header";
import bunqColors from '../../bunqColors'
import NoApiKey from "../../components/NoApiKey";
import withHttp from "../../withHttp";

const Card = styled.View`
    padding: 16px;
    backgroundColor: ${props => props.color};
    borderRadius: 6px;
    marginBottom: 16px;
`

class GoalsScreen extends React.Component {
    state = {
        loading: true
    }

    fetchGoals = () => {
        this.props.http.get('/goals')
            .then(response => response.data.payload)
            .then(goals => this.props.onFetchGoals(goals))
            .then(() => this.setState({ loading: false }))
    }

    componentDidMount() {
        this.fetchGoals()
    }

    colorIndex = 0

    render() {
        return (
            <View style={{flexGrow: 1}}>
                <Header />
                <ScrollView style={{flexGrow: 1}}>
                    <NoApiKey />
                    <View style={{paddingTop: 10, paddingBottom: 10}}>
                        <Container>
                            <View style={{flexDirection: 'row'}}>
                                <Title>Your Goals</Title>
                                <View style={{marginLeft: 'auto'}}>
                                    <Button
                                        onPress={() => this.props.navigation.navigate('AddGoal')}
                                        title="Add Goal"
                                        color="#2f83c8"
                                        accessibilityLabel="Add a new goal"
                                    />
                                </View>
                            </View>

                            {this.state.loading && (
                                <View>
                                    <ActivityIndicator />
                                </View>
                            )}

                            {this.props.goals.map(goal => {
                                if (this.colorIndex > (bunqColors.length - 1)) {
                                    this.colorIndex = 0;
                                }

                                return (
                                    <Card key={goal.id} color={bunqColors[this.colorIndex++]}>
                                        <Text style={styles.goal}>Spend less than €20,-</Text>
                                        <Text style={styles.target}>on AH TO GO 863</Text>
                                    </Card>
                                )
                            })}

                        </Container>
                    </View>
                </ScrollView>
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

export default withHttp()(GoalsScreen)