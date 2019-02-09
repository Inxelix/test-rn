import React, { PureComponent } from 'react';
import PropTypes from	'prop-types';

import {
	SearchHistoryWrapper,
} from '../components';
import { SearchHistoryText } from './SearchHistoryText';


export class SearchHistory extends PureComponent<Props> {
	render() {
		const { onTextPress } = this.props;
		const { queries } = this.props;

		return (
			<SearchHistoryWrapper>
				{
					queries.map((query, index) => (
						<SearchHistoryText
							key={index}
							text={query}
							onTextPress={onTextPress}
							index={index}
						/>
					))
				}
			</SearchHistoryWrapper>
			)};
}

SearchHistory.propTypes = {
	queries: PropTypes.array,
	onTextPress: PropTypes.func.isRequired,
};

SearchHistory.defaultProps = {
	queries: [],
	onTextPress: () => {},
};