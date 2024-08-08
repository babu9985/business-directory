import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';
import {Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

export default function BusinessListCard({ business }) {
    if (business.length == 0) {
        return (
            <View>
                <Text>No data Found on this {business.category}</Text>
            </View>
        )
    }
    return (
        <View style={{ borderWidth: 1, margin: 10, borderRadius: 15, padding: 5, backgroundColor: '#fff'}}>
            <View style={{ display: 'flex', flexDirection: 'row',gap :10 , alignItems :'center'}}>
                <View>
                    <Image source={{ uri: business.imageUrl }}  style={styles.imageurl}></Image>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.bname}>{business.name}</Text>
                    <Text style={styles.baddress}>{business.address}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row',gap :20, alignItems: 'center' }}>
                        <View style={styles.imgrating}>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://as2.ftcdn.net/v2/jpg/02/45/35/95/1000_F_245359518_6UOONVnkF64iYTML5HLkTqhBSvpHEWyA.jpg' }}></Image>
                            <Text style={{ fontSize: 14 }}>4.5</Text>
                        </View>
                        <Text style={{ fontFamily: 'outfit', fontSize: 14, backgroundColor: Colors.PRIMARY, paddingHorizontal: 10, borderRadius: 12, color: '#fff' }}>{business.category}</Text>
                    </View>
                    <Text style={{color :Colors.PRIMARY,textDecorationLine:'underline'}}>{business.website}</Text>
                    {/* <Text style={{color :Colors.PRIMARY,textDecorationLine:'underline'}}>{business.about}</Text> */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageurl: {
        width: width * .4,
        borderRadius: 15,
        aspectRatio : 1,
        resizeMode :'contain'
    },
    bname: {
        fontSize: 20,
        fontFamily: 'outfit-bold'
    },
    baddress: {
        fontSize: 16,
        fontFamily: 'outfit',
        color: Colors.GREY
    },
    imgrating: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
})