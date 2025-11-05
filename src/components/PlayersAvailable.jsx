import React from 'react';
import Cricketers from '../utils/Cricketers';
import PlayerCard from './PlayerCard';

const PlayersAvailable = ({coin,handleCoin}) => {
    return (
      <div className='max-w-[80%] mt-5 container mx-auto gap-5 grid grid-cols-3'>
        {
            Cricketers.map(player=><PlayerCard coin={coin} handleCoin={handleCoin} player={player}></PlayerCard>)
        }
        
      </div>
    );
};

export default PlayersAvailable;