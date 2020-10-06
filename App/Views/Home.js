import React from "react"
import {ImageBackground, StyleSheet, Text, View} from "react-native"

export default function Home({navigation}){
    const imageOne = require('../Assets/Newin_man.jpg')
    const imageTwo = require('../Assets/Newin_man2.jpg')
    return(
        <View>
            <View style={styles.viewimagen}>
                <ImageBackground source={imageOne} style={styles.imagen}/>
                <ImageBackground source={imageTwo} style={styles.imagen}/>
            </View>

            <Text style={styles.button}onPress={() => navigation.navigate('Products')}>Shop Now</Text>
            
        </View>
    )
} 
const styles = StyleSheet.create({
    viewimagen:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
        },
    imagen:{
        height: 350,
        width:190,
        marginLeft:5,
        marginRight:5,
        marginTop:40, 
    },
    button:{
        textAlign:"center",
        marginTop:60,
        borderColor:"black",
        borderWidth:2,
        marginRight:140,
        marginLeft:140,
        paddingTop:10,
        paddingBottom:10,
        fontWeight:"bold",
        fontSize:25
    }
})