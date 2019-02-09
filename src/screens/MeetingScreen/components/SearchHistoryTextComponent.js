import styled from 'styled-components';
import {
	verticalScale,
} from 'react-native-size-matters';

import {
	BodyText,
} from '../../../components';


export const SearchHistoryTextComponent = styled(BodyText)`
	padding-vertical: ${verticalScale(10)};
`;