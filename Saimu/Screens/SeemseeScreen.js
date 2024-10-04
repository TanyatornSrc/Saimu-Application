import { StyleSheet, Text, View, ImageBackground, TextInput, Image, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const image = { uri: 'https://i.pinimg.com/originals/bf/bd/af/bfbdaf44b03f809f0af8a2cfb77c1f1f.jpg' };

const Head = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.styleicon}>
        <Icon
          name='arrow-back-outline'
          type='ionicon'
          color='#3E356C'
          size={40}
          onPress={() => navigation.goBack()} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={styles.txtHead}>เสี่ยงเซียมซี</Text>
          <Text style={styles.txtSub}>เลือกวัดหรือสถานที่</Text>
        </View>
        <View>
          <Image source={{ uri: 'https://i.pinimg.com/originals/1c/ad/e6/1cade6b27e5004b65701a6681c167c13.png' }}
            style={{ width: 100, height: 100 }} />
        </View>
      </View>
    </View>
  )
}

//menu wat
const Wat = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);
  const [isModalVisible4, setModalVisible4] = useState(false);
  const [isModalVisible5, setModalVisible5] = useState(false);

  const [fortuneText, setFortuneText] = useState({head: '', detail: '' });
  const [selectedFortune, setSelectedFortune] = useState('');

  const handleFortuneButtonPress = (place) => {
    fetchFortune(place);
    setSelectedFortune(place);
    showModal();
  };
  const handleFortuneButtonPres1 = (place) => {
    fetchFortune(place);
    setSelectedFortune(place);
    showModal1();
  };
  const handleFortuneButtonPres2 = (place) => {
    fetchFortune(place);
    setSelectedFortune(place);
    showModal2();
  };
  const handleFortuneButtonPres3 = (place) => {
    fetchFortune(place);
    setSelectedFortune(place);
    showModal3();
  };
  const handleFortuneButtonPres4 = (place) => {
    fetchFortune(place);
    setSelectedFortune(place);
    showModal4();
  };
  const handleFortuneButtonPres5 = (place) => {
    fetchFortune(place);
    setSelectedFortune(place);
    showModal5();
  };
  useEffect(() => {
    fetchFortune(); // เรียกใช้ฟังก์ชันเมื่อคอมโพเนนต์โหลด
  }, []);

  const fetchFortune = (place) => {
    const apiUrl = `http://10.0.2.2:5000/api/fortune/${place}`;

    fetch(apiUrl)
      .then(response => response.json()) // json to js
      .then(data => {
        // เช็คว่ามีข้อมูลที่ต้องการหรือไม่ และตั้งค่า fortuneText ตามผลลัพธ์
        if (data && data.fortune) {
          setFortuneText(data.fortune);
        }
      })
      .catch(error => console.error('Error fetching fortune text:', error));
  };

  const showModal = () => {
    setModalVisible(true);
  };
  const showModal1 = () => {
    setModalVisible1(true);
  }; const showModal2 = () => {
    setModalVisible2(true);
  }; const showModal3 = () => {
    setModalVisible3(true);
  }; const showModal4 = () => {
    setModalVisible4(true);
  }; const showModal5 = () => {
    setModalVisible5(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };
  const hideModal1 = () => {
    setModalVisible1(false);
  };
  const hideModal2 = () => {
    setModalVisible2(false);
  };
  const hideModal3 = () => {
    setModalVisible3(false);
  };
  const hideModal4 = () => {
    setModalVisible4(false);
  };
  const hideModal5 = () => {
    setModalVisible5(false);
  };

  return (
    <View style={styles.conmenu}>
      <ScrollView style={{ paddingBottom: 24 }}>

        <View style={styles.con2}>
          <View style={styles.menubox}>
            {/* <View style={styles.con}> */}
              <View style={styles.conbox}>
                <Image
                  source={{ uri: 'https://i.pinimg.com/originals/34/87/15/348715b8440f568877efb16014200cc7.jpg' }}
                  style={styles.boximage} />
              </View>
              <Text style={styles.txtin1}>วัดพระธาตุดอยสุเทพ</Text>
              <TouchableOpacity onPress={() => handleFortuneButtonPress('วัดพระธาตุดอยสุเทพราชวรวิหาร')}>
                <Image source={{ uri: 'https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/432459301_1089486835674385_1951882611896241770_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHogez3DFgokvQ1lE_mK0uJKJBfJ7t3jOwokF8nu3eM7LtBV9KHBvLGotQoSyifcLkl1I6V48YOg4_-blG9eIHQ&_nc_ohc=TZV40fRtDpgAX_3B4eD&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdSUMDMF208uYDCLPe1jT2lACp25G-0WSO8ua496ntlAiA&oe=663108DB' }}
                  style={styles.Buttom} />
              </TouchableOpacity>
            {/* </View> */}
          </View>

          <View style={styles.menubox}>
            {/* <View style={styles.con}> */}
              <View style={[styles.conbox]}>
                <Image
                  source={{ uri: 'https://i.pinimg.com/originals/80/7f/ed/807fedce0548b532e81c774e11f4b6e0.jpg' }}
                  style={[styles.boximage]} />
              </View>
              <Text style={styles.txtin}>วัดพระธาตุพนม</Text>
              <TouchableOpacity onPress={() => handleFortuneButtonPres1('วัดพระธาตุพนม')}>
                <Image source={{ uri: 'https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/432459301_1089486835674385_1951882611896241770_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHogez3DFgokvQ1lE_mK0uJKJBfJ7t3jOwokF8nu3eM7LtBV9KHBvLGotQoSyifcLkl1I6V48YOg4_-blG9eIHQ&_nc_ohc=TZV40fRtDpgAX_3B4eD&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdSUMDMF208uYDCLPe1jT2lACp25G-0WSO8ua496ntlAiA&oe=663108DB' }}
                  style={styles.Buttom} />
              </TouchableOpacity>

            {/* </View> */}
          </View>

        </View>

        <View style={styles.con3}>
          <View style={styles.menubox}>
            {/* <View style={styles.con}> */}
              <View style={styles.conbox}>
                <Image
                  source={{ uri: 'https://i.pinimg.com/originals/40/ed/d0/40edd08eb3cbbf99c2fb10757518423a.jpg' }}
                  style={styles.boximage} />
              </View>
              <Text style={styles.txtin}>วัดมังกรกมลาวาส</Text>
              <TouchableOpacity onPress={() => handleFortuneButtonPres2('วัดมังกรกมลาวาส')}>
                <Image source={{ uri: 'https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/432459301_1089486835674385_1951882611896241770_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHogez3DFgokvQ1lE_mK0uJKJBfJ7t3jOwokF8nu3eM7LtBV9KHBvLGotQoSyifcLkl1I6V48YOg4_-blG9eIHQ&_nc_ohc=TZV40fRtDpgAX_3B4eD&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdSUMDMF208uYDCLPe1jT2lACp25G-0WSO8ua496ntlAiA&oe=663108DB' }}
                  style={styles.Buttom} />
              </TouchableOpacity>

            {/* </View> */}
          </View>

          <View style={styles.menubox}>
            {/* <View style={styles.con}> */}
              <View style={styles.conbox}>
                <Image
                  source={{ uri: 'https://i.pinimg.com/originals/3b/3d/fb/3b3dfb39b155eba7e9e161780448b246.jpg' }}
                  style={styles.boximage} />
              </View>
              <Text style={styles.txtin1}>วัดสุทัศนเทพวราราม</Text>
              <TouchableOpacity onPress={() => handleFortuneButtonPres3('วัดสุทัศนเทพวรารามราชวรมหาวิหาร')}>
                <Image source={{ uri: 'https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/432459301_1089486835674385_1951882611896241770_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHogez3DFgokvQ1lE_mK0uJKJBfJ7t3jOwokF8nu3eM7LtBV9KHBvLGotQoSyifcLkl1I6V48YOg4_-blG9eIHQ&_nc_ohc=TZV40fRtDpgAX_3B4eD&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdSUMDMF208uYDCLPe1jT2lACp25G-0WSO8ua496ntlAiA&oe=663108DB' }}
                  style={styles.Buttom} />
              </TouchableOpacity>

            {/* </View> */}
          </View>
        </View>

        <View style={styles.con3}>
          <View style={styles.menubox}>
            {/* <View style={styles.con}> */}
              <View style={styles.conbox}>
                <Image
                  source={{ uri: 'https://i.pinimg.com/originals/e2/0e/ea/e20eeac60d4704823a668e9b965e71c0.jpg' }}
                  style={styles.boximage} />
              </View>
              <Text style={styles.txtin}>ศาลหลักเมืองกรุงเทพ</Text>
              <TouchableOpacity onPress={() => handleFortuneButtonPres4('ศาลหลักเมืองกรุงเทพ')}>
                <Image source={{ uri: 'https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/432459301_1089486835674385_1951882611896241770_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHogez3DFgokvQ1lE_mK0uJKJBfJ7t3jOwokF8nu3eM7LtBV9KHBvLGotQoSyifcLkl1I6V48YOg4_-blG9eIHQ&_nc_ohc=TZV40fRtDpgAX_3B4eD&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdSUMDMF208uYDCLPe1jT2lACp25G-0WSO8ua496ntlAiA&oe=663108DB' }}
                  style={styles.Buttom} />
              </TouchableOpacity>

            {/* </View> */}
          </View>

          <View style={styles.menubox}>
            {/* <View style={styles.con}> */}
              <View style={styles.conbox}>
                <Image
                  source={{ uri: 'https://i.pinimg.com/originals/80/58/be/8058bea8f3cf59165831098386c32c3f.jpg' }}
                  style={styles.boximage} />
              </View>
              <Text style={styles.txtin}>วัดโสธรวรารามวรวิหาร</Text>
              <TouchableOpacity onPress={() => handleFortuneButtonPres5('วัดหลวงพ่อโสธร')}>
                <Image source={{ uri: 'https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/432459301_1089486835674385_1951882611896241770_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHogez3DFgokvQ1lE_mK0uJKJBfJ7t3jOwokF8nu3eM7LtBV9KHBvLGotQoSyifcLkl1I6V48YOg4_-blG9eIHQ&_nc_ohc=TZV40fRtDpgAX_3B4eD&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdSUMDMF208uYDCLPe1jT2lACp25G-0WSO8ua496ntlAiA&oe=663108DB' }}
                  style={styles.Buttom} />
              </TouchableOpacity>

            {/* </View> */}
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
      >
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalView}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 48 }}>
                <View>
                  <Text style={styles.detailday}>{fortuneText.head}</Text>
                  <Text style={styles.detailday1}>วัดพระธาตุดอยสุเทพ</Text>
                </View>
                {/* <View style={{ marginTop: 32, marginLeft: 48 }}> */}
                  <Image
                    source={{ uri: 'https://i.pinimg.com/originals/34/87/15/348715b8440f568877efb16014200cc7.jpg' }}
                    style={styles.boximage1} />
                {/* </View> */}
              </View>
              <ScrollView>
                <View>
                  <Text style={styles.text2}>{fortuneText.detail}</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        transparent={true}
        visible={isModalVisible1}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={hideModal1}>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalView}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 48 }}>
                <View>
                  <Text style={styles.detailday}>{fortuneText.head}</Text>
                  <Text style={styles.detailday1}>วัดพระธาตุพนม</Text>
                </View>
                {/* <View style={{ marginTop: 50, marginLeft: 70 }}> */}
                  <Image
                    source={{ uri: 'https://i.pinimg.com/originals/80/7f/ed/807fedce0548b532e81c774e11f4b6e0.jpg' }}
                    style={styles.boximage1} />
                {/* </View> */}
              </View>
              <ScrollView>
              <View>
                <Text style={styles.text2}>{fortuneText.detail}</Text>
              </View>
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        transparent={true}
        visible={isModalVisible2}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={hideModal2}>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalView}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 48 }}>
                <View>
                  <Text style={styles.detailday}>{fortuneText.head}</Text>
                  <Text style={styles.detailday1}>วัดมังกรกมลาวาส</Text>
                </View>
                {/* <View style={{ marginTop: 50, marginLeft: 70 }}> */}
                  <Image
                    source={{ uri: 'https://i.pinimg.com/originals/40/ed/d0/40edd08eb3cbbf99c2fb10757518423a.jpg' }}
                    style={styles.boximage1} />
                {/* </View> */}
              </View>
              <ScrollView>
                {/* <View style={{ marginTop: 35, height: 500 }}> */}
                  <Text style={styles.text2}>{fortuneText.detail}</Text>
                {/* </View> */}

              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        transparent={true}
        visible={isModalVisible3}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={hideModal3}>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 48 }}>
                <View>
                  <Text style={styles.detailday}>{fortuneText.head} </Text>
                  <Text style={styles.detailday1}>วัดสุทัศนเทพวราราม</Text>
                </View>
                {/* <View style={{ marginTop: 50, marginLeft: 20 }}> */}
                  <Image
                    source={{ uri: 'https://i.pinimg.com/originals/3b/3d/fb/3b3dfb39b155eba7e9e161780448b246.jpg' }}
                    style={styles.boximage1} />
                {/* </View> */}
              </View>
              <ScrollView>
                {/* <View style={{ marginTop: 35, height: 500 }}> */}
                  <Text style={styles.text2}>{fortuneText.detail}</Text>
                {/* </View> */}

              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        transparent={true}
        visible={isModalVisible4}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={hideModal4}>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 48 }}>
                <View>
                  <Text style={styles.detailday}>{fortuneText.head} </Text>
                  <Text style={styles.detailday1}>ศาลหลักเมืองกรุงเทพ</Text>
                </View>
                {/* <View style={{ marginTop: 50, marginLeft: 70 }}> */}
                  <Image
                    source={{ uri: 'https://i.pinimg.com/originals/e2/0e/ea/e20eeac60d4704823a668e9b965e71c0.jpg' }}
                    style={styles.boximage1} />
                {/* </View> */}
              </View>
              <ScrollView>
                {/* <View style={{ marginTop: 35, height: 500 }}> */}
                  <Text style={styles.text2}>{fortuneText.detail}</Text>
                {/* </View> */}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        transparent={true}
        visible={isModalVisible5}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={hideModal5}>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 48 }}>
                <View>
                  <Text style={styles.detailday}>{fortuneText.head} </Text>
                  <Text style={styles.detailday1}>วัดโสธรวรารามวรวิหาร</Text>
                </View>
                {/* <View style={{ marginTop: 50, marginLeft: 70 }}> */}
                  <Image
                    source={{ uri: 'https://i.pinimg.com/originals/80/58/be/8058bea8f3cf59165831098386c32c3f.jpg' }}
                    style={styles.boximage1} />
                {/* </View> */}
              </View>
              <ScrollView>
                {/* <View style={{ marginTop: 35, height: 500 }}> */}
                  <Text style={styles.text2}>{fortuneText.detail}</Text>
                {/* </View> */}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

    </View>
  )
}

