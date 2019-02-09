import React from 'react';
import PropTypes from 'prop-types';

import {
	BodyWrapper,
	ContentText,
	TextWrapper,
} from '../components';
import {
	BodyText,
} from '../../../components';


export const SearchHistoryComponent = ({ text }) =>
(
	<BodyWrapper>
		<TextWrapper>
			<ContentText>
				{text}
			</ContentText>
		</TextWrapper>
	</BodyWrapper>
);
