import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, SafeAreaView, StyleSheet, View, Button} from "react-native";
import styled from 'styled-components'
import Title from "../../components/Title";
import Container from "../../components/Container";
import Header from "../../components/Header";
import bunqColors from '../../bunqColors'

const Card = styled.View`
    padding: 16px;
    backgroundColor: #f26727;
    borderRadius: 6px;
    marginBottom: 16px;
`

class GoalsScreen extends React.Component {
    render() {
        return (
            <View>
                <Header />
                <View style={{paddingTop: 10}}>
                    <Container>
                        <View style={{flexDirection: 'row'}}>
                            <Title>Your Goals</Title>
                            <View style={{marginLeft: 'auto'}}>
                                <Button
                                    onPress={() => this.props.navigation.navigate('AddGoal')}
                                    title="Add Goal"
                                    color="#841584"
                                    accessibilityLabel="Add a new goal"
                                />
                            </View>
                        </View>

                        <Card>
                            <Text style={styles.goal}>Spend less than €20,-</Text>
                            <Text style={styles.target}>on AH TO GO 863</Text>
                        </Card>

                        <Card>
                            <Text style={styles.goal}>Spend less than €20,-</Text>
                            <Text style={styles.target}>on AH TO GO 863</Text>
                        </Card>

                        <Card>
                            <Text style={styles.goal}>Spend less than €20,-</Text>
                            <Text style={styles.target}>on AH TO GO 863</Text>
                        </Card>

                        <Card>
                            <Text style={styles.goal}>Spend less than €20,-</Text>
                            <Text style={styles.target}>on AH TO GO 863</Text>
                        </Card>
                    </Container>
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

export default GoalsScreen