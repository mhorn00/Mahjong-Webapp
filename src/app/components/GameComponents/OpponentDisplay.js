import React from 'react';
import {PanelResizeHandle} from 'react-resizable-panels';

const OpponentDisplay = function ({className}) {
	return (
		<PanelResizeHandle className={className}>
			<div></div>
		</PanelResizeHandle>
	);
};

export default OpponentDisplay;
