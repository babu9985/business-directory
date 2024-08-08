import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CatList({ category , onPressCategory}) {
    return (
        <TouchableOpacity onPress={()=>onPressCategory(category)}>
            <View>
                <View style={styles.catContainer}>
                    <Image style={styles.icon} source={{ uri: category.icon }}></Image>
                </View>
                <Text style={styles.txt}>{category.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    catContainer: {
        padding: 20,
        borderRadius: 99,
        marginRight: 15,
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: 10
    },
    txt: {
        fontSize: 12,
        fontFamily: 'outfit-medium',
        textAlign: 'center',
        marginTop: 5
    },
})

