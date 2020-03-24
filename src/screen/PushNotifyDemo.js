import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class PushNotifyDemo extends Component {
  demo = () => {
    alert('Hello PushotifyDemo screen work fine : ');
  };
  render() {
    return (
      <View style={{marginTop: 10}}>
        <Text>PushNotifyDemo</Text>
        <View style={{marginTop: 20}}>
          <Button style={{paddingTop: 20}} title="demo" onPress={this.demo} />
        </View>
      </View>
    );
  }
}
export default PushNotifyDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
