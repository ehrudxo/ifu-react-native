'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  TextInput,
  ListView,
  Text,
  } = React;
var ActionButton = require('react-native-action-button'),
    Icon = require('react-native-vector-icons/Ionicons');

var UIExplorerPage = require('./UIExplorerPage');

var List = React.createClass({
  statics: {
    title: '<ListView> - Simple',
    description: 'Performant, scrollable list of data.'
  },
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },
  _onPressButton : function(){
    this.props.navigator.push({id:"List"});
  },
  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    let ds = [{date:"2015/11/27 (금)",title:"오늘의 Pair work는 어땠나요?",feedbackNum:2},
                {date:"2015/11/20 (금)",title:"오늘의 React 강의는 어땠나요?",feedbackNum:10},
                {date:"2015/11/19 (목)",title:"오늘의 스크린 야구 도란도란 재미 있었나요??",feedbackNum:15},];
    // fetch(REQUEST_URL)
    //   .then((response) => response.json())
    //   .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(ds),
          loaded: true,
        });
      // })
      // .done();
  },
  renderFeedbackRequest : function(feedbackRequest){
    return(
      <View>
        <Text>{feedbackRequest.date}</Text>
        <Text>{feedbackRequest.title}</Text>
        <Text>{feedbackRequest.feedbackNum}</Text>
      </View>
    );
  },
  renderFooter : function(){
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
       <ActionButton buttonColor="rgba(231,76,60,1)">
         <ActionButton.Item buttonColor='#9b59b6' title="New Feedback Request" onPress={() => console.log("notes tapped!")}>
           <Icon name="android-create" style={styles.actionButtonIcon} />
         </ActionButton.Item>
       </ActionButton>
     </View>
    );
  },
  render: function() {
    return (
      <UIExplorerPage
        title={this.props.navigator ? null : 'I.Feedback.U'}
        noSpacer={true}
        noScroll={false}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderFeedbackRequest}
          renderFooter={this.renderFooter}
          style={styles.postsListView} />
      </UIExplorerPage>
    );
  }

});

var styles = StyleSheet.create({
  row: {
     flexDirection: 'row',
     justifyContent: 'center',
     padding: 10,
     backgroundColor: '#F6F6F6',
   },
  postsListView:{

  },
  actionButtonIcon: {
   fontSize: 20,
   height: 22,
   color: 'white',
 },
});

module.exports = List;
// <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
//   <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
// </ActionButton.Item>
// <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
//   <Icon name="android-done-all" style={styles.actionButtonIcon} />
// </ActionButton.Item>
