import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const image = { uri: 'https://i.pinimg.com/originals/c7/37/d4/c737d40954c94ffee9b8f4cf63e61805.jpg' };

//Head Home
const HeadHome = () => {
  return (
    <View style={{ paddingTop: 30, paddingLeft: 20, flexDirection: 'row' }}>
      <Image source={{ uri: 'https://i.pinimg.com/originals/96/cf/7b/96cf7b6a22e26916c32e4256f2eea523.png' }}
        style={{ width: 70, height: 70 }}
      />
      <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
        <Text style={styles.text}>มุก ธัญธร</Text>
        <Text style={styles.text1}>ขอให้วันนี้เป็นที่ดีนะคะ</Text>
      </View>
    </View>
  )
}

//menu Horoscope
const Horoscope = () => {
  const navigation = useNavigation();

  const goToScreen = () => {
    navigation.navigate('Daily');
  };

  return (
    <View style={{ alignItems: 'center', paddingTop: 16, paddingLeft: 32, paddingRight: 32 }}>
      <TouchableOpacity onPress={goToScreen}>
        <Image source={{ uri: 'https://i.pinimg.com/originals/de/f4/ab/def4ab1cdc5a6423e94d9b8c6a62a6f3.png' }}
          resizeMode='cover'
          style={{ width: 346, height: 160, borderRadius: 30, }}
        />
      </TouchableOpacity>
    </View>
  )
}

