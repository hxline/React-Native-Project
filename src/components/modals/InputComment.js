import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput
} from 'react-native'

export default class InputComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textComment: this.props.textComment
        };
    }

    toggleModal(visible) {
        this.props.toggleModal(visible, this.state.textComment);
    }

    render() {
        // console.log(this.props.textComment);
        return (
            <View style={this.props.styles.modalBackground}>
                <TextInput
                    style={{ flex: 1, color: 'white' }}
                    autoFocus={true}
                    multiline={false}
                    numberOfLines={4}
                    placeholder='What is your comment ?'
                    placeholderTextColor='white'
                    onChangeText={(textComment) => this.setState({ textComment })}
                    value={this.state.textComment}
                    onSubmitEditing={() => this.toggleModal(false)}
                    returnKeyType="done"
                    keyboardType="default"
                    blurOnSubmit={true}
                />
            </View>
        )
    }
}