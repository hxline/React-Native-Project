import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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
    flex: 1,
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
    flex: 0.2,
    alignItems: 'center',
    paddingTop: 15
  },
  sideMenu: {
    flex: 1,
    backgroundColor: '#2d5ca8',
  },
  sideMenuText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  },
  modalBackground: {
    flex: 1, 
    opacity: 0.8, 
    backgroundColor:'black'
  },
  modalField: {
    textAlignVertical: 'center',
    borderRadius: 13,
    backgroundColor: 'white',
    padding: 5,
    marginLeft: 3,
    marginRight: 3,
    fontWeight: '900',
    flex: 1
  },
  modalTextInput: {
    borderRadius: 13,
    backgroundColor: 'white',
    padding: 5,
    marginLeft: 3,
    marginRight: 3,
    fontWeight: '900',
    flex: 2
  },
  commentInput: {
    borderRadius: 6,
    backgroundColor: '#c3e8ec',
    flex: 1,
    flexDirection: 'row'
  },
});