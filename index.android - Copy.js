import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  ListView,
  View,
  Text,
  RefreshControl,
  Menu,
  Modal,
  TouchableNativeFeedback
} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import SideMenu from 'react-native-side-menu';
import Thread from './src/components/Thread';
import InputThread from './src/components/InputThread';
import styles from './stylesheet/css';
import ThreadAPI from './src/api/Thread';

// import {Icon} from 'react-native-elements';

export default class Threads extends Component {

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

    // console.log(new ThreadAPI().getThread());
    console.log('TTTTTTTTTTTTTTTTTTTT');
    console.log(this.state.modalVisible);
    // console.log(this.state.dataSource);
    // new ThreadAPI().saveComment();
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
          <ActionButton buttonColor="rgba(231,76,60,1)" position='right'>
            <ActionButton.Item buttonColor='blue' title="New Thread" onPress={() => alert('New Thread')}>
              <Icon name="md-pricetag" style={{ fontSize: 30, color: 'skyblue' }} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='blue' title="Available soon" onPress={() => { this.toggleModal(true) }}>
              <Icon name="md-ribbon" style={{ fontSize: 30, color: 'red' }} />
            </ActionButton.Item>
          </ActionButton>
          {/* end action button */}
          {/* Modal */}
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => { this.toggleModal(false) }}
          >
            {/* <InputThread style={{position: 'absolute'}} styles={styles} modalVisible={true}/> */}
            <InputThread styles={styles} modalVisible={this.state.modalVisible} onChange={this.onChange} />
          </Modal>
          {/* end modal */}
        </View>
      </SideMenu>
    );
  }
}

AppRegistry.registerComponent('ReactProject', () => Threads);