import React, {Component} from 'react';

import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import ContentBox from "./ContentBox";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faAnchor, faCrow} from "@fortawesome/free-solid-svg-icons";
import ContentRow from "./ContentRow";
import WidgetText from "./WidgetText";
import {useNavigation} from "@react-navigation/native";
import {observer} from "mobx-react";
import {withStoreContext} from "../contexts/StoreContext";

@withStoreContext
@observer
export class BanWidget extends Component {
    formatDate(longDateStr) {
        let date = new Date(longDateStr);
        let day = date.getDate().toString().padStart(2, ' ');
        let month = (date.getMonth() + 1).toString().padEnd(2, ' ');

        return day + '/' + month;
    }

    componentDidMount() {
        const { store } = this.props;
        store.banData.getBans();
    }

    navigate() {
        if(this.props.title) return;

        const { navigation } = this.props;
        navigation.navigate('Bans');
    }

    render() {
        const { store } = this.props;

        let title = this.props.title ? this.props.title : 'Avlysningar';

        return (
            <ContentBox title={title}>
                <TouchableWithoutFeedback onPress={() => this.navigate()}>
                    <View>
                            { store.banData.bans.map((ban, index) => {
                                if(!this.props.type || this.props.type === ban.type) {
                                    let startDate = this.formatDate(ban.startDate);
                                    let endDate = this.formatDate(ban.endDate);

                                    let icon = {
                                        military: faAnchor,
                                        birdprotection: faCrow,
                                        //...
                                    }[ban.type];

                                    return (
                                        <ContentRow key={index}>
                                            { this.props.type ? null : <View style={styles.columnIcon}><FontAwesomeIcon icon={icon} size={13} style={styles.tableIcon}/></View> }
                                            <View style={styles.columnDateStart}><WidgetText>{ startDate }</WidgetText></View>
                                            <View style={styles.columnDateSeparator}><WidgetText>- </WidgetText></View>
                                            <View style={styles.columnDateEnd}><WidgetText>{ endDate }</WidgetText></View>
                                            <View style={styles.columnArea}><WidgetText>{ ban.area }</WidgetText></View>
                                        </ContentRow>
                                    );
                                }
                            }) }
                    </View>
                </TouchableWithoutFeedback>
            </ContentBox>
        );
    }
}

export default function(props) {
    const navigation = useNavigation();

    return <BanWidget {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    columnIcon: {
        width: '6%',
    },

    columnDateStart: {
        width: '10%',
        textAlign: 'right',
        marginLeft: 6,
    },

    columnDateEnd: {
        width: '10%',
        textAlign: 'left',
    },

    columnDateSeparator: {
        width: '4%',
        textAlign: 'center',
    },

    columnArea: {
        width: '70%',
        marginLeft: 10,
    },

    tableIcon: {
        marginTop: 3,
        color: 'white',
    },

    tabularNums: {
        fontVariant: ['tabular-nums'],
    },
});
