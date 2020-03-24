import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import firebase from 'react-native-firebase';

class FireStoreDemo extends Component {
  addUser = async () => {
    // let createref = firebase.firestore().collection('users');

    let at = firebase.auth();

    let at2 = await at
      .signInWithEmailAndPassword('abc@new.in', 'abc123')
      .then(res => {
        console.log('Res: ', res);
      })
      .catch(err => console.log('Error auth : ', err));

    console.log('at : ', at2);

    let user = await firebase
      .app()
      .firestore()
      .collection('users')
      .doc(at.currentUser.uid)
      .set({uid: 120, name: 'abcN', email: 'abc@new.in', password: 'abc123'})
      .then(res => console.log('Res: ', res))
      .catch(err => console.log('Error store set: ', err));

    console.log('user crete : ', user);

    // console.log('ref for user :', createref);
    // firebase.firestore().batch().set(createref)
  };

  addbook = () => {
    firebase
      .firestore()
      .collection('books')
      .doc('yhn')
      .set({author: '', name: 'abc'})
      .then(res => console.log('Res: ', res))
      .catch(err => console.log('Error : ', err));

    // creating collection always res == null getting when result success
    // let addbookref = firebase
    // .firestore()
    // .collection('users')
    // .doc('abc')
    // .set({uid: 1, name: 'abc'})
    // .then(res => console.log('Res: ', res))
    // .catch(err => console.log('Error : ', err));
  };

  searchUser = () => {
    firebase
      .firestore()
      .collection('users')
      .where('name', '==', 'abc')
      .get()
      .then(QuerySnapshot => {
        console.log('Querysnapshot  :', QuerySnapshot);
        QuerySnapshot.forEach(doc => {
          console.log('Doc getting form query : ', doc._data);
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  };

  demo = () => {
    // creating collection always res == null getting when result success
    // let addbookref = firebase
    //   .firestore()
    //   .collection('collection1')
    //   .doc('doc1')
    //   .set({id: 1, data: 'abc'})
    //   .then(res => console.log('Res: ', res))
    //   .catch(err => console.log('Error : ', err));

    alert('Hello this is work fine : ');

    //

    // firebase.firestore().settings(
  };

  GetBook = async () => {
    await firebase
      .firestore()
      .collection('books')
      .doc('Twiligth')
      .get()
      .then(res => {
        if (res.exists) {
          // let book = res.docs;
          console.log('Wlecome screen data Firestore : ', res._data);
          // return book;
        } else {
          console.log('No such document!');
        }
      })
      .catch(function(error) {
        console.log('Error getting document:', error);
      });
  };

  render() {
    return (
      <View style={styles.container2}>
        <Text>FireStoreDemo</Text>
        <View style={{marginTop: 20}}>
          <Button
            style={{paddingTop: 20}}
            title="Get Book"
            onPress={this.GetBook}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button title="Add user" onPress={this.addUser} />
        </View>
        <View style={{marginTop: 20}}>
          <Button
            style={{padding: 30}}
            title="Add book"
            onPress={this.addbook}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button
            style={{padding: 30}}
            title="Search User"
            onPress={this.searchUser}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button style={{padding: 30}} title="Demo" onPress={this.demo} />
        </View>
      </View>
    );
  }
}
export default FireStoreDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
