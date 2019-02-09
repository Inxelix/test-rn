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
	HeaderWrapper,
	HeaderCenterWrapper,
	HeaderLeftWrapper,
	HeaderRightWrapper,
	HeaderText,
} from '../components';
import { IconContainer } from './IconContainer';


export const Header = ({ 
	icon, 
	centerText, 
	rightText, 
	onLeftPress, 
	onRightPress,
}) => (
	<HeaderWrapper>
		<HeaderLeftWrapper
			onPress={onLeftPress}
		>
			<IconContainer 
				icon={icon}
				height={verticalScale(14)}
				width={scale(20)}
			/>
		</HeaderLeftWrapper>

		<HeaderCenterWrapper>
			<HeaderText>
				{centerText}
			</HeaderText>
		</HeaderCenterWrapper>

		<HeaderRightWrapper
			onPress={onRightPress}
		>
			<HeaderText>
				{rightText}
			</HeaderText>
		</HeaderRightWrapper>
	</HeaderWrapper>
);

Header.propTypes = {
	icon: Image.propTypes.source.isRequired,
	centerText: PropTypes.string.isRequired,
	rightText: PropTypes.string.isRequired,
	onLeftPress: PropTypes.func.isRequired,
	onRightPress: PropTypes.func.isRequired,
};

Header.defaultProps = {
	onLeftPress: () => {},
	onRightPress: () => {},
}