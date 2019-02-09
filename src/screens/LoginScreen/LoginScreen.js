import React, { PureComponent } from 'react';
import {
	PurpleContentWrapper as ContentWrapper,
} from '../../components';
import {
	colors,
	DRAWER,
	REG_SCREEN,
} from '../../constants';
import {
	RegAndButtonContainer,
} from '../../containers';
import {
	RegTitleContainer,
	RegBottomContainer,
} from './containers';


type Props = {};

export default class LoginScreen extends PureComponent<Props> {
	onSignPress = () => {
		const { navigation } = this.props;

		navigation.navigate(DRAWER);
	}

	onRegPress = () => {
		const { navigation } = this.props;

		navigation.navigate(REG_SCREEN);
	}

	render() {
		return (
			<ContentWrapper>
				<RegTitleContainer
				 title="Вход"
				/>
				<RegAndButtonContainer
					fieldAmount={2}
					text="Войти"
					onPress={this.onSignPress}
				/>
				<RegBottomContainer
					onPress={this.onRegPress}
				/>
			</ContentWrapper>
		);
	}
}

LoginScreen.defaultProps = {};

LoginScreen.navigationOptions = {
	header: null,
};