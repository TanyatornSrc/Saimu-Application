import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ImageBackground, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const DreamScreen = () => {
  const [textinput1, onChangeText] = React.useState('');
  const [textinput, settextinput] = React.useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const [DreamInterPretationText, setDreamInterPretationText] = useState({ dreamName: '', meaning: '' });
  const [DreamInterPretationText1, setDreamInterPretationText1] = useState({ dreamName1: '', meaning1: '' });
  const [dreamPrediction, setdreamPrediction] = useState('');
  const [dreamPrediction1, setdreamPrediction1] = useState('');

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);
  const keywords = ["งู", "น้ำ", "ชายหาด", "จอมปลวก", "พายุหมุน", "ภูเขา", "ดอกกุหลาบ", "ดอกไม้สีขาว", "ผู้หญิง", "คนท้อง", "หญิงแก่ชรา", "ตำรวจ", "ไก่", "จิ้งจก", "ช้าง", "ตะขาบ"]

  const handleButtonPress = (place) => {
    fetchDreamInterPretationText(place);
    setdreamPrediction(place);
    showModal();
  };
  const handleButtonPress1 = (place) => {
    fetchDreamInterPretationText1(place);
    setdreamPrediction1(place);
    showModal();
  };

  const handleInputChange = (text) => {
    settextinput(text);
    const capturedKeywords = keywords.filter((keywords) => textinput1.includes(keywords));
    if (capturedKeywords.length == 1) {
      console.log('Captured keywords:', capturedKeywords); // Replace with your desired action
      handleButtonPress([capturedKeywords]);
    }
    else if (capturedKeywords.length > 1) {
      console.log('Captured keywords:', capturedKeywords); // Replace with your desired action
      handleButtonPress([capturedKeywords[0]]);
      handleButtonPress1([capturedKeywords[1]]);
    }
  };

  useEffect(() => {
    fetchDreamInterPretationText();
    fetchDreamInterPretationText1();
  }, []);

  const fetchDreamInterPretationText = (place) => {
    const apiUrl = `http://10.0.2.2:5000/api/dream-predictions/${place}`;

    fetch(apiUrl)
      .then(response => response.json()) // json to js
      .then(data => {
        // เช็คว่ามีข้อมูลที่ต้องการหรือไม่ และตั้งค่า ตามผลลัพธ์
        if (data && data.keyword && data.meaning) {
          setDreamInterPretationText({ dreamName: data.keyword, meaning: data.meaning });
        }
      })
      .catch(error => console.error('Error fetching prayer text:', error));
  };

  const fetchDreamInterPretationText1 = (place) => {
    const apiUrl = `http://10.0.2.2:5000/api/dream-predictions/${place}`;

    fetch(apiUrl)
      .then(response => response.json()) // json to js
      .then(data => {
        // เช็คว่ามีข้อมูลที่ต้องการหรือไม่ และตั้งค่า ตามผลลัพธ์
        if (data && data.keyword && data.meaning) {
          setDreamInterPretationText1({ dreamName1: data.keyword, meaning1: data.meaning });
        }
      })
      .catch(error => console.error('Error fetching prayer text:', error));
  };

  useEffect(() => {
    console.log('DreamText has been changed:', DreamInterPretationText); // แสดงค่า เมื่อมีการเปลี่ยนแปลง
  }, [DreamInterPretationText]);

  return (

    <View style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onBackdropPress={hideModal}
      >
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalView}>
              <ScrollView>
                <View style={{ flex: 1, paddingLeft: 48, paddingRight: 48, }}>
                  {[DreamInterPretationText1.dreamName1] == 0 ? (
                    <>
                      <Text style={styles.modalTexthead}>ฝันเห็น "{DreamInterPretationText.dreamName}"</Text>
                      <Text style={styles.modalText}>{DreamInterPretationText.meaning}</Text>
                    </>
                  ) : [DreamInterPretationText1.dreamName1] != 0 ? (
                    <>
                      <Text style={styles.modalTexthead}>ฝันเห็น "{DreamInterPretationText.dreamName}"</Text>
                      <Text style={styles.modalText}>{DreamInterPretationText.meaning}</Text>
                      <Text style={styles.modalTexthead}>ฝันเห็น "{DreamInterPretationText1.dreamName1}"</Text>
                      <Text style={styles.modalText}>{DreamInterPretationText1.meaning1}</Text>
                    </>) : (<Text style={styles.modalText}>ไม่พบคำทำนายใด ๆ</Text>)
                  }
                </View>
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <ImageBackground
        source={require('../img/dream/menu2.png')}
        resizeMode='cover'
        style={{ flex: 1, }}
      >
        <View style={styles.styleicon}>
          <Icon
            name='arrow-back-outline'
            type='ionicon'
            color='#3E356C'
            size={40}
            onPress={() => navigation.goBack()} />
        </View>
        
        <View style={styles.box7}>
          <View style={styles.box6}>
            <View style={styles.box3}>
              <Text style={{ fontFamily: 'Mitr-Medium', fontSize: 32, color: '#3E356C', fontWeight: 300 }}>ทำนายฝัน</Text>
              <Text style={{ color: '#3E356C', fontSize: 16, fontFamily: 'Mitr-Regular', paddingTop: 4 }}>กรุณากรอกข้อมูล</Text>
            </View>

            <Image
              source={require('../img/dream/ทำนายฝัน-01.png')}
              style={{ width: 100, height: 100 }}
            />

          </View>

          <View style={styles.box5}>

            <View style={{ paddingLeft: 32, gap: 8, paddingRight: 32 }}>
              <Text style={{ color: '#3E356C', fontSize: 15, fontFamily: 'Mitr-Medium' }}>พิมพ์ฝันที่ต้องการทำนาย</Text>
              <TextInput
                placeholder='คุณฝันว่าอะไร'
                placeholderTextColor={'lightgray'}
                style={styles.input}
                onChangeText={onChangeText}
                value={textinput1}

              />
            </View>

            <View style={styles.box4}>

              <TouchableOpacity style={styles.button} onPress={() => handleInputChange([textinput1])} >
                <Image
                  style={{ width: 346, height: 56, borderRadius: 150, }}
                  source={require('../img/dream/1.png')} />
              </TouchableOpacity>

            </View>

          </View >

        </View>

      </ImageBackground>

    </View>

  )
}

export default DreamScreen

const styles = StyleSheet.create({
  input: {
    height: 56,
    width: 346,
    padding: 10,
    borderRadius: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#929292',
  },
  styleicon: {
    alignItems: 'flex-start',
    paddingLeft: 28,
    paddingTop: 48,
  },
  box1: {
    alignItems: 'center',
    rowGap: 8,
  },
  container: {
    flex: 1,

  },
  modalText: {
    fontSize: 16,
    // paddingTop: 50,
    // marginBottom: 24,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Mitr-Light',
    // paddingBottom: 24,
  },
  modalTexthead: {
    fontSize: 34,
    paddingTop: 48,
    marginBottom: 24,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Mitr-Regular'
  },
  textHead: {
    fontFamily: 'Mitr-Regular',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3E356C',
  },
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    width: 200,
  },
  box4: {
    alignItems: 'center',
  },
  box5: {
    rowGap: 48,
  },
  box6: {
    // paddingTop: 64,
    paddingBottom: 15,
    flexDirection: 'row',
    paddingLeft: 32,
    justifyContent: 'space-between',
    paddingRight: 32,
  },
  box7: {
    gap: 8
  },
  ModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //padding:10
  },
  ModalView: {
    flex: 0.6,
    backgroundColor: '#3E356C',
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
})