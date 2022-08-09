import { Dimensions, StyleSheet } from "react-native";
import { LOGO, COLOR_CODE } from "../../constants/AppConstant"
const { height, width }=Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer:{ 
        height: height, 
        width: width, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:'#fff',
        position:'relative',
        flex:1 
    },
    logo:{ 
        height: width * 0.4, 
        width: width * 0.45, 
        marginBottom: height * 0.05 
    },
    inpup:{
        width:width-40,
        borderWidth:0.5,
        borderColor:'#aaa',
        borderRadius:10,
        paddingLeft:5, 
        marginBottom:height*0.03
    },
    checkRow:{ 
        width: width - 40, 
        flexDirection: 'row' 
    },
    checkBoxView:{ 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    checkBoxText:{ 
        color: COLOR_CODE.DARK_RED, 
        alignSelf: 'center', 
        fontFamily: 'PTSans-Bold' 
    },
    forgotView:{ 
        flex: 1, 
        borderRadius: 10, 
        paddingVertical: 10, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    forgotTxt:{ 
        color: 
        COLOR_CODE.DARK_RED, 
        alignSelf: 'flex-end', 
        fontFamily: 'PTSans-Bold' 
    },
    loginBtn:{
        backgroundColor:COLOR_CODE.DARK_RED,
        width:width-40,borderRadius:10,
        paddingVertical:15,
        justifyContent:'center',
        alignItems:'center'
    },
    loginBtnText:{
        color:'#fff',
        fontFamily: 'PTSans-Bold'
    },
    registerView:{ 
        width: width - 40, 
        borderRadius: 10, 
        paddingVertical: 10, 
        justifyContent: 'center', 
        alignItems: 'center',
        position:'absolute',
        bottom:height*0.01 
    },
    registerText:{ 
        color: COLOR_CODE.DARK_RED, 
        alignSelf: 'center', 
        fontFamily: 'PTSans-Bold' 
    }
})

