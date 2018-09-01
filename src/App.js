import React from 'react';
import { Text, View } from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import GoalsScreen from "./screens/Goals/Goals";
import MoreScreen from "./screens/More/More";
import MerchantsScreen from "./screens/Merchants";
import CharitiesScreen from "./screens/Charities/Charities";
import AddGoalScreen from "./screens/Goals/AddGoal/AddGoal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SelectCharitiesScreen from "./screens/Charities/SelectCharities";
import CategoriesScreenContainer from "./containers/CategoriesScreenContainer";
import store from "./store";
import {Provider} from "react-redux";
import LoginScreen from "./screens/Auth/Login";
import RegisterScreen from "./screens/Auth/Register";
import AboutScreen from "./screens/More/About";
import LoadingScreen from "./screens/Auth/Loading";
import SelectOperatorScreen from "./screens/Goals/AddGoal/SelectOperator";
import SelectMerchantScreen from "./screens/Goals/AddGoal/SelectMerchant";
import SelectPeriodScreen from "./screens/Goals/AddGoal/SelectPeriod";
import ApiKeyScreen from "./screens/More/ApiKey";
import AddGoalScreenContainer from "./containers/AddGoalContainer";
import SelectOperatorScreenContainer from "./containers/SelectOperatorContainer";
import withHttp from "./withHttp";
import SelectPeriodScreenContainer from "./containers/SelectPeriodContainer";
import SelectCharitiesScreenContainer from "./containers/SelectCharitiesContainer";

const AddGoalStack = createStackNavigator({
    Charities: CharitiesScreen,
    Categories: CategoriesScreenContainer,
    SelectCharities: SelectCharitiesScreen
}, {
    navigationOptions: {
        header: null
    }
});

const GoalsStack = createStackNavigator({
    Goals: GoalsScreen,
    AddGoal: AddGoalScreenContainer,
    SelectOperator: SelectOperatorScreenContainer,
    SelectMerchant: SelectMerchantScreen,
    SelectPeriod: SelectPeriodScreenContainer
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
    Categories: CategoriesScreenContainer,
    SelectCharities: SelectCharitiesScreenContainer
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

const MoreStack = createStackNavigator({
    More: MoreScreen,
    About: AboutScreen,
    ApiKey: ApiKeyScreen,
}, {
    navigationOptions: {
        header: null
    }
});

MoreStack.navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => <Icon name="menu" color={tintColor} size={28} />,
    tabBarLabel: 'More'
}

const AppStack = createBottomTabNavigator({
    GoalsStack,
    MerchantsStack,
    CharitiesStack,
    More: MoreStack,
});

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
}, {
    navigationOptions: {
        header: null
    }
});

const Navigator = createSwitchNavigator({
    LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
});

export default () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)