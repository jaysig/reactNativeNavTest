/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var RootNav = require('./root.ios');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var navTest = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
                 style={styles.container}
                 initialRoute={{
             title: 'My Root',
             component: RootNav
         }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('navTest', () => navTest);
