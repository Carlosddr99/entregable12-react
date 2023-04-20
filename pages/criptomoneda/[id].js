import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function Criptomoneda({  }) {
    const router = useRouter()
    const { id } = router.query

    const[ criptomoneda, setCriptomoneda] = useState(null)

    useEffect(()=>{
        console.log(id)
        fetch(`https://api.coincap.io/v2/assets/${id}`).
        then(response => response.json()).
        then(data => (setCriptomoneda(data.data)))
    
    },[]);

    function devolverInfo(){
        return(
            <span>
                <span>Nombre : {criptomoneda.name}</span><br/>
                <span>Simbolo : {criptomoneda.symbol}</span><br/>
                <span>Máximo suplemento : {criptomoneda.maxSupply}</span><br/>
                <span>Precio : {criptomoneda.priceUsd}</span><br/>
                <span>Ranking : {criptomoneda.rank}</span><br/><br/>
            </span>
        )
    }
    return (
    <div>
        {criptomoneda != null ? devolverInfo() : null}
        
    </div>
    )
}