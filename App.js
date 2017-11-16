import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import './config/ReactotronConfig';

import Header from './components/Header';
import Post from './components/Post';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE7777',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        autor: 'Willian Braga Villa Sanches',
        text: 'Os posts devem estar armazenados no estado do componente principal da sua aplicação contendo título, autor e descrição de cada item. Dessa forma, os mesmos devem ser renderizados em tela utilizando a função map para percorrê-los',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        autor: 'Willian Braga Villa Sanches',
        text: 'Os posts devem estar armazenados no estado do componente principal da sua aplicação contendo título, autor e descrição de cada item. Dessa forma, os mesmos devem ser renderizados em tela utilizando a função map para percorrê-los',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        autor: 'Willian Braga Villa Sanches',
        text: 'Os posts devem estar armazenados no estado do componente principal da sua aplicação contendo título, autor e descrição de cada item. Dessa forma, os mesmos devem ser renderizados em tela utilizando a função map para percorrê-los',
      },
    ],
  };
  render() {
    return (
      <View>
        <Header title="GoNative App" />
        <ScrollView style={styles.container} >
          { this.state.posts.map(post => (<Post key={post.id} post={post} />)) }
        </ScrollView>  
      </View>
    );
  }
}
