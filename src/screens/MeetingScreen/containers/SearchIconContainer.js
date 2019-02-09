import React from 'react';
import {
	Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {
	scale,
	verticalScale,
} from 'react-native-size-matters';

import searchIcon from '../../../../assets/icons/searchIcon.png';
import {
	SearchIconWrapper,
} from '../components';


export const SearchIconContainer = ({ height, width }) => (
	<SearchIconWrapper>
		<Image
			source={searchIcon}
			style={{ height, width }}
		/> 
	</SearchIconWrapper>
);

SearchIconContainer.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
};

SearchIconContainer.defaultProps = {
	height: verticalScale(15),
	width: scale(15),
};