import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, Modal, TextInput, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tarotMeaning, setTarotMeaning] = useState({ cardName: '', meaning: '' });
  const [selectedTarot, setSelectedTarot] = useState('');
  const [statusImage, setStatusImage] = useState('');
  const navigation = useNavigation();

  const handleTarotButtonPress = (place) => {
    fetchTarotMeaning(place);
    setSelectedTarot(place);
    setStatusImage(getImageForTarot(place));
    handlePress();
  };

  useEffect(() => {
    fetchTarotMeaning(); // เรียกใช้ฟังก์ชันเมื่อคอมโพเนนต์โหลดหรือ selectedTarot เปลี่ยนแปลง
  }, []);

  const fetchTarotMeaning = (place) => {
    const apiUrl = `http://10.0.2.2:5000/api/tarotmean/${place}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.cardName && data.meaning) {
          setTarotMeaning({ cardName: data.cardName, meaning: data.meaning });
        }
      })
      .catch(error => console.error('Error fetching tarot meaning:', error));
  };

  const handlePress = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const getImageForTarot = (place) => {
    switch (place) {
      case 'The Fool':
        return require('../img/Tarot/0-the-fool.png');
      case 'The Magician':
        return require('../img/Tarot/1-magician.png');
      case 'The High Priestess':
        return require('../img/Tarot/2-the-high-priestess.png');
      case 'The Empress':
        return require('../img/Tarot/3-the-empress.png');
      case 'The Emperor':
        return require('../img/Tarot/4-the-emperor.png');
      case 'The Hierophant':
        return require('../img/Tarot/5-the-hierophant.png');
      case 'The Lovers':
        return require('../img/Tarot/6-the-lovers.png');
      case 'The Chariot':
        return require('../img/Tarot/7-the-chariot.png');
      case 'Strength':
        return require('../img/Tarot/8-strength.png');
      case 'The Hermit':
        return require('../img/Tarot/9-the-hermit.png');
      case 'Wheel Of Fortune':
        return require('../img/Tarot/10-wheel-of-fortune.png');
      case 'Justic':
        return require('../img/Tarot/11-justice.png');
      case 'The Hanged Man':
        return require('../img/Tarot/12-the-hanged-man.png');
      case 'Death':
        return require('../img/Tarot/13-death.png');
      case 'Temperance':
        return require('../img/Tarot/14-temperance.png');
      case 'The Devil':
        return require('../img/Tarot/15-the-devil.png');
      case 'The Tower':
        return require('../img/Tarot/16-the-tower.png');
      case 'The Star':
        return require('../img/Tarot/17-the-star.png');
      case 'The Moon':
        return require('../img/Tarot/18-the-moon.png');
      case 'The Sun':
        return require('../img/Tarot/19-the-sun.png');
      case 'Judgement':
        return require('../img/Tarot/20-judgement.png');
      case 'The World':
        return require('../img/Tarot/21-the-world.png');
    }
  }

  return (

    <View style={styles.container_1}>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalView}>
              <Text style={styles.HeadText}>{tarotMeaning.cardName}</Text>
              {/* <Text style={styles.detailday}>ความหมายไพ่</Text> */}
              <ScrollView>
                <Image source={getImageForTarot(selectedTarot)} style={styles.TarotImage} />
                <Text style={styles.DetailTarot}>{tarotMeaning.meaning}</Text>
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <ImageBackground source={require('../img/bg.png')} style={styles.backgroundImage}>
        <View style={styles.styleicon}>
          <Icon
            name='arrow-back-outline'
            type='ionicon'
            color='#3E356C'
            size={40}
            onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.txthead}>

          <View>
            <Text style={styles.txtbox1}>ความหมายไพ่</Text>
            <Text style={styles.txtbox2}>เลือกไพ่ที่ต้องการทราบ</Text>
          </View>
          <View>
            <Image source={require('../img/Tarot/ความหมายไพ่-01.png')}
              style={{ width: 90, height: 90 }} />
          </View>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 24, }}>

          <View style={styles.container_2}>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Fool')}>
                <Image source={require('../img/Tarot/0-the-fool.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE FOOL</Text>
            </View>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Magician')}>
                <Image source={require('../img/Tarot/1-magician.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE MAGICIAN</Text>
            </View>

          </View>

          <View style={styles.container_3}>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The High Priestess')}>
                <Image source={require('../img/Tarot/2-the-high-priestess.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE HIGH PRIESTESS</Text>
            </View>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Empress')}>
                <Image source={require('../img/Tarot/3-the-empress.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE EMPRESS</Text>
            </View>

          </View>

          <View style={styles.container_3}>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Emperor')}>
                <Image source={require('../img/Tarot/4-the-emperor.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE EMPEROR</Text>

            </View>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Hierophant')}>
                <Image source={require('../img/Tarot/5-the-hierophant.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE HIEROPHANT</Text>
            </View>

          </View>

          <View style={styles.container_3}>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Lovers')}>
                <Image source={require('../img/Tarot/6-the-lovers.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE LOVERS</Text>

            </View>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Chariot')}>
                <Image source={require('../img/Tarot/7-the-chariot.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE CHARIOT</Text>
            </View>

          </View>

          <View style={styles.container_3}>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('Strength')}>
                <Image source={require('../img/Tarot/8-strength.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>STRENGTH</Text>

            </View>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Hermit')}>
                <Image source={require('../img/Tarot/9-the-hermit.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE HERMIT</Text>
            </View>

          </View>

          <View style={styles.container_3}>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('Wheel Of Fortune')}>
                <Image source={require('../img/Tarot/10-wheel-of-fortune.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>WHEEL of FORTUNE</Text>

            </View>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('Justic')}>
                <Image source={require('../img/Tarot/11-justice.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>JUSTICE</Text>
            </View>

          </View>

          <View style={styles.container_3}>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Hanged Man')}>
                <Image source={require('../img/Tarot/12-the-hanged-man.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE HANGED MAN</Text>

            </View>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('Death')}>
                <Image source={require('../img/Tarot/13-death.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>DEATH</Text>
            </View>

          </View>

          <View style={styles.container_3}>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('Temperance')}>
                <Image source={require('../img/Tarot/14-temperance.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>TEMPERANCE</Text>

            </View>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Devil')}>
                <Image source={require('../img/Tarot/15-the-devil.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE DEVIL</Text>
            </View>

          </View>

          <View style={styles.container_3}>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Tower')}>
                <Image source={require('../img/Tarot/16-the-tower.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE TOWER</Text>

            </View>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Star')}>
                <Image source={require('../img/Tarot/17-the-star.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE STAR</Text>
            </View>

          </View>

          <View style={styles.container_3}>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Moon')}>
                <Image source={require('../img/Tarot/18-the-moon.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE MOON</Text>

            </View>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The Sun')}>
                <Image source={require('../img/Tarot/19-the-sun.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE SUN</Text>
            </View>

          </View>

          <View style={styles.container_3}>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('Judgement')}>
                <Image source={require('../img/Tarot/20-judgement.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>JUDGEMENT</Text>

            </View>

            <View style={styles.box}>
              <TouchableOpacity onPress={() => handleTarotButtonPress('The World')}>
                <Image source={require('../img/Tarot/21-the-world.png')} style={{ width: 150, height: 250 }} />
              </TouchableOpacity>
              <Text style={styles.TextT}>THE WORLD</Text>
            </View>

          </View>

        </ScrollView>

      </ImageBackground>

    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container_1:
  {
    flex: 1,
  },
  styleicon: {
    alignItems: 'flex-start',
    paddingLeft: 28,
    paddingTop: 48,
  },
  container_2:
  {
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  container_3:
  {
    paddingTop: 24,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  txthead:
  {
    // paddingTop: 64,
    paddingBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  row:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  txtbox1:
  {
    fontSize: 32,
    color: '#3E356C',
    fontFamily: 'Mitr-Medium'
  },

  txtbox2:
  {
    fontSize: 16,
    color: '#3E356C',
    fontFamily: 'Mitr-Light',
    paddingTop: 4,
  },

  box:
  {
    justifyContent: 'center',
    alignItems: 'center',

  },

  backgroundImage:
  {
    flex: 1,
  },
  TextT:
  {
    fontSize: 16,
    color: '#3E356C',
    fontFamily: 'Mitr-Regular',
    textAlign: 'center',
    marginTop: 4,
  },
  ModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  ModalView: {
    flex: 0.85,
    backgroundColor: '#3E356C',
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    //paddingBottom: 24
  },
  // detailday: {
  //   fontSize: 24,
  //   color: '#ffff',
  //   fontFamily: 'Mitr-Regular',
  //   textAlign: 'center',
  //   marginTop: 32,
  // },
  HeadText: {
    fontSize: 32,
    color: '#ffff',
    fontFamily: 'Mitr-Regular',
    textAlign: 'center',
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 32,
    paddingBottom: 14,
  },
  DetailTarot: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 15,
    gap: 8,
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 18,
    fontFamily: 'Mitr-Light',
    // paddingBottom: 24
  },
  TarotImage: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
})