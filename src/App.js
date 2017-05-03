import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDovbegdTbC9sPDSlaDdK0b9OvHZ7Lssu0',
      authDomain: 'manager-c0f05.firebaseapp.com',
      databaseURL: 'https://manager-c0f05.firebaseio.com',
      projectId: 'manager-c0f05',
      storageBucket: 'manager-c0f05.appspot.com',
      messagingSenderId: '554990243236'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
