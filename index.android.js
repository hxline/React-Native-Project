import React, { Component } from 'react';
import Main from './src/main/Main';
import { AppRegistry } from 'react-native';
import codePush from "react-native-code-push";

export default class Ind extends Component {
    componentDidMount() {
        var updateDialogOptions = {
            updateTitle: "Update",
            optionalUpdateMessage: "New version of the app is available. Install and Restart?",
            optionalIgnoreButtonLabel: "Later",
            optionalInstallButtonLabel: "Yes",
        };

        codePush.sync({ updateDialog: updateDialogOptions, installMode: codePush.InstallMode.IMMEDIATE });
    }

    render() {
        return (
            <Main />
        );
    }
}

AppRegistry.registerComponent('ReactProject', () =>  Ind);