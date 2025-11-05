import React from 'react';

const SelectedPlayerCard = ({selected,setSelected,selectedPlayer,handleCoin}) => {

    const {name,price} = selectedPlayer;
    const handleRemove = ()=>{
        console.log(selected+" 123");
        const newSelected = selected.filter((player)=>player.name!==name)
        setSelected(newSelected);
        handleCoin(price);
        
    }

    return (
      <div className='flex items-center justify-between border border-amber-500 mb-3 px-5 py-3 rounded-2xl'>
        <h2 className='mb-2'>Name : {name}</h2>
        <button className='border border-gray-700 px-2 py-1 rounded-sm hover:bg-gray-700 hover:text-white' onClick={()=>handleRemove()}>Remove</button>
      </div>
    );
};

export default SelectedPlayerCard;