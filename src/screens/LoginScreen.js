import React, { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, Dimensions, Image, TextInput } from "react-native";
import { LOGO, COLOR_CODE } from "../constants/AppConstant"
import CheckBox from '@react-native-community/checkbox';
import styles from "../assets/css/LoginCss";
const LoginScreen = (props) => {
    const navigation = props.navigation;
    const { height, width } = Dimensions.get('screen');
    const [remember, setRemember] = useState(true);
    return (
        <View style={styles.mainContainer}>
            <Image
                style={styles.logo}
                source={LOGO}
            />
            <TextInput
                placeholder="Email"
                style={styles.inpup}
            />
            <TextInput
                placeholder="Email"
                style={styles.inpup}
            />
            <Pressable
                style={styles.loginBtn}
                onPress={() => console.log('login')}
            >
                <Text style={styles.loginBtnText}>Login</Text>
            </Pressable>
            <View style={styles.checkRow}>
                <View style={styles.checkBoxView}>
                    <CheckBox
                        disabled={false}
                        value={remember}
                        tintColors={{ true: COLOR_CODE.DARK_RED, false: '#000' }}
                        onValueChange={(newValue) => setRemember(newValue)}
                    />
                    <Text style={styles.checkBoxText}>Remember me</Text>
                </View>
                <Pressable
                    style={styles.forgotView}
                    onPress={() => console.log('login')}
                >
                    <Text style={styles.forgotTxt}>Forgot Password</Text>
                </Pressable>
            </View>
            <Pressable
                style={styles.registerView}
                onPress={()=> navigation.navigate("LoginScreen")}//navigation.navigate('LoginScreen')
            >
                <Text style={styles.registerText}>Don't have account Register here!</Text>
            </Pressable>

        </View>
    )
}
export default LoginScreen;