import React, { Component } from 'react';

import { StyleSheet, Text, View} from 'react-native';
import {observer} from "mobx-react";

@observer
export default class ContentBox extends Component {
    render() {
        return (
            <View style={styles.contentBox}>
                <View style={styles.contentHeader}>
                    <Text style={styles.contentHeaderText}>{ this.props.title }</Text>
                </View>
                { this.props.children }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentBox: {
        backgroundColor: '#8199AC',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#CCD6DE',
        marginTop: 24,
        padding: 16,
        borderRadius: 9,
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    contentHeader: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        position: 'relative',
        top: -16,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        paddingBottom: 4,
    },

    contentHeaderText: {
        fontWeight: 'bold',
        color: '#013357',
    },
});
