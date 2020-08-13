import React, {Component} from 'react';

import ScreenBase from "./ScreenBase";
import {ScreenHeaderText} from "../components/ScreenHeaderText";
import {BanWidget} from "../components/BanWidget";
import {withStoreContext} from "../contexts/StoreContext";
import {observer} from "mobx-react";

@withStoreContext
@observer
export default class BanScreen extends Component {
    render() {
        return (
            <ScreenBase>
                <ScreenHeaderText>Avlysningar</ScreenHeaderText>

                <BanWidget title="Skjutfält & Militärt" type="military"/>
                <BanWidget title="Fågelskydd" type="birdprotection"/>
                <BanWidget title="Eldningsförbud" type="fireban"/>
                <BanWidget title="Övrigt" type="other"/>
            </ScreenBase>
        );
    }
}