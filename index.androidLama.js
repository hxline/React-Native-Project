import React, { Component } from 'react';
import {AppRegistry, 
        ActivityIndicator, 
        StyleSheet, 
        ListView,
        Button,
        TextInput, 
        Text, 
        View } from 'react-native';
// import {Icon} from 'react-native-elements';

class InputComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      threadId: this.props.threadId,
    };
  }

  send() {
    console.log(this.state.threadId);
    console.log(this.state.text);
    if (this.state.text == '') {
      alert('Fill the comment before submit');
    } else {
      alert('id: ' + this.state.threadId + '\n comment: ' + this.state.text, 'Submiting');
      let commentData = {
        "id": this.state.threadId,
        "comments": [
          {
            "id": "",
            "comment": this.state.text
          }]
      };
      fetch('http://hxline-gateway.herokuapp.com/thread-service/comment/save', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData)
      });
    }
  }

  aler() {
    alert(this.state.threadId);
  }

  render() {
    return(
    <View style={{flex: 1, flexDirection: 'row'}}>
      <TextInput
        style={styles.commentsText}
        multiline={true}
        numberOfLines={2}
        blurOnSubmit={true}
        keyboardType='default'
        placeholder='Comment Here'
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button
        style={styles.commentsButton}
        title='Send'
        onPress={this.send.bind(this)}
      />
    </View>
    );
  }
}

class Likes extends Component {
    render() {
        return (
            <View>
                  {/* <Icon name='rowing' />   */}
                <Text style={styles.like}>Likes {this.props.thumbsUp} || Dislikes {this.props.thumbsDown}</Text>
            </View>
        );
    }
}

class Thread extends Component {
    render() {
         console.log(this.props.comments);
        return (
            <View style={styles.container}>
                <Likes thumbsUp={this.props.thumbsUp} thumbsDown={this.props.thumbsDown}/>
                <Text style={styles.thread}>{this.props.thread}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <Text style={styles.comment}>Comments</Text> 
                <Comment comments={this.props.comments} />
                <InputComment threadId={this.props.threadId} />   
            </View>
        );
    }
}

class Comment extends Component {
  render() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    dataSources = ds.cloneWithRows(this.props.comments);
    console.log(dataSources);
    return (
        <ListView
          style={styles.comments}
          dataSource={dataSources}
          renderRow={(comments) =>
            <Text>{comments.comment}</Text>
          }
        />
    );
  }
}

export default class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  //asyncronous testing
  async componentDidMount() {
    try {
      let response = await fetch('http://hxline-gateway.herokuapp.com/thread-service/getall')
      await response.json()
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  // componentDidMount() {
  //   // return fetch('http://hxline-gateway.herokuapp.com/thread-service/getall')
  //   //   .then((response) => response.json())
  //   //   .then((responseJson) => {
  //   //     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   //     this.setState({
  //   //       isLoading: false,
  //   //       dataSource: ds.cloneWithRows(responseJson),
  //   //     });
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error(error);
  //   //   });

  //     let responseJson = [
  //     {
  //         "id": "943dfcc7-8072-4a41-84b0-7487416b02c8",
  //         "threadTopic": "GGWP",
  //         "threadDescription": "Nama tumbuhan apa ya ??",
  //         "comments": [],
  //         "thumb": {
  //             "threadId": "943dfcc7-8072-4a41-84b0-7487416b02c8",
  //             "thumbsUp": 32,
  //             "thumbsDown": 233
  //         }
  //     }];
      
  //     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //     this.setState({
  //       isLoading: false,
  //       dataSource: ds.cloneWithRows(responseJson),
  //     });
  // }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    console.log(this.state.dataSource);
    return (
      <View style={styles.scroll}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) =>
          <Thread
            threadId={data.id} 
            thread={data.threadTopic}
            description={data.threadDescription}
            comments={data.comments}
            thumbsUp={data.thumb.thumbsUp}
            thumbsDown={data.thumb.thumbsDown} />} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 13,
    backgroundColor: 'powderblue',
    padding: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 5
  },
  like: {
    fontSize: 11,
    margin: 2,
  },
  scroll: {
    backgroundColor: 'skyblue',
  },
  thread: {
    fontWeight: 'bold',
    fontSize: 13,
    margin: 2
  },
  description: {
    fontSize: 16,
    margin: 2
  },
  comment: {
    margin: 2,
    fontSize: 13,
  },
  comments: {
    margin: 6,
    marginBottom: 15
  },
  commentsText: {
    fontSize: 12,
    flex: 2
  },
  commentsButton: {
    width: 50,
    flex: 1
  },
});

AppRegistry.registerComponent('ReactProject', () => Status);