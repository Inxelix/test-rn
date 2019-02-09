import React from 'react';
import PropTypes from	'prop-types';

import {
	SearchHistoryTextUnderline,
	SearchHistoryTextComponent,
} from '../components';


export const SearchHistoryText = ({ text, onTextPress, index }) => (
	<SearchHistoryTextUnderline
		onPress={() => onTextPress(index)}
	>
		<SearchHistoryTextComponent>
			{text}
		</SearchHistoryTextComponent>
	</SearchHistoryTextUnderline>
);