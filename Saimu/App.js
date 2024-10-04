import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import MenuhomeScreen from './Screens/MenuhomeScreen'
import DailyScreen from './Screens/DailyScreen'
import PrayerScreen from './Screens/PrayerScreen'
import SeemseeScreen from './Screens/SeemseeScreen'
import OpentarotScreen from './Screens/OpentarotScreen'
import MeantarotScreen from './Screens/MeantarotScreen'
import DreamScreen from './Screens/DreamScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator();

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const gotoLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./img/welcome.png')}
        resizeMode="cover"
        style={styles.bg}
      >
        <TouchableOpacity
          style={styles.ButtonRub}
          onPress={gotoLogin}
        >
          <Image
            source={require('./img/button/1.png')}
            resizeMode="cover"
            style={styles.buttonStyles}
          ></Image>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const LoginScreen = () => {
  const navigation = useNavigation();
  const [showModal1, setshowModal1] = useState('');

  const gotoRegister = () => {
    navigation.navigate('Register');
  };

  const gotoLogin = () => {
    navigation.navigate('Login');
  };

  // const closeModal = (modalNumber) => {
  //   switch (modalNumber) {
  //     case 1:
  //       setshowModal1(false);
  //     default:
  //       break;
  //   }
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./img/bg.png')}
        resizeMode="cover"
        style={styles.bg}
      >
        <Image
          style={styles.Picture}
          source={require('./img/logo.png')}
        />
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.TextHead}>ยินดีต้อนรับ</Text>
          <Text style={styles.TextSub}>ลงชื่อเข้าใช้บัญชีของคุณ</Text>
          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.TextList}>ชื่อผู้ใช้งาน</Text>
            <TextInput
              style={styles.InputStyle}
            />
            <Text style={styles.TextList}>รหัสผ่าน</Text>
            <TextInput
              style={styles.InputStyle}
            />
          </View>
          <Text style={{ fontFamily: 'Mitr-Regular', fontSize: 12, textAlign: 'right', marginRight: 32, marginTop: 16, color: '#3E356C', }}>
            ลืมรหัสผ่านใช่หรือไม่</Text>
          <TouchableOpacity
            style={styles.ButtonLogin}
            onPress={() => navigation.navigate('Menu')}
          >
            <Image
              source={require('./img/button/2.png')}
              resizeMode="cover"
              style={styles.buttonStyles}
            ></Image>
          </TouchableOpacity>
          <Modal
            transparent={true}
            visible={showModal1}
            animationType="fade"
          >
            <View style={styles.StyleViewModal}>
              <View style={styles.ModalTumnai}>
                <Text style={{ fontFamily: 'Mitr-Medium', fontSize: 16, color: 'black', textAlign: 'center', marginTop: 20 }}>การยินยอมให้ใช้ข้อมูลส่วนบุคคล</Text>
                <View style={styles.boxScroll}>
                  <ScrollView style={styles.scrollView}>
                    <Text style={{ fontFamily: 'Mitr-Light', fontSize: 8, color: 'black', paddingLeft: 8, paddingRight: 8 }}>
                      ข้าพเจ้าให้ความยินยอมแก่ บริษัท มะลิลา จำกัด ในการเก็บรวบรวม
                      ใช้ หรือประมวลผล ข้อมูลส่วนบุคคลของข้าพเจ้า (กล่าวคือข้อมูลใด ๆ ที่ระบุไปถึงข้าพเจ้าได้ไม่ว่าทางตรงหรือทางอ้อม เช่น ชื่อ-นามสกุล เลขประจำตัวประชาชน วันเดือนปีเกิด ที่อยู่ อีเมล์ เลขโทรศัพท์ เป็นต้น) และ/หรือข้อมูลใด ๆ เกี่ยวกับการใช้สินค้าและ/หรือบริการของข้าพเจ้า (ต่อไปนี้ขอเรียกรวมกันว่า “ข้อมูลของข้าพเจ้า”) เพื่อวัตถุประสงค์ใน
                      การวิเคราะห์หรือคาดการณ์เกี่ยวกับความเข้าใจความต้องการของข้าพเจ้า วิจัย พัฒนา ปรับปรุงผลิตภัณฑ์ และวางแผนการตลาด เพื่อให้บริษัทฯ นำเสนอข้อมูล ข่าวสาร สินค้าและบริการ สิทธิประโยชน์ รายการส่งเสริม
                      การขาย แบบสอบถาม แบบสำรวจ และข้อเสนอต่าง ๆ ของบริษัทฯ ที่วิเคราะห์และคัดสรรอย่างเหมาะสมกับข้าพเจ้า รวมถึงเพื่อพัฒนาคุณภาพ
                      การให้บริการของบริษัทฯให้มีประสิทธิภาพยิ่งขึ้น หรือเพื่อตรวจสอบ
                      และยืนยันตัวตน และป้องกันหรือตรวจจับการละเมิดข้อกำหนด
                      หรือนโยบายของบริษัทฯ

                      บริษัทฯ จะไม่เก็บข้อมูลของข้าพเจ้า เกินกว่าระยะเวลาที่บริษัทฯ เห็นว่าจำเป็นตามวัตถุประสงค์ที่กล่าวถึงข้างต้น หรือจนกว่าข้าพเจ้า
                      จะยกเลิกให้ความยินยอม ยกเว้นกรณีที่กฎหมายกำหนดให้เก็บข้อมูล
                      ดังกล่าวในระยะเวลาที่นานกว่านั้น

                      ข้าพเจ้ารับทราบว่าการให้ความยินยอมนี้เป็นการให้ความยินยอมตาม พระราชบัญญัติคุ้มครองข้อมูล
                      ส่วนบุคคล พ.ศ. 2562 (“พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล”) และข้าพเจ้าได้อ่านและรับทราบนโยบาย
                      คุ้มครองข้อมูลส่วนบุคคลของบริษัทฯ เป็นอย่างดีแล้ว และสามารถเข้าถึง
                      รายละเอียดอื่น ๆ เกี่ยวกับสิทธิของข้าพเจ้าในการจัดการข้อมูลของข้าพเจ้า ได้ที่เว็บไซต์ เพื่อให้ข้าพเจ้าสามารถรับสิทธิประโยชน์ รายการส่งเสริม
                      การขาย และข้อเสนอต่าง ๆ ของบริษัทฯ ได้อย่างต่อเนื่องทั้งนี้ ข้าพเจ้ารับทราบว่าบริษัทฯ จะประมวลผลข้อมูลส่วนบุคคลตามกฎหมาย
                      ที่ใช้บังคับอยู่ในปัจจุบัน และบริษัทฯ มีสิทธิเก็บรวบรวมและใช้ข้อมูล
                      ส่วนบุคคลที่บริษัทฯ เก็บรวบรวมไว้ก่อนวันที่ พ.ร.บ. คุ้มครองข้อมูล
                      ส่วนบุคคลในส่วนที่เกี่ยวข้องกับการประมวลข้อมูลส่วนบุคคลมีผลใช้บังคับ ต่อไปได้ตามวัตถุประสงค์เดิม โดยหากข้าพเจ้าไม่ประสงค์ที่จะให้บริษัทฯ เก็บรวมรวมและใช้ข้อมูลส่วนบุคคลดังกล่าวต่อไปภายหลัง พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคลใช้บังคับแล้ว ข้าพเจ้าสามารถแจ้งยกเลิกความยินยอมได้ตามช่องทางที่บริษัทฯ จะได้เผยแพร่ประชาสัมพันธ์ต่อไป อย่างไรก็ตาม การถอนความยินยอม
                      ดังกล่าวของข้าพเจ้า จะไม่กระทบกระเทือนต่อการดำเนินการใด ๆ ที่บริษัทฯได้ดำเนินการไปแล้ว ทั้งนี้ การถอนความยินยอม อาจกระทบ
                      ต่อสิทธิหรือหน้าที่ใด ๆ ของข้าพเจ้า รวมถึงอาจเสียโอกาส
                      หากข้อมูลส่วนบุคคลดังกล่าวเชื่อมโยงกับสิทธิประโยชน์ต่างๆ ซึ่งข้าพเจ้ายอมรับผลกระทบที่อาจจะเกิดขึ้นจากการนั้นได้

                      อนึ่งก่อนให้ความยินยอมข้าพเจ้าได้อ่านและเข้าใจข้อกำหนดและเงื่อนไข
                      ในการประมวลผลข้อมูลของข้าพเจ้า ซึ่งระบุไว้ด้านบนของ
                      ความยินยอมนี้อย่างชัดเจนแล้ว และข้าพเจ้ายินยอมให้บริษัทฯ ดำเนินการประมวลผลข้อมูลส่วนบุคคลของข้าพเจ้า
                    </Text>
                  </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, }}>
                  <TouchableOpacity
                    style={styles.ButtonnotEnter}
                    onPress={() => setshowModal1(false)}
                  >
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr-Regular', textAlign: 'center', marginTop: 11, color: '#3E356C' }}>
                      ไม่ยินยอม</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.ButtonEnter}
                    onPress={gotoRegister}
                  >
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr-Regular', textAlign: 'center', marginTop: 13, color: 'white' }}>
                      ยินยอม</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
            <Text style={{ fontFamily: 'Mitr-Regular', fontSize: 12, color: '#3E356C', }}>ไม่มีบัญชีผู้ใช้?</Text>
            <Text style={{ fontFamily: 'Mitr-Regular', fontSize: 12, marginLeft: 10, color: '#E67097', }}
              onPress={() => setshowModal1(true)}
            >สร้างบัญชีใหม่</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const RegisterScreen = () => {
  const navigation = useNavigation();

  const gotoLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./img/bg.png')}
        resizeMode="cover"
        style={styles.bg}
      >
        <Image
          style={styles.PictureRG}
          source={require('./img/logo.png')}
        />
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.TextHead}>สร้างบัญชี</Text>
          <Text style={styles.TextSub}>สร้างบัญชีเพื่อให้คุณได้รับคำทำนายที่ดีที่สุด</Text>
          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.TextList}>Email</Text>
            <TextInput
              style={styles.InputStyleRG}

            />
            <Text style={styles.TextList}>ชื่อผู้ใช้งาน</Text>
            <TextInput
              style={styles.InputStyleRG}

            />
            <Text style={styles.TextList}>เบอร์โทรศัพท์</Text>
            <TextInput
              style={styles.InputStyleRG}

            />
            <Text style={styles.TextList}>รหัสผ่าน</Text>
            <TextInput
              style={styles.InputStyleRG}

            />
          </View>
          <TouchableOpacity
            style={styles.ButtonRegister}
            onPress={() => navigation.navigate('Menu')}
          >
            <Image
              source={require('./img/button/3.png')}
              resizeMode="cover"
              style={styles.buttonStyles}
            ></Image>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <Text style={{ fontFamily: 'Mitr-Regular', fontSize: 12, color: '#3E356C', }}
            >มีบัญชีผู้ใช้อยู่แล้ว?</Text>
            <Text style={{ fontFamily: 'Mitr-Regular', fontSize: 12, marginLeft: 10, color: '#E67097', }}
              onPress={gotoLogin}
            >เข้าสู่ระบบ</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuhomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Daily"
            component={DailyScreen}
            options={{ headerShown: false }}
          />
        <Stack.Screen
            name="Prayer"
            component={PrayerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Seemsee"
            component={SeemseeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Opentarot"
            component={OpentarotScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Meantarot"
            component={MeantarotScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dream"
            component={DreamScreen}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextHead: {
    fontSize: 38,
    fontFamily: 'Mitr-Medium',
    marginLeft: 32,
    marginRight: 32,
    color: '#3E356C',
  },
  TextSub: {
    fontSize: 14,
    fontFamily: 'Mitr-Light',
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 12,
    color: '#3E356C',
    // marginTop: -5,
  },
  TextList: {
    fontSize: 12,
    fontFamily: 'Mitr-Medium',
    marginTop: 10,
    color: '#3E356C',
  },
  InputStyle: {
    height: 56,
    width: 346,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 150,
    borderWidth: 1,
    borderColor: '#929292',
    marginTop: 5,
  },
  InputStyleRG: {
    height: 48,
    width: 346,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 150,
    borderWidth: 1,
    borderColor: '#929292',
    marginTop: 5,
  },
  ButtonLogin: {
    height: 56,
    width: 346,
    borderRadius: 120,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 32,
  },
  Picture: {
    height: 123,
    width: 123,
    marginLeft: 140,
    marginTop: 16,
  },
  bg: {
    flex: 1,
  },
  buttonStyles: {
    width: 346,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
  ButtonRegister: {
    height: 56,
    width: 346,
    borderRadius: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 24,
  },
  PictureRG: {
    height: 123,
    width: 123,
    marginLeft: 140,
    marginTop: 16,
  },
  ModalTumnai: {
    height: 450,
    width: 300,
    borderRadius: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#3E356C',
  },
  StyleViewModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  ButtonEnter: {
    height: 48,
    width: 100,
    backgroundColor: '#3E356C',
    borderRadius: 30,
    marginLeft: 15,
  },
  ButtonnotEnter: {
    height: 48,
    width: 100,
    borderColor: '#3E356C',
    borderWidth: 2,
    borderRadius: 30,
  },
  scrollView: {
    alignSelf: 'center',
  },
  boxScroll: {
    height: 300,
    width: 250,
    alignSelf: 'center',
    marginTop: 10,
  },
  ButtonRub: {
    alignSelf: 'center',
    marginTop: 600,
  }
})