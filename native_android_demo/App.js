/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,NativeModules,Button} from 'react-native';
import quickprinter from 'quick-print-module';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  sendToQuickPrinterChrome(){
    var text = "test printer<br><big>Big title<br><cut>";
    var textEncoded = encodeURI(text);
    window.location.href="intent://"+textEncoded+"#Intent;scheme=quickprinter;package=pe.diegoveloper.printerserverapp;end;";
    
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button
        onPress={()=>quickprinter.showMyToast(
          "<LEFT>Product;; <CENTER>Qty;; <RIGHT>Price<BR>"+
          "Pepsi 1.5L budget pack;;1;;Rs. 90<BR>"+
          "Pepsi 1.5L budget pack;;1;;Rs. 90<BR>"+
          "Pepsi 1.5L budget pack;;1;;Rs. 90<BR>"+
          "Pepsi 1.5L budget pack;;1;;Rs. 90<BR>"+
          "Pepsi 1.5L budget pack;;1;;Rs. 90<BR>"+
          "Pepsi 1.5L budget pack;;1;;Rs. 90<BR>"+
          "Pepsi 1.5L budget pack;;1;;Rs. 90<BR>"+
          "Pepsi 1.5L budget pack;;1;;Rs. 90<BR>"
        )}
        // onPress={() => NativeModules.ActivityStarterModule.getActivityName()}
        title='Start example activity'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
