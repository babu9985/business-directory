import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseCongif';
import BusinessListCard from '../../components/BusinessList/BusinessListCard';

export default function BusinessListByCategory() {

    const navigation = useNavigation();
    const { category } = useLocalSearchParams();
    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        getBusinessList();
    }, [category])

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: category
        })
    }, []);

    const getBusinessList = async () => {
        setBusinessList([])
        const que = query(collection(db, 'business-list'), where("category", "==", category));
        const queryResponse = await getDocs(que);
        queryResponse.forEach((data) => {            
            setBusinessList((prev) => [...prev, data.data()])
        })

    }

    return (
        <View >
            <FlatList data={businessList} renderItem={({item,index})=>(
                <BusinessListCard business={item} key={index}></BusinessListCard>
            )}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({})