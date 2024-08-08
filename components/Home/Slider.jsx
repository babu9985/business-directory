import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../config/FirebaseCongif';
import { useEffect } from 'react';

export default function Slider() {

    const [sliderList, setSliderList] = useState([])

    useEffect(() => {
        getSliderData();
    }, [])

    const getSliderData = async () => {
        setSliderList([])
        const que = query(collection(db, 'slider')); // 'slider' is Collection name in firebase Database
        const queryResponse = await getDocs(que);

        queryResponse.forEach(element => {
            setSliderList((prev) => [...prev, element.data()])
        });
    }
    
    return (
        <View>
            <Text style={styles.txt}>#Special for you</Text>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} style={styles.flatContainer} data={sliderList} renderItem={({ item, index }) => (
                <Image style={styles.imageUrl} source={{ uri: item.imageUrl }}></Image>
            )}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 20,
        fontFamily: 'outfit-bold',
        marginBottom : 5
    },
    imageUrl: {
        width: 300,
        height: 160,
        borderRadius : 19,
        marginRight : 12
    },
    flatContainer:{
        paddingLeft : 15
    },
})