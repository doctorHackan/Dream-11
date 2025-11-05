import React from 'react';
import { useState } from 'react';
import FreeCoin from './FreeCoin';
const Body = () => {

    const [coin,setCoin] = useState(0);

    const handleCoin = (ele)=>{
        setCoin(coin+ele);
    }


    return (
        <div>
            
            <FreeCoin coin={coin} handleCoin={handleCoin} />
        
        </div>
    );
};

export default Body;