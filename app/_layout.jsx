import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import LoginScreen from '../components/LoginScreen';
import * as SecureStore from 'expo-secure-store';

const tokenCache = {
  async saveToken(key, value) {
    let result = await SecureStore.setItemAsync(key, value);
    return result;
  },

  async getToken(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      // alert("🔐 Here's your value 🔐 \n" + result);
      return result
    } else {
      // alert('No values stored under that key.');
      return null;
    }
  }
}

export default function RootLayout() {
  useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
  })
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>      
      <SignedIn>
        <Stack screenOptions={{ headerShown: false }} >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen></LoginScreen>
      </SignedOut>
    </ClerkProvider>

  );
}
