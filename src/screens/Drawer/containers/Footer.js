import React from 'react';
import PropTypes from 'prop-types';

import {
	FooterComponent,
	FooterWrapper,
	FooterText,
} from '../components';


export const Footer = ({ onPress }) =>
(
	<FooterWrapper
		onPress={onPress}
	>
		<FooterComponent>
			<FooterText>
				Выйти
			</FooterText>
		</FooterComponent>
	</FooterWrapper>
);

Footer.propTypes = {
	onPress: PropTypes.func.isRequired,
};

Footer.defaultProps = {
	onPress: () => {},
}