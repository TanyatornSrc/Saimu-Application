import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback, Image, ImageBackground, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal1, setshowModal1] = useState('');
    const [showModal2, setshowModal2] = useState('');
    const [showModal3, setshowModal3] = useState('');
    const [showModal4, setshowModal4] = useState('');
    const [showModal5, setshowModal5] = useState('');
    const [showModal6, setshowModal6] = useState('');

    const [isModalVisible, setModalVisible] = useState(false);
    const [tarotText, setTarotText] = useState({ head: '', detail: '' });
    const [selectedTarot, setSelectedTarot] = useState('');
    const [tarotImage, setTarotImage] = useState('');

    const navigation = useNavigation();

    const handleTarotButtonPressLove = (place) => {
        fetchTarot(place);
        setSelectedTarot(place);
        setshowModal1(true);
    };

    const handleTarotButtonPressMoney = (place) => {
        fetchTarot(place);
        setSelectedTarot(place);
        setshowModal2(true);
    };

    const handleTarotButtonPressWork = (place) => {
        fetchTarot(place);
        setSelectedTarot(place);
        setshowModal3(true);
    };

    const handleTarotButtonPressStudy = (place) => {
        fetchTarot(place);
        setSelectedTarot(place);
        setshowModal5(true);
    };

    const handleTarotButtonPressLucky = (place) => {
        fetchTarot(place);
        setSelectedTarot(place);
        setshowModal4(true);
    };

    const handleTarotButtonPressHealth = (place) => {
        fetchTarot(place);
        setSelectedTarot(place);
        setshowModal6(true);
    };

    useEffect(() => {
        fetchTarot(); // เรียกใช้ฟังก์ชันเมื่อคอมโพเนนต์โหลด
    }, []);

    const fetchTarot = (place) => {
        const apiUrl = `http://10.0.2.2:5000/api/tarot/${place}`;

        fetch(apiUrl)
            .then(response => response.json()) // json to js
            .then(data => {
                // เช็คว่ามีข้อมูลที่ต้องการหรือไม่ และตั้งค่า tarotText ตามผลลัพธ์
                if (data && data.tarotReading) {
                    setTarotText(data.tarotReading);
                    setTarotImage(data.tarotReading.imageURL);
                }
            })
            .catch(error => console.error('Error fetching tarot text:', error));
    };

    const closeModal = (modalNumber) => {
        switch (modalNumber) {
            case 1:
                setshowModal1(false);
                break;
            case 2:
                setshowModal2(false);
                break;
            case 3:
                setshowModal3(false);
                break;
            case 4:
                setshowModal4(false);
                break;
            case 5:
                setshowModal5(false);
                break;
            case 6:
                setshowModal6(false);
                break;
            default:
                break;
        }
    };

    return (
        <View style={styles.containner}>
            <ImageBackground
                source={require('../img/bg.png')}
                resizeMode="cover"
                style={styles.bg}
            >
                <View style={styles.styleicon}>
                    <Icon
                        name='arrow-back-outline'
                        type='ionicon'
                        color='#3E356C'
                        size={40}
                        onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.styleiconmenu}>
                    <View>
                        <Text style={styles.textHead}>เปิดไพ่ทาโรต์</Text>
                        <Text style={styles.textSubhead}>เลือกคำทำนาย</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../img/opentarot/iconMenu.png')}
                            resizeMode="cover"
                            style={styles.iconmenu}
                        ></Image>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.RowMenu}>
                        <View style={styles.Box}>
                            <View style={styles.TarotMenu}>
                                <View style={styles.circlelogo}>
                                    <Image
                                        source={require('../img/opentarot/love.png')}
                                        resizeMode="cover"
                                        style={styles.logoStyles}
                                    ></Image>
                                </View>
                                <Text style={styles.TextUnderBox}>ความรัก</Text>
                                <Modal
                                    transparent={true}
                                    visible={showModal1}
                                    animationType="slide"
                                >
                                    <TouchableWithoutFeedback onPress={() => closeModal(1)}>
                                        <View style={styles.StyleViewModal}>
                                            <View style={styles.ModalTumnai}>
                                                <View style={{ flexDirection: 'row', paddingRight: 32, justifyContent: 'space-between' }}>
                                                    <View>
                                                        <Text style={{ fontSize: 28, fontFamily: 'Mitr-Medium', marginTop: 48, color: 'white', paddingLeft: 48 }}>{tarotText.head}</Text>
                                                        <Text style={{ fontSize: 20, fontFamily: 'Mitr-Regular', color: 'white', paddingLeft: 48, paddingBottom: 24 }}>เรื่องความรัก</Text>
                                                    </View>
                                                    <Image
                                                        source={require('../img/opentarot/love.png')}
                                                        resizeMode="cover"
                                                        style={styles.logoStylesModal}
                                                    ></Image>
                                                </View>
                                                <ScrollView>
                                                    {tarotImage &&
                                                        <Image
                                                            source={{ uri: tarotImage }}
                                                            style={styles.tarotImageStyle}
                                                        />
                                                    }
                                                    <Text style={{ fontSize: 16, fontFamily: 'Mitr-Light', marginTop: 24, marginBottom: 24, textAlign: 'center', color: 'white', paddingLeft: 48, paddingRight: 48 }}>
                                                        {tarotText.detail}
                                                    </Text>
                                                </ScrollView>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </Modal>
                                <TouchableOpacity
                                    style={styles.buttonBOX}
                                    onPress={() => handleTarotButtonPressLove('ความรัก')}
                                >
                                    <Image
                                        source={require('../img/opentarot/Enter-KAMTAMNAI.png')}
                                        resizeMode="cover"
                                        style={styles.buttonStyles}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.Box}>
                            <View style={styles.TarotMenu}>
                                <View style={styles.circlelogo}>
                                    <Image
                                        source={require('../img/opentarot/money.png')}
                                        resizeMode="cover"
                                        style={styles.logoStyles}
                                    ></Image>
                                </View>
                                <Text style={styles.TextUnderBox}>การเงิน</Text>
                                <Modal
                                    transparent={true}
                                    visible={showModal2}
                                    animationType="slide"
                                >
                                    <TouchableWithoutFeedback onPress={() => closeModal(2)}>
                                        <View style={styles.StyleViewModal}>
                                            <View style={styles.ModalTumnai}>
                                            <View style={{ flexDirection: 'row', paddingRight: 32, justifyContent: 'space-between' }}>
                                                    <View>
                                                        <Text style={{ fontSize: 28, fontFamily: 'Mitr-Medium', marginTop: 48, color: 'white', paddingLeft: 48 }}>{tarotText.head}</Text>
                                                        <Text style={{ fontSize: 20, fontFamily: 'Mitr-Regular', color: 'white', paddingLeft: 48, paddingBottom: 24 }}>เรื่องการเงิน</Text>
                                                    </View>
                                                    <Image
                                                        source={require('../img/opentarot/money.png')}
                                                        resizeMode="cover"
                                                        style={{ height: 110, width: 110, marginTop: 32 }}
                                                    ></Image>
                                                </View>
                                                <ScrollView>
                                                    {tarotImage &&
                                                        <Image
                                                            source={{ uri: tarotImage }}
                                                            style={styles.tarotImageStyle}
                                                        />
                                                    }
                                                    <Text style={{ fontSize: 16, fontFamily: 'Mitr-Light', marginTop: 24, marginBottom: 24, textAlign: 'center', color: 'white', paddingLeft: 48, paddingRight: 48 }}>
                                                        {tarotText.detail}
                                                    </Text>
                                                </ScrollView>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </Modal>
                                <TouchableOpacity
                                    style={styles.buttonBOX}
                                    onPress={() => handleTarotButtonPressMoney('การเงิน')}
                                >
                                    <Image
                                        source={require('../img/opentarot/Enter-KAMTAMNAI.png')}
                                        resizeMode="cover"
                                        style={styles.buttonStyles}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.RowMenu}>
                        <View style={styles.Box}>
                            <View style={styles.TarotMenu}>
                                <View style={styles.circlelogo}>
                                    <Image
                                        source={require('../img/opentarot/work.png')}
                                        resizeMode="cover"
                                        style={styles.logoStyles}
                                    ></Image>
                                </View>
                                <Text style={styles.TextUnderBox}>การงาน</Text>
                                <Modal
                                    transparent={true}
                                    visible={showModal3}
                                    animationType="slide"
                                >
                                    <TouchableWithoutFeedback onPress={() => closeModal(3)}>
                                        <View style={styles.StyleViewModal}>
                                            <View style={styles.ModalTumnai}>
                                            <View style={{ flexDirection: 'row', paddingRight: 32, justifyContent: 'space-between' }}>
                                                    <View>
                                                        <Text style={{ fontSize: 28, fontFamily: 'Mitr-Medium', marginTop: 48, color: 'white', paddingLeft: 48 }}>{tarotText.head}</Text>
                                                        <Text style={{ fontSize: 20, fontFamily: 'Mitr-Regular', color: 'white', paddingLeft: 48, paddingBottom: 24 }}>เรื่องการงาน</Text>
                                                    </View>
                                                    <Image
                                                        source={require('../img/opentarot/work.png')}
                                                        resizeMode="cover"
                                                        style={{ height: 100, width: 100, marginTop: 40 }}
                                                    ></Image>
                                                </View>
                                                <ScrollView>
                                                    {tarotImage &&
                                                        <Image
                                                            source={{ uri: tarotImage }}
                                                            style={styles.tarotImageStyle}
                                                        />
                                                    }
                                                    <Text style={{ fontSize: 16, fontFamily: 'Mitr-Light', marginTop: 24, marginBottom: 24, textAlign: 'center', color: 'white', paddingLeft: 48, paddingRight: 48 }}>
                                                        {tarotText.detail}
                                                    </Text>
                                                </ScrollView>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </Modal>
                                <TouchableOpacity
                                    style={styles.buttonBOX}
                                    onPress={() => handleTarotButtonPressWork('การงาน')}
                                >
                                    <Image
                                        source={require('../img/opentarot/Enter-KAMTAMNAI.png')}
                                        resizeMode="cover"
                                        style={styles.buttonStyles}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.Box}>
                            <View style={styles.TarotMenu}>
                                <View style={styles.circlelogo}>
                                    <Image
                                        source={require('../img/opentarot/lucky.png')}
                                        resizeMode="cover"
                                        style={styles.logoStyles}
                                    ></Image>
                                </View>
                                <Text style={styles.TextUnderBox}>โชคลาภ</Text>
                                <Modal
                                    transparent={true}
                                    visible={showModal4}
                                    animationType="slide"
                                >
                                    <TouchableWithoutFeedback onPress={() => closeModal(4)}>
                                        <View style={styles.StyleViewModal}>
                                            <View style={styles.ModalTumnai}>
                                            <View style={{ flexDirection: 'row', paddingRight: 32, justifyContent: 'space-between' }}>
                                                    <View>
                                                        <Text style={{ fontSize: 28, fontFamily: 'Mitr-Medium', marginTop: 48, color: 'white', paddingLeft: 48 }}>{tarotText.head}</Text>
                                                        <Text style={{ fontSize: 20, fontFamily: 'Mitr-Regular', color: 'white', paddingLeft: 48, paddingBottom: 24 }}>เรื่องโชคลาภ</Text>
                                                    </View>
                                                    <Image
                                                        source={require('../img/opentarot/lucky.png')}
                                                        resizeMode="cover"
                                                        style={{ height: 100, width: 100, marginTop: 40 }}
                                                    ></Image>
                                                </View>
                                                <ScrollView>
                                                    {tarotImage &&
                                                        <Image
                                                            source={{ uri: tarotImage }}
                                                            style={styles.tarotImageStyle}
                                                        />
                                                    }
                                                    <Text style={{ fontSize: 16, fontFamily: 'Mitr-Light', marginTop: 24, marginBottom: 24, textAlign: 'center', color: 'white', paddingLeft: 48, paddingRight: 48 }}>
                                                        {tarotText.detail}
                                                    </Text>
                                                </ScrollView>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </Modal>
                                <TouchableOpacity
                                    style={styles.buttonBOX}
                                    onPress={() => handleTarotButtonPressLucky('โชคลาภ')}
                                >
                                    <Image
                                        source={require('../img/opentarot/Enter-KAMTAMNAI.png')}
                                        resizeMode="cover"
                                        style={styles.buttonStyles}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.RowMenu}>
                        <View style={styles.Box}>
                            <View style={styles.TarotMenu}>
                                <View style={styles.circlelogo}>
                                    <Image
                                        source={require('../img/opentarot/study.png')}
                                        resizeMode="cover"
                                        style={styles.logoStyles}
                                    ></Image>
                                </View>
                                <Text style={styles.TextUnderBox}>การเรียน</Text>
                                <Modal
                                    transparent={true}
                                    visible={showModal5}
                                    animationType="slide"
                                >
                                    <TouchableWithoutFeedback onPress={() => closeModal(5)}>
                                        <View style={styles.StyleViewModal}>
                                            <View style={styles.ModalTumnai}>
                                            <View style={{ flexDirection: 'row', paddingRight: 32, justifyContent: 'space-between' }}>
                                                    <View>
                                                        <Text style={{ fontSize: 28, fontFamily: 'Mitr-Medium', marginTop: 48, color: 'white', paddingLeft: 48 }}>{tarotText.head}</Text>
                                                        <Text style={{ fontSize: 20, fontFamily: 'Mitr-Regular', color: 'white', paddingLeft: 48, paddingBottom: 24 }}>เรื่องการเรียน</Text>
                                                    </View>
                                                    <Image
                                                        source={require('../img/opentarot/study.png')}
                                                        resizeMode="cover"
                                                        style={{ height: 100, width: 100, marginTop: 40 }}
                                                    ></Image>
                                                </View>
                                                <ScrollView>
                                                    {tarotImage &&
                                                        <Image
                                                            source={{ uri: tarotImage }}
                                                            style={styles.tarotImageStyle}
                                                        />
                                                    }
                                                    <Text style={{ fontSize: 16, fontFamily: 'Mitr-Light', marginTop: 24, marginBottom: 24, textAlign: 'center', color: 'white', paddingLeft: 48, paddingRight: 48 }}>
                                                        {tarotText.detail}
                                                    </Text>
                                                </ScrollView>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </Modal>
                                <TouchableOpacity
                                    style={styles.buttonBOX}
                                    onPress={() => handleTarotButtonPressStudy('การเรียน')}
                                >
                                    <Image
                                        source={require('../img/opentarot/Enter-KAMTAMNAI.png')}
                                        resizeMode="cover"
                                        style={styles.buttonStyles}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.Box}>
                            <View style={styles.TarotMenu}>
                                <View style={styles.circlelogo}>
                                    <Image
                                        source={require('../img/opentarot/health.png')}
                                        resizeMode="cover"
                                        style={styles.logoStyles}
                                    ></Image>
                                </View>
                                <Text style={styles.TextUnderBox}>สุขภาพ</Text>
                                <Modal
                                    transparent={true}
                                    visible={showModal6}
                                    animationType="slide"
                                >
                                    <TouchableWithoutFeedback onPress={() => closeModal(6)}>
                                        <View style={styles.StyleViewModal}>
                                            <View style={styles.ModalTumnai}>
                                            <View style={{ flexDirection: 'row', paddingRight: 32, justifyContent: 'space-between' }}>
                                                    <View>
                                                        <Text style={{ fontSize: 28, fontFamily: 'Mitr-Medium', marginTop: 48, color: 'white', paddingLeft: 48 }}>{tarotText.head}</Text>
                                                        <Text style={{ fontSize: 20, fontFamily: 'Mitr-Regular', color: 'white', paddingLeft: 48, paddingBottom: 24 }}>เรื่องสุขภาพ</Text>
                                                    </View>
                                                    <Image
                                                        source={require('../img/opentarot/health.png')}
                                                        resizeMode="cover"
                                                        style={{ height: 100, width: 100, marginTop: 40 }}
                                                    ></Image>
                                                </View>
                                                <ScrollView>
                                                    {tarotImage &&
                                                        <Image
                                                            source={{ uri: tarotImage }}
                                                            style={styles.tarotImageStyle}
                                                        />
                                                    }
                                                    <Text style={{ fontSize: 16, fontFamily: 'Mitr-Light', marginTop: 24, marginBottom: 24, textAlign: 'center', color: 'white', paddingLeft: 48, paddingRight: 48 }}>
                                                        {tarotText.detail}
                                                    </Text>
                                                </ScrollView>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </Modal>
                                <TouchableOpacity
                                    style={styles.buttonBOX}
                                    onPress={() => handleTarotButtonPressHealth('สุขภาพ')}
                                >
                                    <Image
                                        source={require('../img/opentarot/Enter-KAMTAMNAI.png')}
                                        resizeMode="cover"
                                        style={styles.buttonStyles}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    containner: {
        flex: 1,
    },
    styleicon: {
        alignItems: 'flex-start',
        paddingLeft: 26,
        paddingTop: 48,
    },
    textHead: {
        fontFamily: 'Mitr-Medium',
        fontSize: 32,
        color: '#3E356C',
        // marginTop: 64,
        // marginLeft: 32,
    },
    textSubhead: {
        fontFamily: 'Mitr-Light',
        fontSize: 16,
        color: '#3E356C',
        marginTop: 4,
        // marginLeft: 32,
        // marginTop: -100,
    },
    TarotMenu: {
        height: 170,
        width: 165,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 15,
        // marginRight: 15,
    },
    RowMenu: {
        paddingLeft: 32,
        paddingRight: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24
    },
    TextUnderBox: {
        color: '#3E356C',
        fontFamily: 'Mitr-Regular',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
    Box: {
        justifyContent: 'center',
    },
    buttonBOX: {
        height: 30,
        width: 140,
        borderRadius: 5,
        backgroundColor: 'darkmagenta',
        alignSelf: 'center',
        marginTop: 4,
    },
    ModalTumnai: {
        flex: 0.85,
        // height: 500,
        // width: 380,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        backgroundColor: '#3E356C',
        // alignSelf: 'center',
    },
    StyleViewModal: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonStyles: {
        height: 30,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
    },
    logoStyles: {
        height: 90,
        width: 90,
    },
    circlelogo: {
        height: 90,
        width: 90,
        borderRadius: 50,
        backgroundColor: '#3E356C',
        alignSelf: 'center',
        // marginTop: 20,
    },
    iconmenu: {
        height: 100,
        width: 100,
        marginTop: -14,
        // marginLeft: 100,
    },
    styleiconmenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 24,
        paddingLeft: 32,
        paddingRight: 32,
        // flexWrap: 'wrap'
    },
    bg: {
        flex: 1,
    },
    logoStylesModal: {
        height: 100,
        width: 100,
        // marginLeft: 260,
        marginTop: 32,
    },
    tarotImageStyle: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
        // marginTop: 50,
    },
})