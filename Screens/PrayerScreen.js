import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Image, Modal, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [prayerText, setPrayerText] = useState('');
  const [selectedPrayer, setSelectedPrayer] = useState('');
  const [statusImage, setStatusImage] = useState('');
  const navigation = useNavigation();

  const handlePrayerButtonPress = (place) => {
    fetchPrayerText(place);
    setSelectedPrayer(place);
    setStatusImage(getImageForPrayer(place));
    showModal();
  };

  useEffect(() => {
    fetchPrayerText(); // เรียกใช้ฟังก์ชันเมื่อคอมโพเนนต์โหลด
  }, []);

  const fetchPrayerText = (place) => {
    const apiUrl = `http://10.0.2.2:5000/api/prayer/${place}`;

    fetch(apiUrl)
      .then(response => response.json()) // json to js
      .then(data => {
        // เช็คว่ามีข้อมูลที่ต้องการหรือไม่ และตั้งค่า prayerText ตามผลลัพธ์
        if (data && data.prayer && data.prayer.prayer) {
          setPrayerText(data.prayer.prayer);
        }
      })
      .catch(error => console.error('Error fetching prayer text:', error));
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const getImageForPrayer = (place) => {
    switch (place) {
      case 'หลวงพ่อโต':
        return require('../img/prayer/หลวงพ่อโต.jpg');
      case 'พระแม่ลักษมี':
        return require('../img/prayer/พระแม่ลักษมี.jpg');
      case 'องค์พ่อทันใจ':
        return require('../img/prayer/เทพทันใจ.jpg');
      case 'หลวงพ่อโสธร':
        return require('../img/prayer/หลวงพ่อโสธร.jpg');
      case 'พระพิฆเนศ':
        return require('../img/prayer/พระพิฆเนศ.jpg');
      case 'เจ้าแม่กวนอิม':
        return require('../img/prayer/เจ้าแม่กวนอิม.jpg');
    }
  }

  // fetch('http://10.0.2.2:5000/api/prayer/หลวงพ่อโสธร')
  // .then(response => {
  //   if (response.ok) {
  //     console.log('Response status is 200');
  //     return response.json();
  //   } else {
  //     console.error('Response status is not 200');
  //     throw new Error('Network response was not ok');
  //   }
  // })
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => {
  //   console.error('Error fetching data:', error);
  // });

  // console.log(typeof prayerText);

  // useEffect(() => {
  //   console.log('prayerText has been changed:', prayerText); // แสดงค่าของ prayerText เมื่อมีการเปลี่ยนแปลง
  // }, [prayerText]);

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/bf/bd/af/bfbdaf44b03f809f0af8a2cfb77c1f1f.jpg' }}
      style={styles.imageBackground}>
      <View style={styles.styleicon}>
        <Icon
          name='arrow-back-outline'
          type='ionicon'
          color='#3E356C'
          size={40}
          onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.texttext}>
        <View>
          <Text style={styles.titel1}>บทสวดมนต์</Text>
          <Text style={styles.titel2}>เลือกตามความต้องการ</Text>
        </View>
        <View>
          <Image
            source={{ uri: 'https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.15752-9/434862791_386536227537474_3440080491665004827_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HTOJioP4ATsAX-O6zRi&_nc_ht=scontent.fbkk22-8.fna&oh=03_AdTX5oe2t0rL2xWFlQPGs5tuxpIvqc7A5DnlmZvHidnazA&oe=6630CDE2' }}
            style={{ width: 90, height: 90 }} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity style={styles.buttonGPlusStyle} onPress={() => handlePrayerButtonPress('หลวงพ่อโต')}>
            <Image
              source={require('../img/prayer/หลวงพ่อโต.jpg')}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.textwad}>หลวงพ่อโต</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonGPlusStyle} onPress={() => handlePrayerButtonPress('พระแม่ลักษมี')}>
          <Image
            source={require('../img/prayer/พระแม่ลักษมี.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.textwad}>พระแม่ลักษมี</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGPlusStyle} onPress={() => handlePrayerButtonPress('องค์พ่อทันใจ')}>
          <Image
            source={require('../img/prayer/เทพทันใจ.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.textwad}>องค์พ่อทันใจ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGPlusStyle} onPress={() => handlePrayerButtonPress('หลวงพ่อโสธร')}>
          <Image
            source={require('../img/prayer/หลวงพ่อโสธร.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.textwad}>หลวงพ่อโสธร</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGPlusStyle} onPress={() => handlePrayerButtonPress('พระพิฆเนศ')}>
          <Image
            source={require('../img/prayer/พระพิฆเนศ.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.textwad}>พระพิฆเนศ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGPlusStyle} onPress={() => handlePrayerButtonPress('เจ้าแม่กวนอิม')}>
          <Image
            source={require('../img/prayer/เจ้าแม่กวนอิม.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.textwad}>เจ้าแม่กวนอิม</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
      >
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 48}}>
                <View>
                  <Text style={styles.text1}>บทสวดมนต์</Text>
                  <Text style={styles.text3}>{selectedPrayer}</Text>
                </View>
                <Image source={getImageForPrayer(selectedPrayer)} style={styles.prayerImage} />
              </View>
              <ScrollView>
                <Text style={styles.text2}>{prayerText}</Text>
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  styleicon: {
    alignItems: 'flex-start',
    paddingLeft: 28,
    paddingTop: 48,
  },
  texttext: {
    // paddingTop: 64,
    paddingBottom: 8,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titel1: {
    fontSize: 32,
    color: '#3E356C',
    fontFamily: 'Mitr-Medium',
  },
  titel2: {
    fontSize: 16,
    color: '#3E356C',
    fontFamily: 'Mitr-Light',
    paddingTop: 4,
  },
  textwad: {
    fontSize: 16,
    color: '#3E356C',
    fontFamily: 'Mitr-Regular',
    textAlign: 'center',
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    verticalAlign: 'center',
  },
  buttonGPlusStyle: {
    width: 170,
    height: 170,
    activeOpacity: 0.5,
    marginBottom: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImageIconStyle: {
    resizeMode: 'cover',
    width: '70%',
    height: '70%',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#3e356c',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    flex: 0.7,
    backgroundColor: '#3E356C',
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70
  },
  scrollView: {
    flex: 1,
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 32,
    color: '#ffff',
    fontFamily: 'Mitr-Medium',
    textAlign: 'left',
    paddingLeft: 48,
    paddingRight: 48,
    marginTop: 48,
  },
  text3: {
    fontSize: 20,
    color: '#ffff',
    fontFamily: 'Mitr-Regular',
    textAlign: 'left',
    paddingLeft: 48,
    paddingRight: 48,
    paddingBottom: 24,
    // textAlign: 'center'
  },
  text2: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 15,
    // gap: 8,
    paddingLeft: 48,
    paddingRight: 48,
    paddingBottom: 24,
    fontFamily: 'Mitr-Light',
    // textAlign: 'center'
  },
  prayerImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginTop: 42,
  }
});

export default MyComponent;