import AsyncStorage from '@react-native-community/async-storage'


/**
*  getValue te devuelve el value de la key resivida del 
*  lo contrario te devuelve null
* */
export const getValue = async (key,itsAnObject) => {
    let value = await AsyncStorage.getItem(key)
    if(value === null) return null
    return itsAnObject? JSON.parse(value):value
}

/**
*  seveKeyValue guarda en el AsyncStorage el value y su key 
*  pero hay que especificar si es Un Object lo que se va
*  a guarda
* */
export const updateAsyncStorage = async (key, newValue, itsAnObject) => {
    if(getValue(key, itsAnObject) === null) return
    let valueSave = itsAnObject? JSON.stringify(newValue):newValue
    await AsyncStorage.mergeItem(key, valueSave)
}

/**
*  seveKeyValue guarda en el AsyncStorage el value y su key 
*  pero hay que especificar si es Un Object lo que se va
*  a guarda
* */
export const seveKeyValue = async (key, value, itsAnObject) => {
    if(getValue(key, itsAnObject) === null) return
    let valueSave = itsAnObject? JSON.stringify(value):value
    await AsyncStorage.setItem(key, valueSave)
}

export const removeKey =  async(key) => await AsyncStorage.removeItem(key)

