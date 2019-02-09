import React, { PureComponent } from 'react';

import {
	BottomWrapper,
	BottomText,
	BottomTextWrapper,
} from '../components';


export const RegBottomContainer = ({ onPress }) => (
	<BottomWrapper>
		<BottomTextWrapper
			onPress={onPress}
		>
			<BottomText>
				Зарегистрироваться
			</BottomText>
		</BottomTextWrapper>
	</BottomWrapper>
);