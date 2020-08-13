import React, { Component } from 'react';

import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import ContentBox from "./ContentBox";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faWind, faTint, faCloudSun} from "@fortawesome/free-solid-svg-icons";
import ContentRow from "./ContentRow";
import WidgetText from "./WidgetText";
import {useNavigation} from "@react-navigation/native";
import {observer} from "mobx-react";
import {withStoreContext} from "../contexts/StoreContext";

@withStoreContext
@observer
export class WeatherWidget extends Component {
    componentDidMount() {
        const { store } = this.props;
        store.weatherData.getCurrent();
    }

    navigate() {
        if(this.props.title) return;

        const { navigation } = this.props;
        navigation.navigate('Weather');
    }

    render() {
        const { store } = this.props;

        let title = this.props.title ? this.props.title : 'Väder';

        let weatherIcon = {
            'cloud-sun': faCloudSun,
            //...
        }[store.weatherData.current.weather];

        return (
            <ContentBox title={title}>
                <ContentRow>
                    <TouchableWithoutFeedback onPress={() => this.navigate()}>
                        <View style={styles.weatherContentColumn}>
                            <FontAwesomeIcon icon={faWind} style={styles.weatherIcon} size={32}/>
                            <WidgetText>{ store.weatherData.current.windSpeed } ({ store.weatherData.current.windGust }) m/s { store.weatherData.current.windDirection }</WidgetText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.navigate()}>
                        <View style={styles.weatherContentColumn}>
                            <FontAwesomeIcon icon={faTint} style={styles.weatherIcon} size={32}/>
                            <WidgetText>{ store.weatherData.current.waterTempSurface } ({ store.weatherData.current.waterTemp1Meter })° C</WidgetText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.navigate()}>
                        <View style={styles.weatherContentColumn}>
                            <FontAwesomeIcon icon={weatherIcon} style={styles.weatherIcon} size={32}/>
                            <WidgetText>{ store.weatherData.current.airTemp }° C</WidgetText>
                        </View>
                    </TouchableWithoutFeedback>
                </ContentRow>
            </ContentBox>
        );
    }
}

export default function(props) {
    const navigation = useNavigation();

    return <WeatherWidget {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    weatherContentColumn: {
        width: '33%',
        alignItems: 'center',
    },

    weatherIcon: {
        color: 'white',
        marginBottom: 8,
    },
});
