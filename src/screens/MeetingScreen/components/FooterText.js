import styled from 'styled-components';
import {
	scale,
} from 'react-native-size-matters';

import {
	colors,
} from '../../../constants';


export const FooterText = styled.Text`
	color: ${colors.secondaryTextColor};
	font-size: ${scale(13)};
`;