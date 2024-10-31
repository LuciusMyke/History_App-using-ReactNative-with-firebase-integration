import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Create = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener('keyboardWillShow', (event) => {
      const { height } = event.endCoordinates;
      setShift(height);
    });
    const keyboardWillHide = Keyboard.addListener('keyboardWillHide', () => {
      setShift(0);
    });
    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, []);

  const [shift, setShift] = useState(0);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={shift}>
      <View style={styles.container}>
        <ImageBackground source={require('../assets/464059157_391550480718420_518334333846070734_n.gif')} resizeMode="cover" style={styles.image}>
          <Text style={[styles.log, { top: 540, left: '15%' }]}>Create </Text>
          <View style={{ flexDirection: 'row', top: 620, left: '15%', position: 'absolute' }}>
            <TextInput
              style={[styles.usernameInput, { width: 290, paddingLeft: 80 }]}
              placeholder="Username"
              placeholderTextColor="grey"
              value={username}
              onChangeText={(text) => setUsername(text)}
              selectionColor="white"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              fontFamily="Alkatra"
            />
             <Text style={{color: 'white',top: 10,left: 10, fontSize: 17,fontFamily: 'Alkatra'}}>Username: </Text>
            <Image source={require('../assets/image-removebg-preview (3).png')} style={{ width: 32, height: 45, resizeMode: 'contain', position: 'absolute', right: -212 }} />
          </View>
          <View style={{ flexDirection: 'row', top: 680, left: '15%', position: 'absolute' }}>
            <TextInput
              style={[styles.usernameInput, { width: 290, paddingLeft: 80 }]}
              placeholder="Email"
              placeholderTextColor="grey"
              value={email}
              onChangeText={(text) => setEmail(text)}
              selectionColor="white"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              fontFamily="Alkatra"
            />
            <Text style={{color: 'white',top: 10,left: 10, fontSize: 17,fontFamily: 'Alkatra'}}>Email: </Text>
            <Image source={require('../assets/email.png')} style={{ width: 70, height: 45, resizeMode: 'contain', position: 'absolute', right: -258 }} />
          </View>
          <View style={{ flexDirection: 'row', top: 740, left: '15%', position: 'absolute' }}>
            <TextInput
              style={[styles.usernameInput, { width: 290, paddingLeft: 80 }]}
              placeholder="Password"
              placeholderTextColor="grey"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              selectionColor="white"
              fontFamily="Alkatra"
              
            />
             <Text style={{color: 'white',top: 10,left: 10, fontSize: 17,fontFamily: 'Alkatra'}}>Password: </Text>
            <Image source={require('../assets/image-removebg-preview (1).png')} style={{ width: 32, height: 45, resizeMode: 'contain', position: 'absolute', right: -215 }} />
          </View>
          
          <TouchableOpacity
            style={[styles.loginButton, { top: 805, left: '35%' }]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ color: 'white', fontSize: 17, textAlign: 'center', fontFamily: 'Alkatra' }}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{ position: 'absolute', bottom: 20, alignSelf: 'center' }}
          >
            <Text style={{ color: 'blue', textDecorationLine: 'underline', fontFamily: 'Alkatra',top: -40 ,fontSize:17}}>
              Already have an account?
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  usernameInput: {
    position: 'absolute',
    width: 295,
    height: 44,
    borderRadius: 40,
    borderColor: '#464242',
    borderWidth: 5,
    color: 'white',
    fontSize: 17,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  loginButton: {
    position: 'absolute',
    width: 127,
    height: 50,
    borderRadius: 40,
    backgroundColor: '#464242',
    justifyContent: 'center',
    alignItems: 'center',
  },
  log: {
    position: 'absolute',
    fontFamily: 'Alkatra',
    fontSize: 50,
    color: '#464242',
  },
});

export default Create;

