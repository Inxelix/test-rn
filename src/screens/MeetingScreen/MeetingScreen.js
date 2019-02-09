 import React, { PureComponent } from 'react';
 import { DrawerActions } from 'react-navigation-drawer';

import { 
	Header,
} from '../../containers';
import {
	ContentWrapper,
} from '../../components';
import burgerMenuIcon from '../../../assets/icons/burgerMenuIcon.png';
import {
	BodyWrapper,
} from './components';
import {
	SearchBar,
	SearchHistory,
	Footer,
} from './containers';
import {
	SET_MEETING_SCREEN,
	DRAWER,
} from '../../constants';


type Props = {};

export default class MeetingScreen extends PureComponent<Props> {
	state = {	
		searchQueries: [],
	};

	onBurgerMenuIconPress = () => {
		const { navigation } = this.props;
		navigation.openDrawer();
	}

	onSearchBarTextChange = (text) => {
		const { searchQueries } = this.state;

		this.setState({
			searchQueries: [text, ...searchQueries],
		});
	};

	onFooterPress = () => {
		const { searchQueries } = this.state;

		this.setState({
			searchQueries: [],
		});
	};

	onTextPress = (index) => {
		const { navigation } = this.props;
		const { searchQueries }= this.state;

		navigation.navigate(SET_MEETING_SCREEN, {text: searchQueries[index]});
	}

	render() {
		const { searchQueries } = this.state;
		const { index } = this.state;

		return (
			<ContentWrapper>
				<Header 
					centerText="История"
					rightText=""
					onLeftPress={this.onBurgerMenuIconPress}
					icon={burgerMenuIcon}
				/>
				
				<BodyWrapper>
					<SearchBar 
						onChange={this.onSearchBarTextChange}
					/>
					<SearchHistory
						queries={searchQueries}
						onTextPress={this.onTextPress}
					/>
				</BodyWrapper>

				<Footer 
					onPress={this.onFooterPress}
				/>

			</ContentWrapper>
		);
	}
}

MeetingScreen.defaultProps = {};

MeetingScreen.navigationOptions = {
	header: null,
};