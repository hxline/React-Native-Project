import React, { Component } from 'react';
import {
  ListView,
  Text
} from 'react-native';

export default class Comments extends Component {
  render() {
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    dataSources = ds.cloneWithRows(this.props.comments);
    // console.log(dataSources);
    return (
      <ListView 
        enableEmptySections={true}
        style={this.props.styles.comments}
        dataSource={dataSources}
        renderRow={(comments) =>
          <Text>{comments.comment}</Text>
        }
      />
    );
  }
}