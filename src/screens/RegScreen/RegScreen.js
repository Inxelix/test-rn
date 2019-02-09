import React, { PureComponent } from 'react';
import { LinearGradient } from 'expo';

import {
	PurpleContentWrapper as ContentWrapper,
} from '../../components';
import {
	colors,
} from '../../constants';
import {
	RegTitleContainer,
	RegFormContainer,
} from './containers';
import {
	DRAWER,
} from '../../constants';

type Props = {};

export default class RegScreen extends PureComponent<Props> {
	onSignPress = () => {
		const { navigation } = this.props;

		navigation.navigate(DRAWER);
	}

	render() {
		return (
			<ContentWrapper>
				<RegTitleContainer
				 title="Регистрация"
				/>
				<RegFormContainer
					fieldAmount={3}
					text="Зарегистрироваться"
					onPress={this.onSignPress}
				/>
			</ContentWrapper>
		);
	}
}

RegScreen.defaultProps = {};

RegScreen.navigationOptions = {
	header: null,
};