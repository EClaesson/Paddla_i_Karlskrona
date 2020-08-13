import React, { Component } from 'react';

import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import ContentBox from "./ContentBox";
import ContentRow from "./ContentRow";
import WidgetText from "./WidgetText";
import {useNavigation} from "@react-navigation/native";
import {observer} from "mobx-react";
import {withStoreContext} from "../contexts/StoreContext";

@withStoreContext
@observer
export class ActivityWidget extends Component {
    componentDidMount() {
        const { store } = this.props;
        store.activityData.getActivities();
    }

    navigate() {
        const { navigation } = this.props;
        navigation.navigate('Activities');
    }

    render() {
        const { store } = this.props;

        let title = this.props.title ? this.props.title : 'Aktiviteter';

        return (
            <ContentBox title={title}>
                <TouchableWithoutFeedback onPress={() => this.navigate()}>
                    <View>
                        { store.activityData.activities.map((activity, index) => {
                            let date = new Date(activity.datetime);
                            let day = date.getDate() + '/' + (date.getMonth() + 1);
                            let time = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');

                            return (
                                <ContentRow key={index}>
                                    <View style={styles.columnDate}><WidgetText>{ day }</WidgetText></View>
                                    <View style={styles.columnTime}><WidgetText>{ time }</WidgetText></View>
                                    <View style={styles.columnOrganizer}><WidgetText>{ activity.organizer }</WidgetText></View>
                                    <View style={styles.columnTitle}><WidgetText>{ activity.title }</WidgetText></View>
                                </ContentRow>
                            );
                        }) }
                    </View>
                </TouchableWithoutFeedback>
            </ContentBox>
        );
    }
}

export default function(props) {
    const navigation = useNavigation();

    return <ActivityWidget {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    columnDate: {
        width: '13%',
    },

    columnTime: {
        width: '13%',
    },

    columnOrganizer: {
        width: '25%',
        overflow: 'hidden',
        marginLeft: 6,
    },

    columnTitle: {
        width: '49%',
        overflow: 'hidden',
        marginLeft: 6,
    },
});
