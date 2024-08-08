import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

export default function MenuList() {
    const router = useRouter();
    const menuList = [
        {
            id: 1,
            name: 'Add Business',
            icon: require('../../assets/images/add.png'),
            path :'/business/AddBusiness'
        },
        {
            id: 2,
            name: 'My Business',
            icon: require('../../assets/images/business-and-trade.png')
        },
        {
            id: 3,
            name: 'Share Business',
            icon: require('../../assets/images/share_1.png')
        },
        {
            id: 4,
            name: 'Logout',
            icon: require('../../assets/images/logout.png')
        },
    ];

    const onMenuClick = (item)=>{
        router.push(item?.path)
    }
    return (
        <View style={{ marginTop: 50 }}>
            <FlatList data={menuList} numColumns={2} renderItem={({ item }) => (
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, flex: 1, borderWidth: 1, padding: 10, borderRadius: 12, margin: 10, backgroundColor: '#fff', borderColor: Colors.PRIMARY }}
                onPress={()=>onMenuClick(item)}
                >
                    <Image source={item.icon} style={{ width: 50, height: 50 }}></Image>
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: 20 ,flex:1}}>{item.name}</Text>
                </TouchableOpacity>
            )}></FlatList>
            <View style={{ marginTop: 100, textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <Text style={{ fontFamily: 'outfit', fontSize: 12, color: Colors.GREY }}>Developed by</Text>
                <Text style={{ fontFamily: 'outfit', fontSize: 12, color: Colors.PRIMARY }}>Ganesh Babu</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})