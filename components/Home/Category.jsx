import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../config/FirebaseCongif';
import CatList from './CatList';
import { useRouter } from 'expo-router';


export default function Category() {

    const [categoryData, setCategoryData] = useState([]);

    const router = useRouter();

    useEffect(() => {
        getCategoriesdata();
    }, [])

    const getCategoriesdata = async () => {
        setCategoryData([]);
        const que = query(collection(db, 'category'));
        const queryResponse = await getDocs(que);
        queryResponse.forEach((data,index) => {
            setCategoryData((prev) => [...prev, data.data()])
        })
    }

    return (
        <View>
            <View style={styles.textDetails}>
                <Text style={styles.txt}>Category</Text>
                <Text style={styles.subtxt}>View all</Text>
            </View>
            <FlatList style={{marginLeft : 20}} horizontal={true} showsHorizontalScrollIndicator={false} data={categoryData} renderItem={({ item }) => (
                <CatList category={item} key={item.id} onPressCategory={(value)=> router.push('/businessList/'+item.name)
                }></CatList>
            )}>
            </FlatList>
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
    subtxt: {
        marginTop: 10,
        color: Colors.PRIMARY,
        fontFamily: 'outfit-medium'
    },
    textDetails: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },

})