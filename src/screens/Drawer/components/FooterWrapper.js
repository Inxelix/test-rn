import styled from 'styled-components';
import {
	verticalScale,
} from 'react-native-size-matters';

import {
	colors,
	os,
	sizes,
} from '../../../constants';


export const FooterWrapper = styled.TouchableOpacity`
	background-color: ${colors.logOut};
	width: 100%;
	height: ${verticalScale(50)};
	justify-content: center;
	align-items: center;
`;