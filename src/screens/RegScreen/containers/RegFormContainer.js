import React, { PureComponent } from 'react';

import {
	RegFormWrapper,
} from '../components';
import {
	Button,
} from '../../../containers';
import { RegField } from './RegField';

export const RegFormContainer = ({ fieldAmount, text, onPress }) => (
	<RegFormWrapper>
		<RegField
			fieldAmount={fieldAmount}
	 	/>
		<Button
			onPress={onPress}
			text={text}
		/>
	</RegFormWrapper>
);