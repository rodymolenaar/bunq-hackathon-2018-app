import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, View} from "react-native";

class MoreScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => <Icon name="menu" color={tintColor} size={28} />,
        tabBarLabel: 'More'
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>More!</Text>
            </View>
        );
    }
}

export default MoreScreen