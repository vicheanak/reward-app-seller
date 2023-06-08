import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import { FIREBASE_AUTH } from '../../../firebaseConfig'
import { Card, Button, Icon, Text, Image, Avatar } from '@rneui/themed';

const red = 'rgba(199, 43, 98, 1)';
const yellow = '#ffc107';
const white = '#fff';

const ProfilePage = () => {
  const router = useRouter();

  const onLogout = () => {
    try{
      FIREBASE_AUTH.signOut();
      router.replace("/screens/Login");
    } catch(error){
      Alert.alert("error signout");
    }
  }

  return (
    <View style={styles.container}>
     <View style={styles.subContainer}>
        <Icon
        name='user'
        type='font-awesome'
        onPress={() => console.log('hello')} />
        <Text h4>Seller</Text>
      </View>
      <View style={styles.subContainer}>
        <Icon
        name='inbox'
        type='font-awesome'
        onPress={() => console.log('hello')} />
        <Text h4>admin@rewardapp.com</Text>
      </View>
      <View style={styles.subContainer}>
        <Icon
          name='link'
          type='font-awesome'
          onPress={() => console.log('hello')} />
        <Text h4><Link href={"/profile/termsconditions"}>Terms & Conditions</Link></Text>
      </View>
        <View style={styles.subContainer}>
        <Icon
          name='link'
          type='font-awesome'
          onPress={() => console.log('hello')} />
        <Text h4><Link href={"/profile/privacy"}>Privacy Policy</Link></Text>
      </View>
      <Button
        title="LOGOUT"
        titleStyle={styles.submitButtonTitle}
        type="outline"
        raised
        buttonStyle={styles.submitButton}
        containerStyle={styles.buttonContainer}
        onPress={onLogout} />
    </View>
  )
}

export default ProfilePage


const styles = StyleSheet.create({
  cardContainer: { 
    marginTop: 15, 
    borderRadius: 20,
    borderWidth: 2,
    borderColor: red,
    // backgroundColor: yellow
  },
  subContainer: { 
    padding: 10, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    width: '70%', 
    justifyContent: 'space-between' 
  },
  cardTitle: {
    backgroundColor: 'white', 
    // borderWidth: 1, 
    borderColor: red, 
    padding:7, 
    fontSize: 20, 
    fontStyle: 'italic',
    color: red
  },
  mainContainer: {
    backgroundColor: yellow,
    height: '100%'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: yellow,
    height: '100%'
  },
  miniIconStamp: {
    color: red, 
    borderWidth: 2, 
    padding: 13.5, 
    borderRadius: 26,
    borderColor: red
  },
  submitButtonTitle : { 
    fontWeight: '500', 
    fontSize: 25, 
    color: red },
  submitButton : {
    // backgroundColor: yellow,
    // borderColor: 'transparent',
    borderColor: red,
    borderWidth: 2,
    borderRadius: 20,
    height: 50,
  },
  buttonContainer: {
    width: '92%',
    marginHorizontal: 10,
    marginVertical: 20,
    alignSelf: 'center',
    borderRadius: 20,
    position: 'absolute',
    bottom: 10
  },
  buttonFreeDrinkContainer: {
    width: '92%',
    marginHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10
  },
  iconStamp: {
    name: 'exit',
    type: 'font-awesome-5',
    size: 25,
    color: red,
  },
  iconFreeDrink: {
    name: 'stamp',
    type: 'font-awesome-5',
    size: 25,
    color: yellow,
  },
  buttonFreeDrink: {
    // backgroundColor: yellow,
    borderColor: red,
    borderWidth: 2,
    borderRadius: 20,
    height: 100,
  },
  buttonFreeDrinkTitle: {
    fontWeight: '500', 
    fontSize: 25, 
    color: red,
    textDecorationLine: 'underline'
  },
})