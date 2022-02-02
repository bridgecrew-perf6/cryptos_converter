import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/mondejas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 20px;
    color: #FFF;
    font-weight:700;
    text-transform: uppercase;
    font-size:20px;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7A7DFE;
        cursor:pointer;
    }
`

const Formulario = ({setMonedas}) => {
  
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Choose your currency', monedas);
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Choose your criptocurrency', criptos);

    useEffect(() => {
        const consultarAPI = async () => {
           const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
           const respuesta = await fetch(url)
           const resultado = await respuesta.json();

           const arrayCriptos = resultado.Data.map( cripto => {
               const objeto = {
                  id: cripto.CoinInfo.Name,
                  nombre: cripto.CoinInfo.FullName,
               }
               return objeto;
           })
                setCriptos(arrayCriptos)
        }
        consultarAPI()
    }, [])

    const handeSubmit = e => {
        e.preventDefault()

        if([moneda, criptomoneda].includes('')){
            setError(true)
            return;
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }


    return (

        <>
            {/* //Si error esta como true */}
            {error && <Error>All fields are mandatory</Error>}

            <form 
                onSubmit={handeSubmit}
            >

                    <SelectMonedas/>
                    <SelectCriptomoneda/>


                    <InputSubmit 
                        type="submit"
                        value = "Get price"
                    />
            </form>
        </>
    )
}

export default Formulario
