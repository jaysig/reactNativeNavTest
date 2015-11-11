'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} = React;

var RootNav = React.createClass({
  goNav: function(){

  }
  render: function() {
    return (
      <View style="{styles.container}">
      <TouchableHighlight
      style={styles.button}
      onPress={() => this.goNav()}
      underlayColor='#bbbbbb'>
      <Text style={styles.btnText}> Quickly Navigate Sir </Text>
      </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5151f4',
    padding: 10
  },
  button{
    height: 36,
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#123456',
    justifyContent: 'center',
    color: '#FFFFFF'
  },
  btnText:{
    fontSize: 18,
    color: '#fff',
    marginTop: 6
  },
});

model.exports = RootNav;
