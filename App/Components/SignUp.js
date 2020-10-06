import React, { useState, useEffect } from 'react';
import {View, Text, CheckBox, ImageBackground, Button, StyleSheet, TextInput} from 'react-native';
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import {API} from '../Constants/index'




 const  SignUp = () => {
    const image = {uri:'https:www.onlygfx.com/wp-content/uploads/2017/07/paint-texture-black-and-white-3.jpeg'}

    const [name, setName] = React.useState("")
    const [surname, setSurname] = React.useState("")
    const [mail, setMail] = React.useState("")
    const [pass, setPass] = React.useState("")

    const [mensajes, setMensajes] = useState({
        firstName1: false,
        firstName2: false,
        lastName1: false,
        lastName2: false,
        mail1: false,
        mail2: false,
        pass1: false,
        pass2: false,
    })
    
    
    const sendInfo = async() => {
        const uname = RegExp(/^[a-zA-Z0-9._]+$/)
        const reMail = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
        const rePass = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!{}[\]@#$%\^&*)(+=._-]).{5,}/)
     
        mensajes.firstName1 = false
        mensajes.firstName2 = false
        mensajes.lastName1 = false
        mensajes.lastName2 = false
        mensajes.mail1 = false
        mensajes.mail2 = false
        mensajes.pass1 = false
        mensajes.pass2 = false

        if (name === '' || surname === '' || mail === '' || pass === '') {
            alert("please complete all fields")

            // name validation
        } else if (name.length < 3) {
            setMensajes({
                ...mensajes,
                firstName1: true
            })
        }   else if (!uname.test(name)) {
            setMensajes({
                ...mensajes,
                firstName2: true
            })

            // lastName validation
        }else if (surname.length < 3) {
            setMensajes({
                ...mensajes,
                lastName1: true
            })
        } else if (!uname.test(surname)) {
            setMensajes({
                ...mensajes,
                lastName2: true
            })

            // mail validation
        } else if (mail.length < 6) {
            setMensajes({
                ...mensajes,
                mail1: true
            })
        } else if (!reMail.test(mail)) {
            setMensajes({
                ...mensajes,
                mail2: true
            })

            // pass validation
        } else if (pass.length < 5) {
            setMensajes({
                ...mensajes,
                pass1: true
            })
        } else if (!rePass.test(pass)) {
            setMensajes({
                ...mensajes,
                pass2: true
            })

        } else {
            const newUser = {
                firstName:name,
                lastName:surname,
                mail:mail,
                pass:pass
            }

            await axios.post(`${API}/user/register`, newUser)
            alert("Thank you for Signing Up")
           
        }

    }

    
    return(
        
        <View style = {{backgroundColor:'#2B3B40',flex:1}}>
          <ImageBackground style = {{justifyContent:'center',flex:1}} imageStyle = {{borderBottomLeftRadius:70, borderBottomRightRadius: 70}} source={image}> 
          <Text style={styles.welcome}>Sign up</Text>

          {mensajes.firstName1 ? <Text style={styles.mensajeError} >*Your name must contain at least 3 characters</Text> : mensajes.firstName2 ?  <Text style={styles.mensajeError}>*Your name must contain only uppercase letter, lowercase letter, numbers, numbers, '_' and '.'</Text> : <Text></Text>}
          <TextInput
                style={styles.TextInput}
				placeholder="Write your name here"
				placeholderTextColor="#ffffffa9" 
				onChangeText={(val) => setName(val)}
			/>
        
           {mensajes.lastName1 ? <Text style={styles.mensajeError}>*Your lastName must contain at least 3 characters</Text> : mensajes.lastName2 ?  <Text style={styles.mensajeError}>*Your lastName must contain only uppercase letter, lowercase letter, numbers, numbers, '_' and '.'</Text> : <Text></Text>}
           <TextInput
                style={styles.TextInput}
				placeholder="Write your last name here"
				placeholderTextColor="#ffffffa9" 
				onChangeText={(val) => setSurname(val)}
			/>
        
          {mensajes.mail1 ? <Text style={styles.mensajeError}>*Your mail must contain at least 6 characters</Text> : mensajes.mail2 ?  <Text style={styles.mensajeError}>*Your mail must be a valid mal, for exaple: 'example@server.com</Text> : <Text></Text>}
            <TextInput
                style={styles.TextInput}
				keyboardType= 'email-address'
				placeholder="Write your mail here"
				placeholderTextColor="#ffffffa9"
				onChangeText={(val) => setMail(val)}
			/>
			
            {mensajes.pass1 ? <Text style={styles.mensajeError}>*Your password must contain at least 5 characters</Text> : mensajes.pass2 ?  <Text style={styles.mensajeError}>*Your Password must include at least one uppercase letter, at least one lowercase letter, and at least one number.</Text> : <Text></Text>}
            <TextInput
                style={styles.TextInput}
				secureTextEntry= {true}
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
                </ContainerInfo>   
                <ButtonPers tam={50} color={'#DBEBF0'}>
                    <Text style={{alignSelf:'center'}} onPress={sendInfo} >Create Account</Text>
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
   mensajeError:{
       color:"red",
       alignSelf: 'center',
       marginTop: 10,
       marginBottom:-10,

   }
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


const ContainerInfo = styled.View`
    marginTop: 10px;
    flexDirection: row;
    justifyContent: space-between;
    width: 290px;
    alignSelf:center;
`;



 export default SignUp
