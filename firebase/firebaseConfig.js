import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcNgtFa2UwBe5YHcfIZwVo_k2q92hYP5o",
  authDomain: "fakestore-c724b.firebaseapp.com",
  projectId: "fakestore-c724b",
  storageBucket: "fakestore-c724b.firebasestorage.app",
  messagingSenderId: "258798406176",
  appId: "1:258798406176:web:bd4cbe90a282096dd80a45",
  measurementId: "G-ERE5KQTEEY"
};

const app = initializeApp(firebaseConfig);

let auth;

if (Platform.OS === "web") {
  // ✔️ Web usa getAuth sin persistencia
  auth = getAuth(app);
} else {
  // ✔️ Móvil usa initializeAuth con AsyncStorage
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { auth };
export default app;
