import { useEffect, useState } from 'react';
import Link from 'next/link'

export default function Criptomonedas(){

    const[ criptomonedas, setCriptomonedas] = useState([])

    useEffect(()=>{

        fetch('https://api.coincap.io/v2/assets').
        then(response => response.json()).
        then(data => (setCriptomonedas(data.data)))
    
    },[]);

    return(
        <div>
            {criptomonedas.map(item =>(
                <div>
                    <span>Moneda: {item.name}</span>
                    <br/>
                    <span>Price USD: {item.priceUsd}</span>   
                    <br/>
                    <Link href={`/criptomoneda/${item.id}`}>Ver Detalle</Link>
                    <br/>
                    <br/>
                </div>
            ))}
        </div>
    )
}