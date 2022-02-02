import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap:1rem;
    margin-top: 25px;

`

const Texto = styled.p`
     font-size: 18px;
    span{
        font-weight: 700;
    }

`

const Precio = styled.p`
    font-size: 25px;
    span{
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    width:50%;
`


const Resultado = ({resultadoCotizacion}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE } = resultadoCotizacion

    return(

        <Contenedor>
           <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="cripto image" />
           <div>
                <Precio>Price: <span>{PRICE}</span></Precio>
                <Texto>24h High <span>{HIGHDAY}</span></Texto>
                <Texto>24h low: <span>{LOWDAY}</span></Texto>
                <Texto>24h Change: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Last Update: <span>{LASTUPDATE}</span></Texto>
           </div>
        </Contenedor>
    )
}

export default Resultado
