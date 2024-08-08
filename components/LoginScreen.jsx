
import { Colors } from '@/constants/Colors'
import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser'
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo'

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen()  {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  return (
    <View>
      <View style={styles.imageView}>
        <Image source={require('../assets/images/login.png')} style={styles.image}></Image>
      </View>
      <View style={{ backgroundColor: '#fff', padding: 20, marginTop: -20 }}>
        <Text style={{ fontSize: 30, fontFamily: 'outfit-bold', textAlign: 'center' }}>Your Ultimate <Text style={{ color: Colors.PRIMARY }}>Community Business Directory</Text></Text>
        <Text style={styles.communityText}>find your business near you and post your own business to our community</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'outfit', fontSize: 15 }}>Let's Get Started</Text>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 450,
    borderWidth: 6,
    borderRadius: 20,
    borderColor: '#000'
  },
  imageView: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 100
  },
  communityText: {
    fontSize: 15,
    fontFamily: 'outfit',
    textAlign: 'center',
    color: Colors.GREY,
    marginVertical: 15
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 99,
    marginTop: -20
  }
})

