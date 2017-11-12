import React, { Component } from 'react';
import {
  Button,
  TextInput,
  View,
  TouchableNativeFeedback,
  Text,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ThreadAPI from './Thread';
import InputComment from './modals/InputComment'

export default class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      threadId: this.props.threadId,
      modalVisible: false
    };
  }

  async send() {
    if (this.state.text == '') {
      alert('Fill the comment before submit');
    } else {
      alert('Sending: \n id: ' + this.state.threadId + '\n comment: ' + this.state.text, 'Submiting');
      try {
        let commentData = {
          "id": this.state.threadId,
          "comments": [
            {
              "id": "",
              "comment": this.state.text
            }]
        };
        await fetch('http://hxline-gateway.herokuapp.com/thread-service/comment/save', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentData)
        });
        alert('Success !!!');
      } catch (error) {
        console.error(error);
        alert(error);
      } finally {
        this.setState({
          text: ''
        });
      }
    }
  }

  toggleModalCom(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  toggleModal(visible, textComment) {
    this.setState({
      modalVisible: visible,
      text: textComment
    });
  }

  render() {
    return (
      <View style={this.props.styles.commentInput}>
        {/* <TextInput
          style={this.props.styles.commentsText}
          multiline={true}
          numberOfLines={2}
          blurOnSubmit={true}
          keyboardType='default'
          placeholder='Comment Here'
          value={this.state.text}
          onFocus={() => this.toggleModalCom(true)}
        /> */}
        <Text
          style={this.props.styles.commentsText}
          onPress={() => this.toggleModalCom(true)}
        >
          {this.state.text}
        </Text>
        <TouchableNativeFeedback delayLongPress={1} onPress={() => this.send()}>
          <View style={this.props.styles.commentsButton}>
            <Icon name='md-paper-plane' style={{ fontSize: 30, color: 'skyblue' }} />
          </View>
        </TouchableNativeFeedback>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.toggleModal(false) }}
        >
          <InputComment styles={this.props.styles} textComment={this.state.text} toggleModal={this.toggleModal.bind(this)} />
        </Modal>
      </View>
    );
  }
}