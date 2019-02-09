 import React, { PureComponent } from 'react';

import { 
	Header,
} from '../../containers';
import {
	ContentWrapper,
} from '../../components';
import burgerMenuIcon from '../../../assets/icons/burgerMenuIcon.png';
import {
	BodyWrapper,
} from '../../components';


type Props = {};

export default class ChatScreen extends PureComponent<Props> {

	onBurgerMenuIconPress = () => {
		const { navigation } = this.props;
		navigation.openDrawer();
	}

	render() {
		return (
			<ContentWrapper>
				<Header 
					centerText="Чат"
					rightText=""
					onLeftPress={this.onBurgerMenuIconPress}
					icon={burgerMenuIcon}
				/>
			</ContentWrapper>
		);
	}
}

ChatScreen.defaultProps = {};

ChatScreen.navigationOptions = {
	header: null,
};