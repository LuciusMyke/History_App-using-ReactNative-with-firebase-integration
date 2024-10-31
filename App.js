import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screen/home';
import About from './Screen/about';
import Fmat from './Screen/fmat';
import Create from './Screen/create';

const Stack = createNativeStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    Alkatra: require('./assets/Alkatra-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          transitionConfig: () => ({
            animation: 'fade',
            config: {
              duration: 500,
            },
          }),
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Fmat" component={Fmat} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="Create" component={Create} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        <ImageBackground source={require('./assets/IE-LEO-Luz-HH-1024-1.gif')} resizeMode="cover" style={styles.image}>
          <Text style={[styles.log, { top: 540, left: '15%' }]}>Login</Text>
          <View style={{ flexDirection: 'row', top: 620, left: '15%', position: 'absolute' }}>
            
            <TextInput
              style={[styles.usernameInput, { width: 290, paddingLeft: 80  }]}
              
              placeholder="type here"
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
            <Image source={require('./assets/image-removebg-preview (3).png')} style={{ width: 32, height: 45, resizeMode: 'contain', position: 'absolute', right: -215 }} />
          </View>
          <View style={{ flexDirection: 'row', top: 680, left: '15%', position: 'absolute' }}>
            <TextInput
              style={[styles.usernameInput, { idth: 290, paddingLeft: 80 }]}
              placeholder="type here"
              placeholderTextColor="grey"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              selectionColor="white"
              fontFamily="Alkatra"
            />
            <Text style={{color: 'white',top: 10,left: 10, fontSize: 17,fontFamily: 'Alkatra'}}>Password: </Text>

            <Image source={require('./assets/image-removebg-preview (1).png')} style={{ width: 32, height: 45, resizeMode: 'contain', position: 'absolute', right: -220 }} />
          </View>
          <TouchableOpacity
            style={[styles.loginButton, { top: 745, left: '35%' }]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ color: 'white', fontSize: 17, textAlign: 'center', fontFamily: 'Alkatra' }}>Login</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Text style={{ color: 'blue', fontSize: 17, textAlign: 'center', fontFamily: 'Alkatra', top: 350, textDecorationLine: 'underline' }}>Create Account</Text>
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

export default App;

