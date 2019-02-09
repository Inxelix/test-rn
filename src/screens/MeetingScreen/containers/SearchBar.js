import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
	colors,
} from '../../../constants';
import {
	SearchBarWrapper,
	SearchInput,
} from '../components';
import { SearchIconContainer } from './SearchIconContainer';


type Props = {
	onChange: PropTypes.func,
};

export class SearchBar extends PureComponent<Props> {
	state = {
		searchText: '',
	};

	onSearchBarTextChange = (text) => {
		this.setState({ 
			searchText: text,
		});
	};

	onSubmit = () => {
		const { onChange } = this.props;
		const { searchText } = this.state;

		const trimmedText = searchText.trim();

		if (trimmedText) {
			onChange(trimmedText.split('').reduce((string, char) => {
				return string + (!(string[string.length - 1] === ' ' && char === ' ')
					? char
					: ''
				);
			}, ''));
		}

		this.setState({
			searchText: '',
		});
	};

	render() {
		const { searchText } = this.state;

		return (
			<SearchBarWrapper>
				<SearchIconContainer />
				<SearchInput
					selectionColor={colors.primaryColor}
					autoCorrect={false}
					value={searchText}
					placeholder="Поиск"
					onChangeText={this.onSearchBarTextChange}
					onSubmitEditing={this.onSubmit}
					returnKeyType="search"
					blurOnSubmit={false}
				/>
			</SearchBarWrapper>
		);
	}
}

SearchBar.defaultProps = {
	onChange: () => {},
};