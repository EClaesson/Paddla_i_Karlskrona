import React, {Component} from 'react';

import ScreenBase from "./ScreenBase";
import {Image, StyleSheet} from "react-native";
import {ScreenHeaderText} from "../components/ScreenHeaderText";

export default class ImageScreen extends Component {
    render() {
        return (
            <ScreenBase>
                <ScreenHeaderText style={styles.headerText}>Instagram @KKEskimå</ScreenHeaderText>

                <Image source={require('../assets/fake_ig_feed/a.jpg')} style={styles.photo} />
                <Image source={require('../assets/fake_ig_feed/b.jpg')} style={styles.photo} />
                <Image source={require('../assets/fake_ig_feed/c.jpg')} style={styles.photo} />
                <Image source={require('../assets/fake_ig_feed/a.jpg')} style={styles.photo} />
                <Image source={require('../assets/fake_ig_feed/b.jpg')} style={styles.photo} />
                <Image source={require('../assets/fake_ig_feed/c.jpg')} style={styles.photo} />
                <Image source={require('../assets/fake_ig_feed/a.jpg')} style={styles.photo} />
                <Image source={require('../assets/fake_ig_feed/b.jpg')} style={styles.photo} />
                <Image source={require('../assets/fake_ig_feed/c.jpg')} style={styles.photo} />
            </ScreenBase>
        );
    }
}

const styles = StyleSheet.create({
    photo: {
        height: 300,
        resizeMode: 'contain',
        marginBottom: 8,
    },
});
