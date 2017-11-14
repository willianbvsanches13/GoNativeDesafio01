import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

import './config/ReactotronConfig';

import Header from './components/Header';
import Post from './components/Post';

export default class App extends Component {

  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        autor: 'Willian Braga Villa Sanches',
        text: 'Os posts devem estar armazenados no estado do componente principal da sua'+
                'aplicação contendo título, autor e descrição de cada item. Dessa forma, os mesmos'+
                'devem ser renderizados em tela utilizando a função map para percorrê-los',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        autor: 'Willian Braga Villa Sanches',
        text: 'Os posts devem estar armazenados no estado do componente principal da sua'+
                'aplicação contendo título, autor e descrição de cada item. Dessa forma, os mesmos'+
                'devem ser renderizados em tela utilizando a função map para percorrê-los',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        autor: 'Willian Braga Villa Sanches',
        text: 'Os posts devem estar armazenados no estado do componente principal da sua'+
                'aplicação contendo título, autor e descrição de cada item. Dessa forma, os mesmos'+
                'devem ser renderizados em tela utilizando a função map para percorrê-los',
      },
    ]
  };

  render() {
    return (
      <ScrollView style={styles.container} >
        <Header title="GoNative App"></Header>
        { this.state.posts.map(post => <Post key={ post.id } post={ post } />) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE7777',
  },

  post: {
    marginTop: 20
  }
});
