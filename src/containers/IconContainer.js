import React from 'react';
import {
	Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {
	scale,
	verticalScale,
} from 'react-native-size-matters';

import {
	IconWrapper,
} from '../components';


export const IconContainer = ({ icon, width, height }) => (
	<IconWrapper>
		<Image 
			source={icon}
			style={{ width, height }}
		/>
	</IconWrapper>
);

IconContainer.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	icon: Image.propTypes.source.isRequired,
};

IconContainer.defaultProps = {
	width: scale(15),
	height: verticalScale(15),
};