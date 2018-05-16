import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import Home from './components/home'
import { Provider } from 'react-redux'
import store from './store'
export default class App extends React.Component {
  
    render() {
    return (
       <Provider store={store}>
            <Home/>
       </Provider>
     
    );
  }
}

