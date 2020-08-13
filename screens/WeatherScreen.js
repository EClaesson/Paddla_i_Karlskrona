import React, {Component} from 'react';

import ScreenBase from "./ScreenBase";
import {StyleSheet, View} from "react-native";
import {ScreenHeaderText} from "../components/ScreenHeaderText";
import {WeatherWidget} from "../components/WeatherWidget";
import ContentRow from "../components/ContentRow";
import ContentBox from "../components/ContentBox";
import WidgetText from "../components/WidgetText";
import {faCloudSun, faSun, faTemperatureHigh, faWind} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {observer} from "mobx-react";
import {withStoreContext} from "../contexts/StoreContext";

@withStoreContext
@observer
export default class WeatherScreen extends Component {
    static formatHour(dateStr) {
        let date = new Date(dateStr);

        return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
    }

    static formatDate(dateStr) {
        let date = new Date(dateStr);

        return date.getDate().toString() + '/' + (date.getMonth() + 1).toString();
    }

    static getWeatherIcon(weatherStr) {
        return {
            'cloud-sun': faCloudSun,
            //...
        }[weatherStr];
    }

    componentDidMount() {
        const { store } = this.props;

        store.weatherData.getCurrent();
        store.weatherData.getToday();
        store.weatherData.getWeek();
    }

    render() {
        const { store } = this.props;

        return (
            <ScreenBase>
                <ScreenHeaderText>Väder</ScreenHeaderText>
                <WeatherWidget title="Nu"/>

                <ContentBox title="Idag">
                    <ContentRow>
                        <View style={styles.rowColumn}/>
                        <View style={styles.rowColumn}><FontAwesomeIcon icon={faWind} style={styles.headerIcon} size={18}/></View>
                        <View style={styles.rowColumn}><FontAwesomeIcon icon={faTemperatureHigh} style={styles.headerIcon} size={18}/></View>
                        <View style={styles.rowColumn}><FontAwesomeIcon icon={faSun} style={styles.headerIcon} size={18}/></View>
                    </ContentRow>

                    { store.weatherData.today.map((hour, index) => {
                        return (
                            <ContentRow key={index}>
                                <View style={styles.rowColumn}><WidgetText>{WeatherScreen.formatHour(hour.time)}</WidgetText></View>
                                <View style={styles.rowColumn}><WidgetText>{hour.windSpeed} ({hour.windGust}) m/s {hour.windDirection}</WidgetText></View>
                                <View style={styles.rowColumn}><WidgetText>{hour.airTemp}° C</WidgetText></View>
                                <View style={styles.rowColumn}><FontAwesomeIcon icon={WeatherScreen.getWeatherIcon(hour.weather)} style={styles.rowIcon} size={18} /></View>
                            </ContentRow>
                        );
                    })}
                </ContentBox>

                <ContentBox title="Vecka">
                    <ContentRow>
                        <View style={styles.rowColumn}/>
                        <View style={styles.rowColumn}><FontAwesomeIcon icon={faWind} style={styles.headerIcon} size={18}/></View>
                        <View style={styles.rowColumn}><FontAwesomeIcon icon={faTemperatureHigh} style={styles.headerIcon} size={18}/></View>
                        <View style={styles.rowColumn}><FontAwesomeIcon icon={faSun} style={styles.headerIcon} size={18}/></View>
                    </ContentRow>

                    { store.weatherData.week.map((day, index) => {
                        return (
                            <ContentRow key={index}>
                                <View style={styles.rowColumn}><WidgetText>{WeatherScreen.formatDate(day.date)}</WidgetText></View>
                                <View style={styles.rowColumn}><WidgetText>{day.windSpeed} ({day.windGust}) m/s {day.windDirection}</WidgetText></View>
                                <View style={styles.rowColumn}><WidgetText>{day.airTemp}° C</WidgetText></View>
                                <View style={styles.rowColumn}><FontAwesomeIcon icon={WeatherScreen.getWeatherIcon(day.weather)} style={styles.rowIcon} size={18}/></View>
                            </ContentRow>
                        );
                    })}
                </ContentBox>

            </ScreenBase>
        );
    }
}

const styles = StyleSheet.create({
    rowColumn: {
        width: '25%',
        alignItems: 'center',
        marginTop: 8,
    },

    headerIcon: {
        color: 'white',
    },

    rowIcon: {
        color: 'white',
        marginTop: 0,
    },
});
