/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var Login =require('./components/LoginPage');
var List =require('./components/ListPage');

var IFeedbackU = React.createClass({
  statics: {
    title: '<Navigator>',
    description: 'JS-implemented navigation',
  },
  render: function() {
    return (
      <NavigatorIOS
        barTintColor="#1ABC9C"
        shadowHidden={true}
        titleTextColor="white"
        tintColor="white"
        translucent={false}
        style={styles.container}
        initialRoute={{title:"",component:Login}}
      />
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('IFU', () => IFeedbackU);
