import React, { PureComponent } from 'react';

import {
	Header,
} from '../../containers';
import {
	ContentWrapper,
} from '../../components';
import backArrowIcon from '../../../assets/icons/backArrowIcon.png';
import {
	SearchHistoryComponent,
} from './containers';
import {
	MEETING_SCREEN,
} from '../../constants';


type Props = {};

export default class SetMeetingScreen extends PureComponent<Props> {
	onSetPress = () => {
		const { navigation } = this.props;

		navigation.navigate(MEETING_SCREEN);
	};

	render() {
		const item = this.props.navigation.getParam('text', 'NO-ID');

		return (
			<ContentWrapper>
				<Header
					centerText="Запрос"
					rightText=""
					onLeftPress={this.onSetPress}
					icon={backArrowIcon}
				/>

				<SearchHistoryComponent 
					text={item}
				/>
			</ContentWrapper>
		);
	}
}

SetMeetingScreen.defaultProps = {};

SetMeetingScreen.navigationOptions = {
	header: null,
};
