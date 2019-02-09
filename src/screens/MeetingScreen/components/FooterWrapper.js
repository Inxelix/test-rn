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
	background-color: ${colors.primaryColor};
	width: 100%;
	height: ${verticalScale(50)};
`;