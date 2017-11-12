import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View,
    TouchableNativeFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Main from '../../main/Main'

export default class InputThread extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textTopic: '',
            textDescription: ''
        };
    }

    async send() {
        if (this.state.textTopic == '' || this.state.textDescription == '') {
            alert('Fill all field before submit');
        } else {
            alert('Sending : \n' + this.state.textTopic + ' \n' + this.state.textDescription);
            try {
                // let threadData = {
                //   "id": "",
                //   "threadTopic": this.state.textTopic,
                //   "threadDescription": this.state.textDescription,
                //   "comments": []
                // };
                // await fetch('http://hxline-gateway.herokuapp.com/thread-service/save', {
                //   method: 'POST',
                //   headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                //   },
                //   body: JSON.stringify(threadData)
                // });
                // alert('Success !!!');
            } catch (error) {
                console.error(error);
            } finally {
                this.setState({
                    textTopic: '',
                    textDescription: ''
                });
                this.toggleModal(false);
            }
        }
    }

    toggleModal(visible) {
        this.props.toggleModal(visible);
    }

    render() {
        return (
            <View style={this.props.styles.modalBackground}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={this.props.styles.modalField}>
                        Topic
                        </Text>
                    <TextInput
                        style={this.props.styles.modalTextInput}
                        blurOnSubmit={true}
                        keyboardType='default'
                        placeholder='Topic Here'
                        onChangeText={(textTopic) => this.setState({ textTopic })}
                        value={this.state.textTopic}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={this.props.styles.modalField}>
                        Description
                        </Text>
                    <TextInput
                        style={this.props.styles.modalTextInput}
                        multiline={true}
                        numberOfLines={2}
                        blurOnSubmit={true}
                        keyboardType='default'
                        placeholder='Description Here'
                        onChangeText={(textDescription) => this.setState({ textDescription })}
                        value={this.state.textDescription}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginRight: 10 }}>
                    <TouchableNativeFeedback onPress={() => this.toggleModal(false)}>
                        <Icon name='md-undo' style={{ paddingRight: 12, fontSize: 30, color: 'red' }} />
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.send()}>
                        <Icon name='md-copy' style={{ fontSize: 30, color: 'green' }} />
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}