import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    formContext: {
        
        /* flex :1,
        width:"100%",
        height:"100%", */ 
        /* bottom:0,
        backgroundColor:"#ffffff",
        alignItems:"center",
        /* marginTop:10, */
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:30,
        /* justifyContent:"space-around", */
        
    },
    form:{
        width:"100%",
        
       /*  marginTop: 30,
        padding:30, */


    },
    formLabel:{
        color:"#000000",
        fontSize:13,
        paddingLeft:10,
    },
    formInput:{
        width: "90%",
        borderRadius: 50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:10,
        paddingLeft:10,
    },
    formButtom:{
        fontSize:20,
        color:"#ffffff",

    },
    formCalc:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:10,
        margin:30,
    },

    errorMsg:{
        fontSize:16,
        fontWeight:"bold",
        color:"red",
        paddingLeft:20,
    },
    exibitionResultImc:{
        width:"100%",
        height:"50%",


    },
    ListIMC:{
        marginTop:10,
        

    },
    resultImcItem:{
        fontSize:26,
        color:"red",
        height:50,
        width:"100%",
        paddingLeft:60,
        alignItems:"center",
        
    },
    textResultItemList:{
        color:"red",
        fontSize:16,
        paddingRight:20,
    },
    

    
});

export default styles