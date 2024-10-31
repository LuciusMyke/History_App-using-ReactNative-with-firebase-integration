import React, { useState } from 'react';
import { Text, StyleSheet, Image, ImageBackground, TouchableOpacity, View, SafeAreaView } from 'react-native';

const Home = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <ImageBackground source={require('../assets/4c7ad272dc9b03ede8f025810983d07f.jpg')} style={styles.container}>
      <Image source={require('../assets/c88ac79609185a2a1b3fd4fd209957ce.jpg')} style={styles.image} />
      <Text style={styles.text}>Leonardo da Vinci</Text>
      <Text style={styles.btext}>
        Leonardo da Vinci, a Renaissance painter, constantly tested artistic traditions and techniques, creating
        innovative compositions and investigating anatomy to represent the human body accurately. His experiments
        influenced his successors and became the standard of representation in subsequent centuries. His notebooks
        contain many unfinished works, with some lost or overpainted.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Fmat')}>
        <Text style={styles.buttonText}>Famous Artwork</Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.menuContainer}>
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Image source={require('../assets/menu-removebg-preview.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        {menuVisible && (
          <View style={styles.menu}>
            <View style={styles.choiceContainer}>
            <Image source={require('../assets/home-icon-vector-20131404-removebg-preview.png')} style={{ width: 32, height: 45, resizeMode: 'contain', position: 'absolute', left: -5 }} />

              <TouchableOpacity style={styles.choice} onPress={() => navigation.navigate('Home')}>

                <Text style={styles.choiceText}>Home</Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.choice} onPress={() => navigation.navigate('About')}>
              <Image source={require('../assets/image-removebg-preview.png')} style={{ width: 22, height: 40, resizeMode: 'contain', position: 'absolute', left: 3 }} />

                <Text style={styles.choiceText}>About Us</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choice} onPress={() => navigation.navigate('Login')}>
              <Image source={require('../assets/lgout .png')} style={{ width: 22, height: 40, resizeMode: 'contain', position: 'absolute', left: 3 }} />

                <Text style={styles.choiceText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 360,
    height: 300,
    position: 'absolute',
    left: 30,
    top: 250,
  },
  text: {
    fontSize: 40,
    color: '#464242',
    top: -160,
    fontFamily: 'Alkatra',
  },
  btext: {
    fontSize: 20,
    justifyContent: 'center',
    letterSpacing: -0.43,
    lineHeight: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
    top: 230,
    fontFamily: 'Alkatra',
    marginRight: 30,
    marginLeft: 30,
  },
  button: {
    width: 200,
    height: 70,
    borderWidth: 5,
    borderColor: '#464242',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    top: 280,
  },
  buttonText: {
    fontSize: 25,
    color: '#464242',
    fontStyle: 'Bold',
    fontFamily: 'Alkatra',
  },
  menuContainer: {
    position: 'absolute',
    top: 50,
    left: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  menu: {
    borderRadius: 8,
    padding: 10,
    position: 'absolute',
    left: 70,
  },
  choiceContainer: {
    top: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  choice: {
    left: -18,
    borderColor: '#464242',
    borderWidth: 3,
    borderRadius: 20,
    padding: 9,
    marginHorizontal: 10,
    paddingLeft: 28,
    
    
  },
  choiceText: {
    fontSize: 16,
    fontFamily: 'Alkatra',
    color: '#464242',
  },
  menuIcon: {
    top: 35,
    width: 50,
    height: 50,
  },
});

export default Home;

