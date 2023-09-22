import React, {useRef, useState} from 'react';
import './GameContainer.scss';
import HandDisplay from './HandDisplay.js';
import CardArea from './CardArea.js';
import OpponentDisplay from './OpponentDisplay.js';
import TileDiscardDisplay from './TileDiscardDisplay.js';
import {Panel, PanelGroup, PanelResizeHandle} from 'react-resizable-panels';

const GameContainer = function ({className}) {
	return (
		<div className={className}>
			<PanelGroup autoSaveId='MainGroup' direction='vertical'>
				<Panel className='DiscardOpponentPanel' defaultSize={60}>
					<TileDiscardDisplay className='DiscardContainer' />
				</Panel>
				<OpponentDisplay className='OpponentContainer' />
				<Panel className='PlayContainer' defaultSize={40}>
					<PanelGroup autoSaveId='PlayGroup' direction='horizontal'>
						<Panel className='CardContainer' defaultSize={20} >
							<CardArea className='CardContainer' />
						</Panel>
						<ResizeHandle />
						<Panel className='HandContainer' defaultSize={80}>
							<HandDisplay className='HandContainer' />
						</Panel>
					</PanelGroup>
				</Panel>
			</PanelGroup>
		</div>
	);
};

const ResizeHandle = function ({className, id}) {
	return (
		<PanelResizeHandle className={['ResizeHandleOuter', className].join(' ')} id={id}>
			<div className='ResizeHandleInner'></div>
		</PanelResizeHandle>
	);
};

export default GameContainer;
