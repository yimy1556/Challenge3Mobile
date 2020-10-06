import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {Overlay, Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import ItemCarrito from './ItemCarrito';
import {getValue} from '../Constants/FuncAsyncStorage'
import { ScrollView } from 'react-native-gesture-handler';

export default function Carrito(){
    const [visible, setVisible] = useState(false);
    const [update, setUpdate] = useState(true)
    
    const toggleOverlay = () => {
        setUpdate(!update)
        setVisible(!visible);
    };
 
    const [listProduct, setListProduct ] = useState([])
    useEffect(() => {
        getValue('cart',true)
        .then(products => {
            setListProduct(products)
        })
    },[update])

    return (<>
        <View >
            <MaterialCommunityIcons style={styles.cart} onPress={toggleOverlay} name="cart-outline" size={35} color="black" />
            <Overlay  isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{height:'67%'}}>
                <View style={styles.ropaDelCarrito}>
                    <ScrollView alignSelf='center' style={{marginTop:5, height:'50%'}}>
                       {listProduct?.map((prod,index) => <ItemCarrito product={prod} key={index} update={update} setUpdate={setUpdate}/>)}
                    </ScrollView >
                    <View style={styles.totalPrecio}>
                        <Text style={styles.Textprecio}>Total</Text>
                        <Text style={styles.Textprecio}>$120</Text>
                    </View>
                    <Text style={styles.butButton}>Buy</Text>
                </View>
          </Overlay>
       </View>
    </>);
}

const styles = StyleSheet.create({
    cart:{
        position: 'absolute', 
        right:   10,
        bottom: 690,
   },
    ropaDelCarrito:{
        backgroundColor:'#F3F7F8',
        height: '100%',
        width: 300,
        borderRadius:15,
        alignSelf:'center',
   },
   totalPrecio:{
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-between",
       marginRight:30,
       marginLeft:30,
       marginTop:15,
       marginBottom: 15,
   },
   Textprecio:{
       color:"black",
       fontWeight: "bold",
       fontSize:20

   },
   butButton:{
        color:"black",
        textAlign:"center",
        fontWeight:"bold",
        backgroundColor: "white",
        borderRadius:5,
        marginRight:100,
        marginLeft:100,
        marginBottom:5,
        paddingTop:4,
        paddingBottom:4,
        marginTop: 5
   }
})

