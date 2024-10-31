import React, { useState } from 'react';
import { Text, StyleSheet, ImageBackground, TouchableOpacity, View, SafeAreaView, Image, ScrollView } from 'react-native';

const Fmat = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <ScrollView contentInsetAdjustmentBehavior='automatic'>
      <ImageBackground source={require('../assets/4c7ad272dc9b03ede8f025810983d07f.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.fbody}>
          <View style={styles.fwrapper}>
            <View style={styles.overlay} />
            <Text style={styles.text}>Mona Lisa</Text>
            <Image source={require('../assets/mona.jpg')} style={styles.image} />
            <Text style={styles.ftext}>Mona Lisa is a famous artwork by Leonardo da Vinci, is a complex portrait of a young woman dressed modestly in a thin veil, somber colors, and no jewelry. The painting's simplicity reflects Leonardo's talent for realism, using sfumato, a technique using light and shadow to model form. The sitter's perplexing expression adds to her realism, as she embodies contradictory characteristics.</Text>
          </View>

          <View style={styles.fwrapper}>
            <View style={styles.overlay} />
            <Text style={styles.text}>Head of Woman</Text>
            <Image source={require('../assets/head.webp')} style={styles.image} />
            <Text style={styles.ftext}>The Head of a Woman is a brush drawing by Leonardo da Vinci, depicting a young woman with a tilted head and downcast eyes, possibly a model for the Virgin Mary in his painting The Virgin of the Rocks. The drawing's nickname, "La scapigliata," translates to "disheveled," and Leonardo's skillful modeling of the woman's delicate features, showcasing his fluid working methods.</Text>
          </View>

          <View style={styles.fwrapper}>
            <View style={styles.overlay} />
            <Text style={styles.text}>Lady with an Ermine</Text>
            <Image source={require('../assets/lady.jpg')} style={styles.image} />
            <Text style={styles.ftext}>Art historians attribute the youthful woman in Lady with an Ermine to Cecilia Gallerani, the mistress of Leonardo's patron, Ludovico Sforza, duke of Milan. The painting, heavily overpainted, showcases Leonardo's anatomy knowledge and character representation. The ermine symbolizes the duke's emblem and the woman's youthful nature.</Text>
          </View>

          <View style={styles.fwrapper}>
            <View style={styles.overlay} />
            <Text style={styles.text}>Salvator Mundi </Text>
            <Image source={require('../assets/download.jpg')} style={styles.image} />
            <Text style={styles.ftext}>Salvator Mundi's 2017 
            head-on portrait sold for $450.3 million at auction, despite criticisms of its lack of skill and stiff posture. Christie's dismissed these, pointing to its similarity to Leonardo's technique and materials.</Text>
          </View>

          <View style={styles.fwrapper}>
            <View style={styles.overlay} />
            <Text style={styles.text}>The portrait of{'\n'}Ginevra de' Benci</Text>
            <Image source={require('../assets/Ginevra-de-Benci-oil-panel-Leonardo-da.webp')} style={styles.image} />
            <Text style={styles.ftext}>Leonardo's portrait 
of Ginevra de' Benci, his only publicly displayed
 work in the Western Hemisphere, showcases his unconventional methods, featuring a three-quarter pose inspired by Northern artists. The painting features a wreath, juniper sprig, and scroll.</Text>
          </View>

          <View style={styles.fwrapper}>
            <View style={styles.overlay} />
            <Text style={styles.text}>The Virgin and Child {'\n'}    with Saint Anne</Text>
            <Image source={require('../assets/The-Virgin-and-Child-with-Saint-Anne.jpg')} style={styles.image} />
            <Text style={styles.ftext}>Art historians attribute the youthful woman in Lady with an Ermine to Cecilia Gallerani, the mistress of Leonardo's patron, Ludovico Sforza, duke of Milan. The painting, heavily overpainted, showcases Leonardo's anatomy knowledge and character representation. The ermine symbolizes the duke's emblem and the woman's youthful nature.</Text>
          </View>

          <View style={styles.fwrapper}>
            <View style={styles.overlay} />
            <Text style={styles.ftext}>Reference{'\n'}{'\n'}"Leonardo da Vinci: Life and Artwork." Encyclopædia Britannica, Encyclopædia Britannica, Inc - https://www.britannica.com/biography/Leonardo-da-Vinci/Last-years-1513-19</Text>
            
          </View>
        </View>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ftext: {  
    fontSize: 20,
    justifyContent: 'center',
    letterSpacing: -0.43,
    lineHeight: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontFamily: 'Alkatra',
    marginTop: 50,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 50,
  },
  fbody: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 103,
    padding: 20,
  },
  fwrapper: {
    position: 'relative',
    alignItems: 'center',
    marginVertical: 55,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.5,
    borderRadius: 50,
  },
  text: {
    marginTop: 20,
    fontSize: 40,
    color: 'white',
    marginBottom: 10,
    fontFamily: 'Alkatra',
  },
  image: {
    width: 293,
    height: 277,
    borderRadius: 10,
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
    top:35,
    width: 50,
    height: 50,
  },
  menu: {
    position: 'fixed;',
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
});

export default Fmat;

