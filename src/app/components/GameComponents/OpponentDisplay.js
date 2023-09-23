import React from 'react';
import PropTypes from 'prop-types';
import {PanelResizeHandle} from 'react-resizable-panels';

const OpponentDisplay = function ({className}) {
	return (
		<PanelResizeHandle className={className}>
			<div></div>
		</PanelResizeHandle>
	);
};

OpponentDisplay.propTypes = {
	className: PropTypes.string,
};
export default OpponentDisplay;
