import React from 'react';
import { useRef } from 'react';
import {toast,ToastContainer} from 'react-toastify';

const FreeCoin = ({coin,handleCoin}) => {
    let clicked = useRef(false);
    
    const alreadyGiven = ()=>toast("Free Coins Already Given",{
        position:"top-left",
    });

  return (
    <div className='max-w-[80%] container mx-auto text-center'>
        <h2 className='text-gray-500 font-bold text-xl mb-2'>My Coins : {coin}</h2>
        <ToastContainer/>
        <button className='border border-gray-700 px-2 py-1 rounded-sm' onClick={()=>{
            console.log(clicked.current);
            if(!clicked.current) {clicked.current=true;handleCoin(500);}
            else alreadyGiven();
        }}>Free Coins</button>
    </div>
  );
};

export default FreeCoin;