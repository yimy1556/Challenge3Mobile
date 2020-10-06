import { getValue ,seveKeyValue, removeKey} from './FuncAsyncStorage'

const key1 = ['_id', 'size', 'color']
const key2 = ['size', 'color']

const sonIguales = (prod1, prod2, keyProc) => {
    let condicion = true
    keyProc.forEach(key => {
        if (!condicion) return
        condicion = prod1[key] === prod2[key]
    })
    return condicion
}

const modificarCant = (prodMo, listProduct, cant = 1) => {
    let posi = listProduct.indexOf(prodMo)
    listProduct[posi].quantity = listProduct[posi].quantity + cant
}

export const UpdateCart = async (cart, cant) => { 
    getValue('cart', true)
    .then(value => {
        console.log(value)
        let pertenece = value.filter(prod => sonIguales(prod, cart, key1))
        if(pertenece?.length !== 0)
            modificarCant(pertenece[0],value, cant)
        else
            value.push(cart)
        console.log(1212,value,2121)
        removeKey('cart')
        seveKeyValue('cart',value,true)    
    })
}

