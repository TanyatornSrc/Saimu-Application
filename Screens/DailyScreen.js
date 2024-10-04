import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const DailyScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [horoscopeText, setHoroscopeText] = useState('');
    const [selectedHoroscope, setSelectedHoroscope] = useState('');
    const [statusColor, setStatusColor] = useState('');
    const navigation = useNavigation();

    const handlePrayerButtonPress = (day) => {
        fetchHoroscope(day);
        setSelectedHoroscope(day);
        setStatusColor(getColorForDay(day));
        showModal();
    };

    useEffect(() => {
        fetchHoroscope(); // เรียกใช้ฟังก์ชันเมื่อคอมโพเนนต์โหลด
    }, []);

    const fetchHoroscope = (day) => {
        const apiUrl = `http://10.0.2.2:5000/api/horoscope/${day}`;

        fetch(apiUrl)
            .then(response => response.json()) // json to js
            .then(data => {
                // เช็คว่ามีข้อมูลที่ต้องการหรือไม่ และตั้งค่า prayerText ตามผลลัพธ์
                if (data && data.horoscope) {
                    setHoroscopeText(data.horoscope);
                }
            })
            .catch(error => console.error('Error fetching horoscope text:', error));
    };

    const getColorForDay = (day) => {
        switch (day) {
            case 'วันอาทิตย์':
                return '#F26257';
            case 'วันจันทร์':
                return '#F9B44F';
            case 'วันอังคาร':
                return '#F27DAB';
            case 'วันพุธ':
                return '#67C085';
            case 'วันพฤหัสบดี':
                return '#F68B4A';
            case 'วันศุกร์':
                return '#6BB6E5';
            case 'วันเสาร์':
                return '#A575B3';
            default:
                return '#FFFFFF';
        }
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        // <Animated.View style={{ opacity: backgroundOpacity }}>
        <ImageBackground source={require('../img/bg.png')} style={styles.background}>
            {/* Header title ---------------------------------------------------------- */}
            <View style={styles.styleicon}>
                <Icon
                    name='arrow-back-outline'
                    type='ionicon'
                    color='#3E356C'
                    size={40}
                    onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.container_1}>
                <View>
                    <Text style={styles.title_1}>ดูดวงประจำวัน</Text>
                    <Text style={styles.title_2}>เลือกตามวันเกิด</Text>
                </View>
                <View>
                    <Image source={require('../img/ดูดวง.png')}
                        style={{ width: 80, height: 80 }} />
                </View>
            </View>
            {/* ----------------------------------------------------------------------- */}
            <ScrollView style={{ paddingBottom: 24, }}>
                {/* Sunday, Monday -------------------------------------------------------- */}
                <View style={styles.container_2}>
                    <View style={styles.day}>
                        <Image source={require('../img/icon-day/อา-01.png')}
                            style={{ width: 106, height: 80, }} />
                        <Text style={styles.text}>วันอาทิตย์</Text>
                        <TouchableOpacity onPress={() => handlePrayerButtonPress('วันอาทิตย์')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../img/button/6.png')}
                                    style={styles.button} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.day}>
                        <Image source={require('../img/icon-day/จ-01.png')}
                            style={{ width: 106, height: 80, }} />
                        <Text style={styles.text}>วันจันทร์</Text>
                        <TouchableOpacity onPress={() => handlePrayerButtonPress('วันจันทร์')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../img/button/6.png')}
                                    style={styles.button} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Tuesday, Wednesday ---------------------------------------------------- */}
                <View style={styles.container_3}>
                    <View style={styles.day}>
                        <Image source={require('../img/icon-day/อ-01.png')}
                            style={{ width: 106, height: 80, }} />
                        <Text style={styles.text}>วันอังคาร</Text>
                        <TouchableOpacity onPress={() => handlePrayerButtonPress('วันอังคาร')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../img/button/6.png')}
                                    style={styles.button} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.day}>
                        <Image source={require('../img/icon-day/พ-01.png')}
                            style={{ width: 106, height: 80, }} />
                        <Text style={styles.text}>วันพุธ</Text>
                        <TouchableOpacity onPress={() => handlePrayerButtonPress('วันพุธ')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../img/button/6.png')}
                                    style={styles.button} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Thursday, Friday ------------------------------------------------------ */}
                <View style={styles.container_4}>
                    <View style={styles.day}>
                        <Image source={require('../img/icon-day/พฤ-01.png')}
                            style={{ width: 106, height: 80, }} />
                        <Text style={styles.text}>วันพฤหัสบดี</Text>
                        <TouchableOpacity onPress={() => handlePrayerButtonPress('วันพฤหัสบดี')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../img/button/6.png')}
                                    style={styles.button} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.day}>
                        <Image source={require('../img/icon-day/ศ-01.png')}
                            style={{ width: 106, height: 80, }} />
                        <Text style={styles.text}>วันศุกร์</Text>
                        <TouchableOpacity onPress={() => handlePrayerButtonPress('วันศุกร์')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../img/button/6.png')}
                                    style={styles.button} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Saturday -------------------------------------------------------------- */}
                <View style={styles.container_5}>
                    <View style={styles.day}>
                        <Image source={require('../img/icon-day/ส-01.png')}
                            style={{ width: 106, height: 80, }} />
                        <Text style={styles.text}>วันเสาร์</Text>
                        <TouchableOpacity onPress={() => handlePrayerButtonPress('วันเสาร์')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../img/button/6.png')}
                                    style={styles.button} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* ----------------------------------------------------------------------- */}
            </ScrollView>
            {/* Pop up ---------------------------------------------------------------- */}
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
            >
                <TouchableWithoutFeedback onPress={hideModal}>
                    <View style={styles.ModalContainer}>
                        <View style={styles.ModalView}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={styles.detaildayHead}>ดูดวงคนเกิด</Text>
                                <Text style={[styles.detaildayHead, { color: getColorForDay(selectedHoroscope) }]}>
                                    {selectedHoroscope}</Text>
                            </View>
                            <ScrollView>
                                <View style={styles.detailContainer}>
                                    <Text style={styles.detailday}>{horoscopeText}</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            {/* ----------------------------------------------------------------------- */}
        </ImageBackground >
        // </Animated.View>
    )
}

