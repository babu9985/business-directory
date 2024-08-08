import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function PopularBusinesCard({ business }) {
    return (
        <View>
            <View style={styles.businessContainer}>
                <Image source={{ uri: business.imageUrl }} style={styles.image}></Image>
                <View>
                    <Text style={styles.bname}>{business.name}</Text>
                    <Text style={styles.baddress}>{business.address}</Text>
                    <View style={{display :'flex',flexDirection : 'row', justifyContent :'space-between',alignItems :'center'}}>
                        <View style={styles.imgrating}>
                            <Image style={{ width: 25, height: 25 }} source={{ uri: 'https://as2.ftcdn.net/v2/jpg/02/45/35/95/1000_F_245359518_6UOONVnkF64iYTML5HLkTqhBSvpHEWyA.jpg' }}></Image>
                            <Text style={{}}>4.5</Text>
                        </View>
                            <Text style={{fontFamily:'outfit',fontSize : 14,backgroundColor : Colors.PRIMARY,paddingHorizontal:10,borderRadius:12,color:'#fff'}}>{business.category}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 130,
        objectFit :'contain'
    },
    businessContainer: {
        marginLeft: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom : 10
    },
    bname: {
        fontSize: 17,
        fontFamily: 'outfit-bold'
    },
    baddress: {
        fontSize: 13,
        fontFamily: 'outfit',
        color: Colors.GREY
    },
    imgrating: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    }
})