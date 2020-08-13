import React, {Component} from 'react';

import {StyleSheet, Text} from 'react-native';

export default class WidgetText extends Component {
    render() {
        return (
            <Text style={styles.widgetText} numberOfLines={1}>
                { this.props.children }
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    widgetText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
});
