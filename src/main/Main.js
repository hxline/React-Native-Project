import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  View,
  Text,
  RefreshControl,
  Menu,
  Modal,
  TouchableNativeFeedback,
  KeyboardAvoidingView
} from 'react-native';
// import {
//   Router,
//   Scene
// } from 'react-native-router-flux'
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import SideMenu from 'react-native-side-menu';
import Thread from '../components/Thread';
import InputThread from '../components/modals/InputThread';
import styles from '../../stylesheet/css';
import ThreadAPI from '../api/Thread';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      refreshing: false,
      modalVisible: false
    }
  }

  //asyncronous testing
  // async componentDidMount() {
  //   try {
  //     let response = await fetch('http://hxline-gateway.herokuapp.com/thread-service/getall')
  //     await response.json()
  //       .then((responseJson) => {
  //         let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  //         console.log(responseJson);
  //         this.setState({
  //           dataSource: ds.cloneWithRows(responseJson),
  //           isLoading: false,
  //           refreshing: false
  //         });
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  onRefresh() {
    this.setState({
      refreshing: true
    });
    this.componentDidMount();
  }

  // static data
  componentDidMount() {
    let responseJson = [
      {
        "id": "943dfcc7-8072-4a41-84b0-7487416b02c8",
        "threadTopic": "GGWP",
        "threadDescription": "Nama tumbuhan apa ya ??",
        "comments": [],
        "thumb": {
          "threadId": "943dfcc7-8072-4a41-84b0-7487416b02c8",
          "thumbsUp": 32,
          "thumbsDown": 233
        }
      },
      {
        "id": "943dfcc7-8072-4a41-84b0-7487416b02c8",
        "threadTopic": "GGWP",
        "threadDescription": "Nama tumbuhan apa ya ??",
        "comments": [],
        "thumb": {
          "threadId": "943dfcc7-8072-4a41-84b0-7487416b02c8",
          "thumbsUp": 32,
          "thumbsDown": 233
        }
      },
      {
        "id": "943dfcc7-8072-4a41-84b0-7487416b02c8",
        "threadTopic": "GGWP",
        "threadDescription": "Nama tumbuhan apa ya ??",
        "comments": [],
        "thumb": {
          "threadId": "943dfcc7-8072-4a41-84b0-7487416b02c8",
          "thumbsUp": 32,
          "thumbsDown": 233
        }
      }
      , {
        "id": "943dfcc7-8072-4a41-84b0-7487416b02c8",
        "threadTopic": "GGWP",
        "threadDescription": "Nama tumbuhan apa ya ??",
        "comments": [],
        "thumb": {
          "threadId": "943dfcc7-8072-4a41-84b0-7487416b02c8",
          "thumbsUp": 32,
          "thumbsDown": 233
        }
      }];

    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({
      dataSource: ds.cloneWithRows(responseJson),
      isLoading: false,
      refreshing: false
    });
  }

  // async componentDidMount() {
  //     // new ThreadAPI().saveComment('1', '22');
  //     // let responseJsonFromFunc = await new ThreadAPI().getThread();
  //     // console.log(responseJsonFromFunc);
  //     try {
  //       console.log(await threadApi);
  //       console.log('EEEEEEE');
  //       let data = await threadApi;

  //       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //       this.setState({
  //         dataSource: ds.cloneWithRows(data),
  //         isLoading: false,
  //         refreshing: false
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  // }

  toggleModal(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
          <Text style={{ textAlign: 'center' }}>
            FETCHING DATA FROM SERVER...
          </Text>
        </View>
      );
    }

    alert('Test Codepush AAA');
    return (
      <SideMenu menu={
        <View style={styles.sideMenu}>
          <Text style={styles.sideMenuText}>
            Available Soon
          </Text>
        </View>
      }>
        <View style={styles.scroll}>
          {/* List data */}
          <ListView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh.bind(this)}
              />
            }
            dataSource={this.state.dataSource}
            renderRow={(data) =>
              <Thread
                styles={styles}
                threadId={data.id}
                thread={data.threadTopic}
                description={data.threadDescription}
                comments={data.comments}
                thumbsUp={data.thumb.thumbsUp}
                thumbsDown={data.thumb.thumbsDown}
              />}
          />
          {/* end list data */}
          {/* Action button */}
          <ActionButton
            outRangeScale={1}
            icon={<Icon name="md-outlet" style={{ fontSize: 30, color: 'powderblue' }} />}
            buttonColor="rgba(126,192,238,1)"
            offsetY={10}
            onPress={() => { this.toggleModal(true) }}
          />
          {/* <ActionButton.Item buttonColor='blue' title="New Thread" onPress={() => alert('New Thread')}>
              <Icon name="md-pricetag" style={{ fontSize: 30, color: 'skyblue' }} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='blue' title="Available soon" onPress={() => { this.toggleModal(true) }}>
              <Icon name="md-ribbon" style={{ fontSize: 30, color: 'red' }} />
            </ActionButton.Item> */}
          {/* </ActionButton> */}
          {/* end action button */}
          {/* Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => { this.toggleModal(false) }}
          >
            <InputThread styles={styles} toggleModal={this.toggleModal.bind(this)} />
          </Modal>
          {/* end modal */}
        </View>
      </SideMenu>
    );
  }
}