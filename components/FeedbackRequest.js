var React = require('react-native');
var {View,Text,TextInput,StyleSheet} = React;
const MK = require('react-native-material-kit');
const {
  MKTextField,
  MKColor,
  mdl,
} = MK;
const styles = Object.assign({}, StyleSheet.create({
  textfield: {
    height: 30,  // have to do it on iOS
    width :200,
    paddingLeft :10,
  },
  multiTextfield: {
    height: 100,  // have to do it on iOS
    width :300,
    paddingLeft :10,
    borderWidth:1,
    borderRadius:0.2,
  },
  row: {
    flexDirection: 'row',
    justifyContent : 'flex-start',
    padding: 5,
    backgroundColor: '#F6F6F6',
  },
}));

const Textfield = MKTextField.textfield()
  .withPlaceholder('제목')
  .withStyle(styles.textfield)
  .build();


const ColoredTextfield = mdl.Textfield.textfield()
  .withPlaceholder('피드백 내용')
  .withStyle(styles.multiTextfield)
  .withTintColor(MKColor.Lime)
  .withClearTextOnFocus(true)
  .withTextInputStyle({color: MKColor.Orange})
  .build();



var FeedbackRequest = React.createClass({
  getInitialState: function() {
    return {
      title: "제목",
      contents : "내용",
    };
  },
  submitRequest : function(){
    console.log("FeedbackRequest");
  },
  render: function(){
    return (
      <View>
        <View style={styles.row}>
          <Text style={{padding:7}}>제목</Text>
          <Textfield
            onChangeText={(title) => this.setState({title})}
            placeholder="제목"
          />
        </View>
        <View style={styles.row}>
          <TextInput style={styles.multiTextfield}
            multiline={true}
            onChangeText={(contents) => this.setState({contents})}
            placeholder="내용"
          />
        </View>
      </View>

    );
  }
});

module.exports = FeedbackRequest;
