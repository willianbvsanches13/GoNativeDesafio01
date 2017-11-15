import React, { Component } from 'React';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  autor: {
    fontSize: 15,
    color: '#999999',
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    color: '#666666',
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
  },
  textContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
});

const Post = ({ post }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.autor}>{post.autor}</Text>
    <View style={styles.textContainer}>
      <Text style={styles.text} >{post.text}</Text>  
    </View>    
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    autor: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default Post;