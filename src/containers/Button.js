import React from 'react';
import PropTypes from 'prop-types';

import {
	ButtonWrapper,
	ButtonText,
} from '../components';


export const Button = ({ onPress, text }) => (
	<ButtonWrapper
		onPress={onPress}
	>
			<ButtonText>
				{text}
			</ButtonText>
	</ButtonWrapper>
);

Button.propTypes = {
	onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
	onPress: () => {},
}