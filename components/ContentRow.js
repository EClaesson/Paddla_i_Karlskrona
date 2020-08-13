import React, {Component} from 'react';

import {StyleSheet, View} from 'react-native';
import {observer} from "mobx-react";

@observer
export default class ContentRow extends Component {
    render() {
        return (
            <View style={styles.contentRow}>
                { this.props.children }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentRow: {
        flex: 1,
        flexDirection: 'row',
    },
});
