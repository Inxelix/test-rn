import React from 'react';
import PropTypes from 'prop-types';
import { 
	DrawerItems, 
	SafeAreaView,
} from 'react-navigation';

import {
	BodyWrapper,
	FooterWrapper,
	FooterText,
} from '../components';
import {
	colors,
	AUTHENTICATION_STACK,
} from '../../../constants';



export const CustomDrawerComponent = (props) =>
(
	<SafeAreaView style={{ flex: 1 }}>
		<DrawerItems {...props} />
		<BodyWrapper>
			<FooterWrapper
				onPress={() => props.navigation.navigate(AUTHENTICATION_STACK)}
			>
				<FooterText>
					Выйти
				</FooterText>
			</FooterWrapper>
		</BodyWrapper>
	</SafeAreaView>
	
);

CustomDrawerComponent.propTypes = {
	onPress: PropTypes.func.isRequired,
};

CustomDrawerComponent.defaultProps = {
	onPress: () => {},
}