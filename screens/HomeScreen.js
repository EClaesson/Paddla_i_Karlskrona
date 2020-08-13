import React, {Component} from 'react';

import WeatherWidget from "../components/WeatherWidget";
import BanWidget from "../components/BanWidget";
import ActivityWidget from "../components/ActivityWidget";
import ScreenBase from "./ScreenBase";
import {useNavigation} from '@react-navigation/native';

export class HomeScreen extends Component {
    render() {
        return (
            <ScreenBase>
                <WeatherWidget/>
                <BanWidget/>
                <ActivityWidget/>
            </ScreenBase>
        );
    }
}

export default function(props) {
    const navigation = useNavigation();

    return <HomeScreen {...props} navigation={navigation} />;
}