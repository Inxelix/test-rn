import styled from 'styled-components';
import {
	scale,
	verticalScale,
} from 'react-native-size-matters';

import {
	colors,
	os,
	sizes,
} from '../constants';


export const HeaderWrapper = styled.View`
	background-color: ${colors.primaryColor};
	width: 100%;
	height: ${verticalScale(45) + (os.name === 'ios' && sizes.statusBarHeight)};
	flex-direction: row;
	padding-bottom: ${verticalScale(13)};
	padding-horizontal: ${scale(15)};
`;