const SeemseeScreen = () => {

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Head></Head>
        <ScrollView>

          <Wat></Wat>

        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default SeemseeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    //justifyContent: 'center',
  },
  styleicon: {
    alignItems: 'flex-start',
    marginLeft: -5,
    paddingTop: 48,
  },
  header: {
    // paddingTop: 64,
    paddingBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
    justifyContent: 'space-between'
  },
  txtHead: {
    fontSize: 32,
    fontFamily: 'Mitr-Medium',
    color: '#3E356C',
  },
  txtSub: {
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Mitr-Light',
    color: '#3E356C',
  },
  // boxsearch: {
  //   flex: 2,
  //   margin: 25,
  //   marginTop: 1,
  // },
  // input: {
  //   height: 50,
  //   margin: 12,
  //   padding: 10,
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 30
  // },
  menubox: {
    width: 165,
    height: 170,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  conmenu: {
    paddingLeft: 32,
    paddingRight: 32,
    justifyContent: 'space-between'
  },
  boximage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#3E356C',
    borderWidth: 2,
    resizeMode: 'cover',
  },
  boximage1: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginTop: 38,
  },
  conbox: {
    // marginTop: 10,
    // borderWidth: 2,
    // borderRadius: 50,
    // width: 90
  },
  con: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtin: {
    fontSize: 14,
    textAlign: 'center',
    color: '#3E356C',
    marginTop: 4,
    fontFamily: 'Mitr-Regular'
  },
  txtin1: {
    fontSize: 14,
    textAlign: 'center',
    color: '#3E356C',
    marginTop: 4,
    fontFamily: 'Mitr-Regular'
  },
  Buttom: {
    width: 140,
    height: 30,
    borderRadius: 5,
    marginTop: 4
  },
  ModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  ModalView: {
    flex: 0.7,
    backgroundColor: '#3E356C',
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70
  },
  detailday: {
    fontSize: 30,
    color: '#ffff',
    fontFamily: 'Mitr-Regular',
    textAlign: 'left',
    marginTop: 48,
    marginLeft: 48
  },
  detailday1: {
    fontSize: 16,
    color: '#ffff',
    fontFamily: 'Mitr-Regular',
    textAlign: 'left',
    // marginTop: 10,
    marginLeft: 48
  },
  txtda: {
    margin: 5,
    textAlign: 'center',
    fontSize: 15,
    color: '#ffff',
    fontFamily: 'Mitr-Light'
  },
  con2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  con3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24
  },
  text2: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 18,
    paddingLeft: 48,
    paddingRight: 48,
    fontFamily: 'Mitr-Light',
    paddingTop: 16,
    paddingBottom: 24,
  },
})