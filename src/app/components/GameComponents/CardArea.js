import React from 'react';
import PropTypes from 'prop-types';

const CardArea = function ({className}) {
	return <div className={className}></div>;
};

CardArea.propTypes = {
	className: PropTypes.string,
};
export default CardArea;
