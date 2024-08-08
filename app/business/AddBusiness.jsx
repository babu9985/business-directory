import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'
import { useEffect } from 'react';
import { Colors } from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import { db, storage } from '../../config/FirebaseCongif';
import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useUser } from '@clerk/clerk-expo';

export default function AddBusiness() {

    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const [categoryData, setCategoryData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [businessDetails, setBusinessDetails] = useState({
        name: '',
        address: '',
        email: '',
        website: '',
        contact: '',
        about: '',
        category: '',
    });
    const { user } = useUser()
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: 'Add New Business'
        })
    }, []);

    useEffect(() => {
        getCategoriesdata();
    }, [])

    const getCategoriesdata = async () => {
        setCategoryData([]);
        const que = query(collection(db, 'category'));
        const queryResponse = await getDocs(que);
        queryResponse.forEach((data, index) => {
            setCategoryData((prev) => [...prev, {
                label: (data.data()).name,
                value: (data.data()).name
            }])
        })
    };

    const onhandleChange = (key, value) => {
        const newUser = user;
        newUser[key] = value;
        setBusinessDetails(newUser);
    }

    const onImageclick = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    const onAddNewBusiness = async () => {
        setLoading(true);
        const fileName = Date.now().toString() + "jpg";
        const resp = await fetch(image);
        const blob = await resp.blob();

        const imageRef = ref(storage, `business-react-app-image/${fileName}`);
        uploadBytes(imageRef, blob).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        }).then((response) => {
            getDownloadURL(imageRef).then(async (url) => {
                console.log(url);
                saveUserData(url)
            })
        })
    }

    const saveUserData = async (imageUrl) => {
        await setDoc(doc(db, 'business-list', Date.now().toString()), {
            name: businessDetails.name,
            address: businessDetails.address,
            email: businessDetails.email,
            website: businessDetails.website,
            contact: businessDetails.contact,
            about: businessDetails.about,
            category: businessDetails.category,
            imageUrl: imageUrl,
            userName: user?.fullName
        });
        setLoading(false);
        ToastAndroid.show("New Business Added...", ToastAndroid.LONG);
        setBusinessDetails({})
    }
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 25 }}>AddBusiness</Text>
            <Text style={{ fontFamily: 'outfit', color: Colors.GREY }}>Fill all the details in order to add new business</Text>
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
                <TouchableOpacity style={{ marginTop: 20 }} onPress={() => onImageclick()}>
                    {!image ? <Image source={require('../../assets/images/placeholder.png')} style={{ width: 100, height: 100 }}></Image> :
                        <Image source={{ uri: image }} style={{ width: 100, height: 100 }}></Image>}
                </TouchableOpacity>
                <View>
                    <TextInput onChangeText={(value) => { onhandleChange('name', value) }} placeholder='Name' style={styles.inputField}></TextInput>
                    <TextInput onChangeText={(value) => { onhandleChange('address', value) }} placeholder='Address' style={styles.inputField}></TextInput>
                    <TextInput onChangeText={(value) => { onhandleChange('contact', value) }} placeholder='Contact' style={styles.inputField}></TextInput>
                    <TextInput onChangeText={(value) => { onhandleChange('email', value) }} placeholder='Email' style={styles.inputField}></TextInput>
                    <TextInput onChangeText={(value) => { onhandleChange('website', value) }} placeholder='Website' style={styles.inputField}></TextInput>
                    <TextInput onChangeText={(value) => { onhandleChange('about', value) }} placeholder='About' multiline={true} numberOfLines={5} style={[styles.inputField, styles.about]}></TextInput>
                    <View style={[styles.inputField, styles.picker]}>
                        <RNPickerSelect
                            onValueChange={(value) => onhandleChange('category', value ? value : '')}
                            items={categoryData}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => onAddNewBusiness()} style={{ backgroundColor: Colors.PRIMARY, padding: 15, borderRadius: 15, marginTop: 20 }}>
                            {loading ? <ActivityIndicator size={'large'} color={Colors.PRIMARY}></ActivityIndicator> : <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'outfit', fontSize: 15 }}>Add New Bussiness</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    inputField: {
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 10,
        fontSize: 17,
        fontFamily: 'outfit',
        // elevation: 1,
    },
    about: {
        height: 100
    },
    picker: {
        padding: 1
    }
})