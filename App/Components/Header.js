import React from 'react'
import styled from "styled-components"
import { StatusBar, StyleSheet } from "react-native";

export default function Header(props) {
    return (
        <Container>
            <Img condicion={false} source={require('../Assets/botLogo.png')} />
            <Img condicion={false} source={require('../Assets/cari.png')} />
            <StatusBar hidden={true} />
        </Container>
    );
}

const Img = styled.Image`
    alignSelf: center;
    resizeMode: contain; 
    width: ${props => props.condicion? '150px':'30px'};
    height: ${props => props.condicion? '150px':'30px'};
    marginLeft: ${props => props.condicion? '10px':'0px'};
    marginEnd: ${props => props.condicion? '0px':'15px'};
`;

const Container = styled.View`
    flexDirection: row;
    borderRadius: 5px;
    justifyContent: space-between;
    width : 100%;
`; 


