import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const PlayersSelected = ({selected,setSelected,handleCoin}) => {
    return (
      <div className='mt-5'>
        <h2>Players selected: {selected.length}/5</h2>
        <div>
            {
                selected.map(selectedPlayer=><SelectedPlayerCard key={selectedPlayer.id} handleCoin={handleCoin} selected={selected} selectedPlayer={selectedPlayer} setSelected={setSelected}/>)
            }
        </div>
      </div>
    );
};

export default PlayersSelected;