//menu Prayer
const Prayer = () => {
  const navigation = useNavigation();

  const goToScreen = () => {
    navigation.navigate('Prayer');
  };

  return (
    <View style={{ width: 124, height: 124, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={goToScreen}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://i.pinimg.com/originals/f1/f8/ca/f1f8cafc52708962bd04fca66a677967.png' }}
            style={{ width: 90, height: 90 }}
          />
        </View>
        <View style={styles.cardtxt}>
          <Text style={{ color: '#3E356C', fontFamily: 'Mitr-Regular', }}>บทสวดมนต์</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

//Menu Opening the tarot cards
const Openingtarot = () => {
  const navigation = useNavigation();

  const goToScreen = () => {
    navigation.navigate('Opentarot');
  };

  return (
    <TouchableOpacity onPress={goToScreen}>
      <View style={styles.box2}>
        <View style={{ alignItems: 'center', paddingTop: 16 }}>
          <View style={styles.box3}>
            <Image source={{ uri: 'https://i.pinimg.com/originals/5c/59/0d/5c590dce6cde290c086835deeac2ba9c.png' }}
              style={{ width: 124, height: 124 }} />
          </View>
          <Text style={{ fontSize: 18, textAlign: 'center', paddingTop: 21, color: '#3E356C', fontFamily: 'Mitr-Regular', }}>
            เปิดไพทาโรต์</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

//Menu Take a risk
const TakeaRisk = () => {
  const navigation = useNavigation();

  const goToScreen = () => {
    navigation.navigate('Seemsee');
  };

  return (
    <TouchableOpacity onPress={goToScreen}>
      <View style={styles.box2}>
        <View style={{ alignItems: 'center', paddingTop: 16 }}>
          <View style={styles.box3}>
            <Image source={{ uri: 'https://i.pinimg.com/originals/2c/e3/b6/2ce3b645a407cd65412de027001b94e3.png' }}
              style={{ width: 124, height: 124 }} />
          </View>
          <Text style={{ fontSize: 18, textAlign: 'center', paddingTop: 21, color: '#3E356C', fontFamily: 'Mitr-Regular', }}>
            เสี่ยมเซียมซี</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

//Menu Card meaning
const CardMeaning = () => {
  const navigation = useNavigation();

  const goToScreen = () => {
    navigation.navigate('Meantarot');
  };

  return (
    <TouchableOpacity onPress={goToScreen}>
      <View style={styles.box2}>
        <View style={{ alignItems: 'center', paddingTop: 16 }}>
          <View style={styles.box3}>
            <Image source={{ uri: 'https://i.pinimg.com/originals/9e/46/92/9e4692370bad9ad52a39e18bfcc86060.png' }}
              style={{ width: 124, height: 124 }} />
          </View>
          <Text style={{ fontSize: 18, textAlign: 'center', paddingTop: 21, color: '#3E356C', fontFamily: 'Mitr-Regular', }}>
            ความหมายไพ่</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

// Menu Dream interpretation
const Dream = () => {
  const navigation = useNavigation();

  const goToScreen = () => {
    navigation.navigate('Dream');
  };

  return (
    <TouchableOpacity onPress={goToScreen}>
      <View style={styles.box2}>
        <View style={{ alignItems: 'center', paddingTop: 16 }}>
          <View style={styles.box3}>
            <Image source={{ uri: 'https://i.pinimg.com/originals/3b/9b/26/3b9b26138fbba9869ca4ce9083acb697.png' }}
              style={{ width: 124, height: 124 }} />
          </View>
          <Text style={{ fontSize: 18, textAlign: 'center', paddingTop: 21, color: '#3E356C', fontFamily: 'Mitr-Regular', }}>
            ทำนายฝัน</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

//menu scroview row
const Scrorow = () => {
  return (
    <View style={{ paddingLeft: 16, marginTop: 12, paddingRight: 32, marginBottom: 12 }}>
      <ScrollView horizontal={true}>

        <Prayer></Prayer>

        <TouchableOpacity>
          <View style={{ width: 100, height: 124, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.card}>
              <Image source={{ uri: 'https://i.pinimg.com/originals/e9/64/46/e96446708ed789110897fd085f4c7c12.png' }}
                style={{ width: 90, height: 90 }} />
            </View>
            <View style={styles.cardtxt}>
              <Text style={{ color: '#3E356C', fontFamily: 'Mitr-Regular', }}>ทำบุญ</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ width: 124, height: 124, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.card}>
              <Image source={{ uri: 'https://i.pinimg.com/originals/73/bb/ba/73bbba7c7ff2e2e94465c8daec8ff147.png' }}
                style={{ width: 90, height: 90 }} />
            </View>
            <View style={styles.cardtxt}>
              <Text style={{ color: '#3E356C', fontFamily: 'Mitr-Regular', }}>เช่าวัตถุมงคล</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ width: 100, height: 124, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.card}>
              <Image source={{ uri: 'https://i.pinimg.com/originals/9e/46/92/9e4692370bad9ad52a39e18bfcc86060.png' }}
                style={{ width: 90, height: 90 }} />
            </View>
            <View style={styles.cardtxt}>
              <Text style={{ color: '#3E356C', fontFamily: 'Mitr-Regular', }}>ฤกษ์มงคล</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ width: 124, height: 124, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.card}>
              <Image source={{ uri: 'https://i.pinimg.com/originals/69/96/f3/6996f3647d6fff43d1624185eb67727d.png' }}
                style={{ width: 90, height: 90 }} />
            </View>
            <View style={styles.cardtxt1}>
              <Text style={{ color: '#3E356C', fontFamily: 'Mitr-Regular', }}>วอลเปเปอร์เสริมดวง</Text>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}

//menu 
const Menu = () => {
  return (
    <View style={styles.box4}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 48 }}>
        <TakeaRisk></TakeaRisk>
        <Openingtarot></Openingtarot>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <CardMeaning></CardMeaning>
        <Dream></Dream>
      </View>
    </View>
  )
}

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <HeadHome></HeadHome>
        <Horoscope></Horoscope>
        <Scrorow></Scrorow>
        <ScrollView>
          <Menu></Menu>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    //justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Mitr-Regular',
    paddingLeft: 10,
    color: '#3E356C',
  },
  text1: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Mitr-Regular',
    paddingLeft: 10,
    color: '#3E356C',
  },
  box2: {
    width: 160,
    height: 160,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    // paddingLeft: 32,
    // paddingRight: 32,
    // margin: 20,
  },
  box3: {
    width: 130,
    height: 130,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E356C',

  },
  box4: {
    // width: 'auto',
    // height: 400
    paddingBottom: 64,
    paddingLeft: 32,
    paddingRight: 32,
  },
  conta: {
    // flex: 1,
    // flexDirection: 'row',
    // padding: 10
  },
  card: {
    // flex: 1,
    // justifyContent: 'center',
    // alignContent: 'center',
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: '#3E356C',
    // marginRight: 24,
    // marginTop: 30,
    // margin: 16,

  },
  cardtxt: {
    // width: 100,
    // textAlign: 'center',
    alignItems: 'center',
    // paddingTop: 8,
    // marginLeft: 20,
  },
  cardtxt1: {
    // width: 150,
    // alignItems: 'center',
  },
  cardrow: {
    // backgroundColor: '#3E356C',
    // marginRight: 24,
  }
})