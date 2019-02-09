import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
	verticalScale,
} from 'react-native-size-matters';

import {
	colors,
} from '../constants';
import {
	RegAndButtonWrapper,
} from '../components';
import { Button } from './Button';
import { RegFields } from './RegFields';


export const RegAndButtonContainer = ({ fieldAmount, text, onPress }) => (
	<RegAndButtonWrapper>
		<RegFields
			fieldAmount={fieldAmount}
	 	/>
		<Button
			onPress={onPress}
			text={text}
		/>
	</RegAndButtonWrapper>
);