import React, { useState } from 'react';
import {View, Text, CheckBox, ImageBackground, Button, StyleSheet, TextInput} from 'react-native';
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import {API} from '../Constants/index'


    const  LogInt = ({navigation}) => {
    const [mail, setMail] = React.useState("")
    const [pass, setPass] = React.useState("")
    const image = {uri:'https:www.onlygfx.com/wp-content/uploads/2017/07/paint-texture-black-and-white-3.jpeg'}
   console.log(navigation)
    const sendInfo = async() => {
        const logUser = {
            mail:mail,
            pass:pass
        }
        const response = await axios.post(`${API}/user/login`, logUser)
        if (!response.data.success) {
            alert('Incorrect mail or password')
        } else {
            alert('Welcome')
            navigation.navigate('Home')
        }
    }
    return(
        <View style = {{backgroundColor:'#2B3B40',flex:1}}>
            <ImageBackground style = {{justifyContent:'center',flex:1}} imageStyle = {{borderBottomLeftRadius:70,
                borderBottomRightRadius: 70}} source={image}> 
               <Text style={styles.welcome}>Log In</Text>
              
                <TextInput
                style={styles.TextInput}
				keyboardType= 'email-address'
				placeholder="Write your mail here"
				placeholderTextColor="#ffffffa9"
				onChangeText={(val) => setMail(val)}
			/>      

               <TextInput
                style={styles.TextInput}
				secureTextEntry = {true}
				placeholder="Write your password here"
                placeholderTextColor="#ffffffa9"
                onChangeText={(val)=> setPass(val)}
			/>
              
              
                <ContainerInfo>
                    <View style={{flexDirection:'row'}}>        
                        <CheckBox value={false}
                            style={{borderColor:'white', borderWidth:12}}
                        />
                        <Text style={{alignSelf:'center' , color: 'white' }}>Remember me</Text>
                    </View>
                    <Text style={{alignSelf:'center', color:'#41A6C4'}}>Forgot password</Text>
                </ContainerInfo>   
                <ButtonPers tam={50} color={'#DBEBF0'}>
                    <Text style={{alignSelf:'center'}} onPress={sendInfo}  >Log in </Text>
                </ButtonPers>    
                <ButtonPers tam={30} color={'#DBEBF0'}>
                    <Text style={{alignSelf:'center'}} >Log init google</Text>
                </ButtonPers>    
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    welcome:{
        alignSelf: 'center',
        fontSize: 30,
         marginTop: 15,
         color:"white",
    },
   TextInput:{
    borderColor: '#6A9DAC',
    borderWidth: 2,
    width:  290,
    height: 40,
    alignSelf: 'center',
    paddingLeft:10,
    borderRadius: 7,
    marginTop:  10,
    backgroundColor: "#8F8B97",
   },
})


const ButtonPers = styled.TouchableOpacity`
    width: 200px;
    height:  40px;
    alignSelf: center;
    borderRadius: 10px;
    flexDirection:row;
    backgroundColor: ${props => props.color};
    justifyContent:center;
    marginTop: ${props => `${props.tam}px`};   
`;

const LogIntInput = styled.TextInput`
    borderColor: #8F8B97;
    borderWidth: 2px;
    width:  290px;
    height: 40px;
    alignSelf: center;
    paddingLeft:10px;
    borderRadius: 7px;
    marginTop:  10px;
`;

const ContainerInfo = styled.View`
    marginTop: 10px;
    flexDirection: row;
    justifyContent: space-between;
    width: 290px;
    alignSelf:center;
`;

export default LogInt
