import React, {Component} from 'react';
import {AppRegistry, ScrollView, StyleSheet, Text, TextInput, View, Icon} from 'react-native';
// import {Icon} from 'react-native-elements';
// import {Feeds} from 'api/hread';

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
        return (
            <View style={{flexDirection: 'column'}}>
                <Likes thumbsUp={this.props.thumbsUp} thumbsDown={this.props.thumbsDown}/>
                <Text style={styles.thread}>{this.props.thread}</Text>
                <Text style={styles.comment}>{this.props.comment}</Text>
            </View>
        );
    }
}

export default class Testing extends Component {
    constructor(){
        super()
        this.state ={
            data:[]
        }
    }

    getData(){
       return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            // for(var i in responseJson.movies) {
            //     this.setState( () => {
            //         data: [{
            //             key: responseJson.movies[i].title,
            //             value: responseJson.movies[i].releaseYear,
            //         }];
            //     });
            //     // console.log(i);
            //     // console.log(responseJson.movies[i].title);
            // }
            // console.log(responseJson.movies[2].title);
            // for (var key in object) {
            //     if (object.hasOwnProperty(key)) {
            //         var element = object[key];
                    
            //     }
            // }

            // console.log(responseJson.movies);
            this.setState({data: responseJson.movies.map(function(item) {
                    return {
                        key:item.title,
                        value:item.title
                    };
                })
            });
        })
        .catch((error) => {
            console.error(error);
        });

    }

    componentDidMount() {
        this.getData();
    }

    render() {
        
        return (
            <ScrollView style={styles.scroll}>
                 <View style={styles.container}>
                    <Thread thread='Testing thereadawdfefjj ???' comment='Terang'
                    thumbsUp='2' thumbsDown='4' />
                </View>
                <View style={styles.container}>
                    <Thread thread='Testing thereadawdfefjj ???' comment='Terang'
                    thumbsUp='2' thumbsDown='4' />
                </View>
                <View style={styles.container}>
                    <Thread thread='Testing thereadawdfefjj ???' comment='Terang'
                    thumbsUp='2' thumbsDown='4' />
                </View>
                <View style={styles.container}>
                    <Thread thread='Testing thereadawdfefjj ???' comment='Terang'
                    thumbsUp='2' thumbsDown='4' />
                </View>
                <View style={styles.container}>
                    <Thread thread='Testing thereadawdfefjj ???' comment='Terang'
                    thumbsUp='2' thumbsDown='4' />
                </View>
                <View style={styles.container}>
                    <Thread thread='Testing thereadawdfefjj ???' comment='Terang'
                    thumbsUp='2' thumbsDown='4' />
                </View>
                <View style={styles.container}>
                    <Thread thread='Testing thereadawdfefjj ???' comment='Terang'
                    thumbsUp='2' thumbsDown='4' />
                </View>
                <View style={styles.container}>
                    <Thread thread='Testing thereadawdfefjj ???' comment='Terang'
                    thumbsUp='2' thumbsDown='4' />
                </View>
                <View style={styles.container}>
                    <Thread thread='Testing thereadawdfefjj ???' comment='Terang'
                    thumbsUp='2' thumbsDown='4' />
                </View>
            </ScrollView>
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
    fontSize: 16,
    margin: 2
  },
  comment: {
    fontSize: 13,
    color: '#333333',
    margin: 2,
    marginBottom: 15
  },
});

AppRegistry.registerComponent('ReactProject', () => Testing);