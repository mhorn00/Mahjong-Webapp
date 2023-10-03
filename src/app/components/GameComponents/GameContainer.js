import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import './Styles/GameContainer.scss';
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
						<Panel className='CardContainer'>
							<CardArea className='CardContainer' />
						</Panel>
						<ResizeHandle />
						<Panel className='HandContainer' >
							<HandDisplay className='HandContainer' />
						</Panel>
					</PanelGroup>
				</Panel>
			</PanelGroup>
		</div>
	);
};

const ResizeHandle = function ({className}) {
	return (
		<PanelResizeHandle className={['ResizeHandleOuter', className].join(' ')}>
			<div className='ResizeHandleInner'></div>
		</PanelResizeHandle>
	);
};

GameContainer.propTypes = {
	className: PropTypes.string,
};
ResizeHandle.propTypes = {
	className: PropTypes.string,
};
export default GameContainer;
