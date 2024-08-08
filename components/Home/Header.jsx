import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors';
import Feather from '@expo/vector-icons/Feather';

export default function Header() {
    const { user } = useUser();
    return (
        <View style={styles.header}>
            <View style={styles.userDetails}>
                <Image source={{ uri: user?.imageUrl }} style={styles.userImage}></Image>
                <View>
                    <Text style={styles.txtClr}>Welcome,</Text>
                    <Text style={[styles.name, styles.txtClr]}>{user?.fullName}</Text>
                </View>
            </View>
            <View style={styles.search}>
                <Feather name="search" size={24} color={Colors.PRIMARY} />
                <TextInput placeholder='Search...' style={{fontFamily :'outfit',fontSize : 16}}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search:{
        display : 'flex',
        flexDirection :'row',
        backgroundColor :'#fff',
        gap : 10,
        padding : 10,
        marginVertical : 10,
        marginTop : 15,
        borderRadius : 8,
        alignItems : 'center'

    },
    header: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
    },
    userDetails: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    },
    name: {
        fontSize: 19,
        fontFamily: 'outfit-medium'
    },
    txtClr: {
        color: '#fff'
    }
})