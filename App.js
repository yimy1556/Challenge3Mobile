import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Tab from './App/Nagivator/TabV'
import Carrito from './App/Components/Carrito'
import {getValue, seveKeyValue} from './App/Constants/FuncAsyncStorage'

const cartAndListProducts = () => {
    getValue('cart',true) 
    .then(value => {
        seveKeyValue('cart',[],true)
    })
} 

export default function App() {
    cartAndListProducts() 
    return (<>
        <Tab/>
        <Carrito/>
    </>);
}

