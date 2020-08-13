import React, {Component} from 'react';

import {ImageBackground, ScrollView, StyleSheet, View} from "react-native";

export default class ScreenBase extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background.png')} style={styles.fullCover} imageStyle={styles.backgroundImage}>
                    <ScrollView style={styles.fullCover} contentContainerStyle={styles.centerWrapper}>
                        { this.props.children }
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    centerWrapper: {
        alignItems: 'center',
        marginTop: '20%',
        paddingBottom: 100,
    },

    fullCover: {
        width: '100%',
        height: '100%',
        flex: 1,
    },

    backgroundImage: {
        resizeMode: 'cover',
    },
});

