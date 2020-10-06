import React, {useEffect, useState} from "react";
import axios from 'axios'
import Product from '../Components/Product'
import { ScrollView,FlatList, TouchableOpacity } from 'react-native'
import {API} from '../Constants/index'
import { seveKeyValue} from '../Constants/FuncAsyncStorage'

export default function Products( {navigation}) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const pedido = async () => {
            const response = await axios.get(`${API}/product/getProducts`)
            seveKeyValue('products',response.data.product,true)
            setProducts(response.data.product)
        }         
        pedido()
    },[])
    return (<>
        <ScrollView>
            <FlatList
                style={{ flex: 1, alignSelf: 'center' }}
                numColumns={2}
                data={products}
                renderItem={({ item }) =>
                    (<TouchableOpacity title="Go to product" onPress={() => navigation.navigate('OneProduct', {item:item})}>
                        <Product product={item} />
                    </TouchableOpacity>)}
                keyExtractor={item => item._id}
            />
        </ScrollView>

    </>);
}
