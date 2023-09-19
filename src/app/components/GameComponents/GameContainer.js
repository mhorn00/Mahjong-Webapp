import React from 'react';
import './GameContainer.scss';
import HandDisplay from './HandDisplay.js';
import CardArea from './CardArea.js';
import OpponentDisplay from './OpponentDisplay.js';
import TileDiscardDisplay from './TileDiscardDisplay.js';

const GameContainer = function ({className}) {
    return (
        <div className={className}>
			<TileDiscardDisplay className='DiscardContainer'/>
			<OpponentDisplay className='OpponentContainer'/>
            <div className='PlayContainer'>
                <CardArea className='CardContainer'/>
			    <HandDisplay className='HandContainer'/>
            </div>
		</div>
    );
};

export default GameContainer;