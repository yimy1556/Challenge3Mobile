import {StyleSheet, Text, View, Button, TextInput} from "react-native"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import {API} from '../Constants/index'
import axios from 'axios'
import RNPickerSelect from 'react-native-picker-select';
import Picker from "react-native-picker-select";


export default function adress(){

    const [paises, setpaises] = React.useState([])
    console.log("chauee",paises) 


    useEffect(async() => {
        const respuestaIt = await axios.get(`https://restcountries.eu/rest/v2/all`);
        const infoIt = respuestaIt.data
        setpaises(infoIt)
      });


      const [country, setcountry] = React.useState("")
      const [city, setcity] = React.useState("")
      const [adress, setadress] = React.useState("")
      const [postalCode, setpostalCode] = React.useState("")
      const [phoneNumber, setphoneNumber] = React.useState("")
      const [token, settoken] = React.useState("22")

     
     const sendContact = async () => {

        await axios.post(`${API}/user/direction`, { country, city, adress, postalCode, phoneNumber, token })
        // await this.props.getContact(this.props.userlogged.token)
        alert("Your information was sent")
     }


    return(
            <View>
                <View>
                    <Text>Contact information</Text>
                    <View>
                        <Text>Country:</Text>
                        <Text>City:</Text>
                        <Text>Address:</Text>
                        <Text>Postal code:</Text>
                        <Text>Phone number:</Text>
                    </View>               
                </View>

                <View>
                    <Text>Add your contact information</Text>
                    <View>
                            <TextInput
                            style={styles.TextInput}
                            placeholder="Write your city here"
                            placeholderTextColor="#ffffffa9" 
                            onChangeText={(val) => setcity(val)}
                        />                 
                        
                            <TextInput
                            style={styles.TextInput}
                            placeholder="Write your address here"
                            placeholderTextColor="#ffffffa9" 
                            onChangeText={(val) => setadress(val)}
                        />               
                        
                     </View>
                     <View>
                        <TextInput
                                style={styles.TextInput}
                                placeholder="Write your postalCode here"
                                placeholderTextColor="#ffffffa9" 
                                onChangeText={(val) => setpostalCode(val)}
                            />                 
                            
                                <TextInput
                                style={styles.TextInput}
                                placeholder="Write your phoneNumber here"
                                placeholderTextColor="#ffffffa9" 
                                onChangeText={(val) => setphoneNumber(val)}
                            />     
                     </View>

                       {/* <View>
                            <Picker
                                onValueChange={(val) =>  setcountry(val)}
                                iosHeader="Select one"
                                mode="dropdown"
                                >
                                {paises.map(pais => <Item label={pais.name} value={pais.name} key={pais.name}/>)}
                                   
                            </Picker>
                        </View> */ } 
                        <Text onPress={sendContact}>Send information</Text>
                 </View>
            </View>
    )
} 

const styles = StyleSheet.create({
    TextInput:{
        width:  290,
        height: 40,
        paddingLeft:10,
        borderRadius: 7,
        marginTop:  10,
        backgroundColor: "#999999",
       },

})

