import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import Comments from './Comments';
import Comment from './Comment';
import Likes from './Likes';

export default class Thread extends Component {
    render() {
        // console.log(this.props.comments);
        return (
            <View style={this.props.styles.container}>
                <Likes styles={this.props.styles} threadId={this.props.threadId} thumbsUp={this.props.thumbsUp} thumbsDown={this.props.thumbsDown} />
                <Text style={this.props.styles.thread}>{this.props.thread}</Text>
                <Text style={this.props.styles.description}>{this.props.description}</Text>
                <Text style={this.props.styles.comment}>Comments</Text>
                <Comments styles={this.props.styles} comments={this.props.comments} />
                <Comment styles={this.props.styles} threadId={this.props.threadId} />
            </View>
        );
    }
}