export default DailyScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    styleicon: {
        alignItems: 'flex-start',
        paddingLeft: 28,
        paddingTop: 48,
    },
    container_1: {
        // paddingTop: 8,
        paddingBottom: 24,
        paddingLeft: 32,
        paddingRight: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title_1: {
        fontSize: 32,
        color: '#3E356C',
        fontFamily: 'Mitr-Medium',
    },
    title_2: {
        fontSize: 16,
        color: '#3E356C',
        fontFamily: 'Mitr-Light',
        paddingTop: 4,
    },
    container_2: {
        paddingLeft: 32,
        paddingRight: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    day: {
        width: 165,
        height: 170,
        backgroundColor: '#ffff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        color: '#3E356C',
        fontFamily: 'Mitr-Regular',
        textAlign: 'center',
        marginTop: 4,
    },
    button: {
        width: 140,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
    },
    container_3: {
        paddingTop: 24,
        paddingLeft: 32,
        paddingRight: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container_4: {
        paddingTop: 24,
        paddingLeft: 32,
        paddingRight: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container_5: {
        paddingTop: 24,
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 24,
    },
    ModalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    ModalView: {
        flex: 0.65,
        backgroundColor: '#3E356C',
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70
    },
    detaildayHead: {
        fontSize: 32,
        color: '#ffff',
        fontFamily: 'Mitr-Medium',
        textAlign: 'center',
        marginTop: 48,
    },
    detailContainer: {
        // backgroundColor: 'yellow',
        flex: 1,
        paddingLeft: 48,
        paddingRight: 48,
    },
    detailday: {
        fontSize: 18,
        color: '#ffff',
        fontFamily: 'Mitr-Light',
        marginTop: 18,
        // textAlign: 'center'
    }

})