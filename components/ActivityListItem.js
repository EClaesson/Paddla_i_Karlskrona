import React, {Component} from 'react';

import {Linking, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import ContentRow from "./ContentRow";
import WidgetText from "./WidgetText";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

export default class ActivityListItem extends Component {
    static formatDateTime(dateStr) {
        let date = new Date(dateStr);

        let day = date.getDate() + '/' + (date.getMonth() + 1);
        let time = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');

        return day + ' ' + time;
    }

    navigate() {
        // Open example url in default browser
        Linking.openURL('https://www.facebook.com/events/3005120056176601/');
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.navigate()}>
                <View style={styles.activityRow}>
                    <View style={styles.textColumn}>
                        <ContentRow>
                            <View style={styles.activityHeaderColumn}>
                                <WidgetText >{ActivityListItem.formatDateTime(this.props.activity.datetime)}</WidgetText>
                            </View>

                            <View style={styles.activityHeaderColumn}>
                                <WidgetText style={styles.activityHeaderColumn}>{this.props.activity.organizer}</WidgetText>
                            </View>
                        </ContentRow>
                        <ContentRow>
                            <View style={styles.activityTitle}>
                                <WidgetText>{this.props.activity.title}</WidgetText>
                            </View>

                        </ContentRow>
                    </View>
                    <View style={styles.linkIcon}>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size={24} color="white" />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    activityHeaderColumn: {
        width: '50%',
        flex: 1,
    },

    activityRow: {
        marginBottom: 26,
        flex: 1,
        flexDirection: 'row',
    },

    activityTitle: {
        paddingLeft: 12,
    },

    textColumn: {
        width: '90%',
    },

    linkIcon: {
        marginTop: 4,
    },
});


