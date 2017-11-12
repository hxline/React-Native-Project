import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';

export default class Likes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            threadId: this.props.threadId,
            thumbsUp: this.props.thumbsUp,
            thumbsDown: this.props.thumbsDown,
            hasClick: false
        };
    }

    async onClickLike() {
        if (!this.state.hasClick) {
            let temp = await parseInt(this.state.thumbsUp) + 1;
            await this.setState({
                thumbsUp: temp,
                hasClick: true
            });
            this.send();
        }
    }

    async onClickDislike() {
        if (!this.state.hasClick) {
            let temp = await parseInt(this.state.thumbsDown) + 1;
            await this.setState({
                thumbsDown: temp,
                hasClick: true
            });
            this.send();
        }
    }

    async send() {
        alert('Sending : \n' + this.state.threadId + ' : ' + this.state.thumbsUp + ' and ' + this.state.thumbsDown);
        try {
            let thumbData = {
                "threadId": this.state.threadId,
                "thumbsUp": this.state.thumbsUp,
                "thumbsDown": this.state.thumbsDown
            };
            await fetch('http://hxline-gateway.herokuapp.com/thumb-service/save', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(thumbData)
            });

            alert('Success');
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableNativeFeedback disabled={this.state.hasClick} onPress={() => this.onClickLike()}>
                    <View>
                        <Text style={this.props.styles.like}> Likes {this.state.thumbsUp} </Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={this.props.styles.like}> || </Text>
                <TouchableNativeFeedback disabled={this.state.hasClick} onPress={() => this.onClickDislike()}>
                    <View>
                        <Text style={this.props.styles.like}> Dislikes {this.state.thumbsDown} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}