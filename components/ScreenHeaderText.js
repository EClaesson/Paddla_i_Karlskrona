import React, {Component} from 'react';
import {StyleSheet, Text} from "react-native";

export class ScreenHeaderText extends Component {
    render() {
        return (
            <Text style={styles.headerText}>{this.props.children}</Text>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 5,
        marginBottom: 15,
    }
});