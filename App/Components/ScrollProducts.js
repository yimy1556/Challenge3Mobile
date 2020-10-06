import React, {useState, useEffect} from 'react'
import { getValue } from '../Constants/FuncAsyncStorage'
import {ScrollView, TouchableOpacity, FlatList } from "react-native";
import Product from '../Components/Product'
//import { ImageShop } from '../Constants/index'
const ScrollProducts = (props) => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        getValue('products', true)
        .then(prod => setProducts(prod))
    },[])
    return (
        <ScrollView horizontal={true}>
            <FlatList
                horizontal={true}
                data={products}
                renderItem={({ item }) =>
                    (<TouchableOpacity 
                        title="Go to product"
                        onPress={() => {
                            props.navigation.goBack()
                            return props.navigation.navigate('OneProduct', {item:item})
                        }}>
                        <Product product={item} />
                    </TouchableOpacity>)}
                keyExtractor={item => item._id}
            />

        </ScrollView>
    )
}

export default ScrollProducts
