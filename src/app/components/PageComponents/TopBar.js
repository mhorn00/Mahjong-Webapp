import React from 'react';
import PropTypes from 'prop-types';

const TopBar = function ({className}) {
	return (
		<div className={className}>
			<p>Top Bar</p>
		</div>
	);
};

TopBar.propTypes = {
	className: PropTypes.string,
};
export default TopBar;
