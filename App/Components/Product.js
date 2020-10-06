import React ,{useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components'
import { colors, IMAGE, LOCAL_HOST } from '../Constants/index'

const Product = (props) => {
    const [foto, setfoto] = useState({ color: props?.product.variants[0].photo })
    //const cambiarFoto = (foto) => setfoto({...foto, color: foto})

    const variantsAux = []
    const borrarRepe = (variants) => {
        variants.forEach(vari => {
            if (variantsAux.filter(varia => varia.color === vari.color).length !== 0)
                return
            variantsAux.push(vari)
        })
        return variantsAux
    }
    borrarRepe(props?.product.variants)
    const url = foto.color.replace(LOCAL_HOST,IMAGE)
    return (
        <Arcticulo>
            <ImageShop source={{ uri: url }} />
            <FotosChicas>
                <View style={{ alignSelf: 'center' }}>
                    <Text>{props?.product.title}</Text>
                    <Text>{props?.product.price}</Text>
                </View>
                <ContainerColors>
                    {variantsAux.map(variant => <ImageShopChica key={variant.stock} color={colors[variant.color]} />)}
                </ContainerColors>
            </FotosChicas>
        </Arcticulo>
    )
}

const ImageShop = styled.Image`
    height: 120px;
    width: 150px;
    resizeMode: contain;
    alignSelf:center;
    borderRadius: 30px;
    marginBottom: 10px ;
`;

const ContainerColors = styled.View`
    alignSelf: center;
    flexDirection: row;
`;

const ImageShopChica = styled.View`
    alignSelf: center;
    backgroundColor:${props => `${props.color}`};
    marginRight: 2px;
    borderRadius: 100px;
    width: 15px;
    height: 15px`
    ;

const FotosChicas = styled.View`
    height: 50px;
    width: 135px;
    alignSelf: center;
    flexDirection:row;        
    padding: 1px;
    display: flex;
    borderTopColor: black;
    borderTopWidth: 1px;
    justifyContent:space-between;
`;
const Arcticulo = styled.View`
    height: 180px;
    width: 150px;
    backgroundColor: white;
    color: black;
    margin: 10px;
    display:flex;
    borderRadius: 15px;        
    flexDirection: column;
    padding: 2px;
`;


export default Product
