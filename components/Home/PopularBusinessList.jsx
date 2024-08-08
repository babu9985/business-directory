import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../config/FirebaseCongif'
import PopularBusinesCard from './PopularBusinesCard';

export default function PopularBusinessList() {

    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        getBusinessList();
    }, [])
    const getBusinessList = async () => {
        setBusinessList([])
        const que = query(collection(db, 'business-list'),limit(10));
        const queryResponse = await getDocs(que);
        queryResponse.forEach((data) => {
            setBusinessList((prev) => [...prev, data.data()])
        })
    }
    return (
        <View>
            <Text style={styles.txt}>Popular Business</Text>
            <FlatList horizontal={true} data={businessList} renderItem={({item,index})=>(
                <PopularBusinesCard business={item} key={index}></PopularBusinesCard>
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
        marginBottom: 5
    },
})