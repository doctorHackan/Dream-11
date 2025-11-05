import React from 'react';
import { useState } from 'react';
import FreeCoin from './FreeCoin';
import PlayersAvailable from './PlayersAvailable';
import PlayersSelected from './PlayersSelected';

const Body = () => {

    const [coin,setCoin] = useState(0);
    const [displayCart,setDisplayCart] = useState(false);
    const [selected,setSelected] = useState([]);

    const handleCoin = (ele)=>{
        setCoin(coin+ele);
    }

    const handleSelected = ()=>{
        if(!displayCart) setDisplayCart(true);
    }
    const handleAvailable = ()=>{
        if(displayCart) setDisplayCart(false);
    }


    return (
        <div className='mb-10 max-w-[90%] container mx-auto text-center'>
            
            <FreeCoin coin={coin} handleCoin={handleCoin} />
            <button onClick={()=>handleAvailable()} className='border border-gray-700 px-2 py-1 rounded-sm hover:bg-gray-700 hover:text-white mr-2'>Available</button>
            <button onClick={()=>handleSelected()} className='border border-gray-700 px-2 py-1 rounded-sm hover:bg-gray-700 hover:text-white'>Selected</button>
            {
                displayCart?<PlayersSelected selected={selected} handleCoin={handleCoin} setSelected={setSelected}></PlayersSelected>:<PlayersAvailable selected={selected} setSelected={setSelected} coin={coin} handleCoin={handleCoin} />
            }
            
            
        
        </div>
    );
};

export default Body;