import React from 'react';
import {toast,ToastContainer} from 'react-toastify';

const PlayerCard = ({coin,handleCoin,player,selected,setSelected}) => {

    const {name,price,role} = player;
    const handlePlayerSelection = ()=>{
        if(price>coin) toast("Not enough coins.",{position:"top-left"});
        else {
            const check = selected.find(player=>player.name===name)
            if(!check && selected.length<=4){
                handleCoin(-price);
                setSelected([...selected,player])
            }
            else if(check){
                toast("Player already selected",{position:"top-left"});
            }
            else{
                toast("Cannot select more than 5 players",{position:"top-left"});
            }
        }
    }

    return (
      <div className='border border-amber-400 rounded-xl text-center px-10 py-10 hover:-translate-y-2 hover:shadow-xl/30'>
        <h2 className='text-gray-500 font-bold text-xl mb-2'>Name: {name}</h2>
        <p className='mb-1'>Role:{role}</p>
        <p className='mb-1'>Price:{price}</p>
        <button onClick={()=>{
            handlePlayerSelection();
        }} className='border border-gray-700 px-2 py-1 rounded-sm hover:bg-gray-700 hover:text-white'>Select</button>
      </div>
    );
};

export default PlayerCard;