import React, { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, Dimensions, Image, TextInput } from "react-native";
import { LOGO, COLOR_CODE } from "../constants/AppConstant"
import CheckBox from '@react-native-community/checkbox';
import styles from "../assets/css/RegisterCss";

const RegisterScreen = () => {
    const { height, width } = Dimensions.get('screen');
    const [remember, setRemember] = useState(true);
    return (
        <View style={styles.mainContainer}>
            <Image
                style={styles.logo}
                source={LOGO}
            />
            <TextInput
                placeholder="Full Name"
                style={styles.inpup}
            />
            <TextInput
                placeholder="Email"
                style={styles.inpup}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.inpup}
            />
            <Pressable
                style={styles.loginBtn}
                onPress={() => console.log('login')}
            >
                <Text style={styles.loginBtnText}>Register</Text>
            </Pressable>
            
            <Pressable
                style={styles.registerView}
                onPress={() => console.log('login')}
            >
                <Text style={styles.registerText}>Don't have account Register here!</Text>
            </Pressable>

        </View>
    )
}
export default RegisterScreen;