import styled from 'styled-components';
import {
	scale,
	verticalScale,
} from 'react-native-size-matters';

import {
	colors,
} from '../../../constants';


export const SearchBarWrapper = styled.View`
	width: 100%;
	height: ${verticalScale(50)};
	border-color: ${colors.thinLineColor};
	border-style: solid;
	border-width: 1;
	border-radius: ${scale(30)};
	margin-vertical: ${verticalScale(20)};
	padding-right: ${scale(20)};
	flex-direction: row;
`;