import React, {Component} from 'react';

import ScreenBase from "./ScreenBase";
import {ScreenHeaderText} from "../components/ScreenHeaderText";
import ContentBox from "../components/ContentBox";
import {observer} from "mobx-react";
import {withStoreContext} from "../contexts/StoreContext";
import ActivityListItem from "../components/ActivityListItem";

@withStoreContext
@observer
export default class ActivityScreen extends Component {
    componentDidMount() {
        const { store } = this.props;

        store.activityData.getActivities();
    }

    render() {
        const { store } = this.props;

        return (
            <ScreenBase>
                <ScreenHeaderText>Aktiviteter</ScreenHeaderText>

                <ContentBox title="Idag">
                    { store.activityData.getFilteredToday().map((activity, index) => {
                        return (<ActivityListItem activity={activity} key={index} />);
                    })}
                </ContentBox>

                <ContentBox title="Kommande">
                    { store.activityData.getFilteredFuture().map((activity, index) => {
                        return (<ActivityListItem activity={activity} key={index} />);
                    })}
                </ContentBox>
            </ScreenBase>
        );
    }
}

