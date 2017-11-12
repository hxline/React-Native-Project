import React from 'react';
import { ListView } from 'react-native';

export default class ThreadAPI {
    constructor() {
        this.getThread.bind(this);
    }

    async getThread() {
        //DYNAMIC
        // await fetch('http://hxline-gateway.herokuapp.com/thread-service/getall')
        //         .then((response) => response.json())
        //         .then((responseJson) => {
        //             let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //             // console.log(ds.cloneWithRows(responseJson));
        //             // console.log(responseJson);
        //             return responseJson;
        //         })
        //         .catch((error) => {
        //           console.error(error);
        //         });
        let response = await fetch('http://hxline-gateway.herokuapp.com/thread-service/getall');
        await response.json()
            .then(responseJson => {
                console.log(responseJson);
                return responseJson;
            });
        //STATIC
        // let responseJson = [
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
        // return responseJson;
    }

    saveComment(threadId, threadComment) {
        // let commentData = {
        // "id": this.props.threadId,
        //     "comments": [
        //         {
        //         "id": "",
        //         "comment": this.props.text
        //         }]
        //     };
        // fetch('http://hxline-gateway.herokuapp.com/thread-service/comment/save', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(commentData)
        // });
        // alert('Sent ' + threadId + ' : ' + text);
        alert('saveThread func called \n' + threadId + ' : ' + threadComment);
    }
}