'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  AlertIOS,
  TouchableOpacity,
} = React;
var List = require("./ListPage");
let MK = require('react-native-material-kit');
const {
  MKButton,
  MKTextField,
  MKColor,
  mdl,
} = MK;
var Login = React.createClass({
  getInitialState: function() {
    return {
      email: "email",
      password : "password",
    };
  },
  _onPressButton : function(){
    if(this.state.email==="cj.yoon@samsung.com"&&this.state.password==="1qaz2wsx"){
      this.setState({
        email: undefined,
        password : undefined,
      });
      this.props.navigator.push({title:"I.Feedback.U",component:List});
    }else{
      this.setState({
        email: undefined,
        password : undefined,
      });
      AlertIOS.alert('email과 비밀번호를 확인하세요!');
    }
  },
  _setEmailPass : function(){
    this.setState({
      email: "cj.yoon@samsung.com",
      password : "1qaz2wsx",
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
            I.Feedback.U
          </Text>
        <View style={{height: 70}}>
          <Text style={styles.instructions}>
            You can change yourself right now
          </Text>
        </View>
        <View style={{width: 200, height: 100}}>
        <MKTextField
          tintColor="#FFFFFF"
          textInputStyle={{color: MKColor.Lime,backgroundColor:"#FFF",paddingLeft:10}}
          placeholder="email"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          style={styles.textfield}/>
          <MKTextField
            tintColor="#FFFFFF"
            textInputStyle={{color: MKColor.Lime,backgroundColor:"#FFF",paddingLeft:10}}
            placeholder="password"
            password={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            style={styles.textfield}/>
        </View>
        <MKButton
          backgroundColor={MKColor.Teal}
          shadowRadius={2}
          shadowOffset={{width:0, height:1}}
          shadowOpacity={.2}
          shadowColor="black"
          style={{width: 200, height: 40, backgroundColor: '#3498DB'}}
          onPress={this._onPressButton}>
          <Text pointerEvents="none"
                style={{textAlign:'center',color: 'white', fontWeight: 'bold',width: 200, height:40, backgroundColor: '#3498DB',paddingTop:10}}>
            LOGIN
          </Text>
        </MKButton>
        <TouchableOpacity onPress={this._setEmailPass}>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    backgroundColor: '#1ABC9C',

  },
  welcome: {
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
    color:'white',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color:'white',
    marginBottom: 5,
    marginTop:10,
  },
  textfield: {
    height: 30,  // have to do it on iOS
    width :200,
    paddingLeft :0,
    paddingTop:5,
  },
  loginInput : {
    height: 35,
    width : 200,
    marginTop:5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor:"white",
    color:'#333',
  },
});
module.exports = Login;
