import React, { useState } from 'react';
import { Text, StyleSheet, ImageBackground, TouchableOpacity, View, SafeAreaView, Image, ScrollView, Modal } from 'react-native';

const About = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleImagePress = (source) => {
    setModalImage(source);
    setModalVisible(true);
  };
  return (
   
    <ImageBackground source={require('../assets/4c7ad272dc9b03ede8f025810983d07f.jpg')} style={{ width: '100%', height: '100%' }}>
      <ScrollView>
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
      <Text style={styles.a}>About Us</Text>
      <View style={styles.Scontainer}>
        <ScrollView horizontal={true}>
          <View style={styles.Soverlay}>
            <View style={styles.Swrapper}>
              <Text style={styles.d}>Baguion</Text>
              <TouchableOpacity onPress={() => handleImagePress(require('../assets/ui.png'))}>
                <Image source={require('../assets/ui.png')} style={styles.image} />
              </TouchableOpacity>
            </View>
            <View style={styles.Swrapper}>
              <Text style={styles.d}>Junsay</Text>
              <TouchableOpacity onPress={() => handleImagePress(require('../assets/typography.png'))}>
                <Image source={require('../assets/typography.png')} style={styles.image} />
              </TouchableOpacity>
            </View>

            <View style={styles.Swrapper}>
              <Text style={styles.d}>Torreon</Text>
              <TouchableOpacity onPress={() => handleImagePress(require('../assets/sixty.png'))}>
                <Image source={require('../assets/sixty.png')} style={styles.image} />
              </TouchableOpacity>
            </View>
            <View style={styles.Swrapper}>
              <Text style={styles.d}>Baguion</Text>
              <TouchableOpacity onPress={() => handleImagePress(require('../assets/ux.png'))}>
                <Image source={require('../assets/ux.png')} style={styles.image} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Swrapper}>
              <Text style={styles.d}>Orolaza</Text>
              <TouchableOpacity onPress={() => handleImagePress(require('../assets/userpersona.png'))}>
                <Image source={require('../assets/userpersona.png')} style={styles.image} />
              </TouchableOpacity>
            </View>
            <View style={styles.Swrapper}>
              <Text style={styles.d}>Alon</Text>
              <TouchableOpacity onPress={() => handleImagePress(require('../assets/color.png'))}>
                <Image source={require('../assets/color.png')} style={styles.image} />
              </TouchableOpacity>
            </View>
           
           
            <View style={styles.Swrapper}>
              <Text style={styles.d}>Antigo</Text>
              <TouchableOpacity onPress={() => handleImagePress(require('../assets/spacing.png'))}>
                <Image source={require('../assets/spacing.png')} style={styles.image} />
              </TouchableOpacity>
            </View>

        </ScrollView>
      </View>
      <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
          {modalImage && <Image source={modalImage} style={styles.fullImage} />}
        </View>
      </Modal>
      <View style={styles.theme}>
      <Text style={styles.b}>Theme Summary</Text>
      <Text style={styles.c}>The art subject of our mobile app is quite broad and includes pop art, architecture, abstract art, painting, and more.Our group decides that painting is the art form to pursue, and we choose Leonardo da Vinci as the painter and subject because of his dramatic and expressive works. One of his well-known pieces, the Mona Lisa, features a woman whose real name is Lisa del Giocondo, and it is evident that her eyebrows are missing. As a result, many people make conspiracy theories about it. And we pair it with a vintage theme: seeing Leonardo da Vinci's Mona Lisa and other works of art gives us vintage art that has a bygone look.</Text>
      </View>
      </ScrollView>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  d:{
    marginLeft: 40,
    fontSize: 20,
    fontFamily: 'Alkatra',
    
  },
  c:{
    fontSize: 20,
    justifyContent: 'center',
    letterSpacing: -0.43,
    lineHeight: 25,
    textAlign: 'justify',
    textAlignVertical: 'center',
    color: '#464242',
    fontFamily: 'Alkatra',
    marginTop: 50,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 50,
  },
  b: {
    left: 80,
    top: 60,
    fontSize: 40,
    fontFamily: 'Alkatra',
    marginBottom:50,
  },

  a:{
    left:140,
    top: 160,
    fontSize: 40,
    fontFamily: 'Alkatra',
  },
  image: {
    left: 10,
    height: 120,
    width: 120,
    marginRight: 10,
    borderRadius: 15,
  },
  Scontainer: {
    marginTop: 150,
    flexDirection: 'row',
  },
  Soverlay: {
    flexDirection: 'row',
    flex: 1,
  },
  Swrapper: {
  
    marginRight: 10,
  },
  menuContainer: {
    position: 'absolute',
    top: 50,
    left: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  menuIcon: {
    position: 'fixed',
    top: 35,
    width: 50,
    height: 50,
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
    marginBottom: 50,
  },
  choice: {
    left: -18,
    borderColor: '#464242',
    borderWidth: 3,
    borderRadius: 8,
    padding: 9,
    marginHorizontal: 10,
    paddingLeft: 28,
    
  },
  choiceText: {
    fontSize: 16,
    fontFamily: 'Alkatra',
    color: '#464242',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButton: {

    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
  },
  modalCloseText: {
    color: 'white',
    fontSize: 25,
  },
  fullImage: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default About;


