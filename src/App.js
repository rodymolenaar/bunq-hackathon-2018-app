import React from 'react';
import { Text, View } from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import GoalsScreen from "./screens/Goals/Goals";
import MoreScreen from "./screens/Settings";
import MerchantsScreen from "./screens/Merchants";
import CharitiesScreen from "./screens/Charities/Charities";
import AddGoalScreen from "./screens/Goals/AddGoal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SelectCharitiesScreen from "./screens/Charities/SelectCharities";

const GoalsStack = createStackNavigator({
    Goals: GoalsScreen,
    AddGoal: AddGoalScreen,
}, {
    navigationOptions: {
        header: null
    }
});

GoalsStack.navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => <Icon name="crown" color={tintColor} size={28} />,
    tabBarLabel: 'Goals'
}

const CharitiesStack = createStackNavigator({
    Charities: CharitiesScreen,
    SelectCharities: SelectCharitiesScreen
}, {
    navigationOptions: {
        header: null
    }
});

CharitiesStack.navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => <Icon name="heart" color={tintColor} size={28} />,
    tabBarLabel: 'Charities'
}

const MerchantsStack = createStackNavigator({
    Merchants: MerchantsScreen
}, {
    navigationOptions: {
        header: null
    }
});

MerchantsStack.navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => <Icon name="store" color={tintColor} size={28} />,
    tabBarLabel: 'Merchants'
}

export default createBottomTabNavigator({
    GoalsStack,
    MerchantsStack,
    CharitiesStack,
    More: MoreScreen
});