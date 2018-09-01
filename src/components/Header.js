import React, {Fragment} from "react";
import {View, SafeAreaView, Text, Platform, StatusBar} from "react-native";
import {isIphoneX} from "react-native-iphone-x-helper";
import bunqColors from '../bunqColors'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? isIphoneX() ? 30 : 20 : 0;

const Header = ({ left }) => (
    <Fragment>
        <StatusBar barStyle="light-content"/>
        <View style={{backgroundColor: '#5eb04c'}}>
            <View style={{flexDirection: 'row'}}>
                {bunqColors.map(color => (
                    <View key={color} style={{height: 50 + STATUSBAR_HEIGHT, width: 100 / bunqColors.length + '%', backgroundColor: color}}/>
                ))}
            </View>
            <View style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0}}>
                <View style={{height: STATUSBAR_HEIGHT, backgroundColor: 'rgba(0, 0, 0, .3)'}}/>
                <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
                    {left &&
                        <View style={{position: 'absolute', left: 0, top: 0, bottom: 0}}>
                            {left}
                        </View>
                    }
                    <Text style={{fontSize: 18, fontWeight: '800', color: '#fff', textAlign: 'center'}}>Do Good with bunq</Text>
                </View>
            </View>
        </View>
    </Fragment>
)

export default Header