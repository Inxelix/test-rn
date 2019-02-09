import styled from 'styled-components';
import {
	scale,
} from 'react-native-size-matters';

import {
	StableBodyWrapper,
} from '../../../components';


export const BodyWrapper = styled(StableBodyWrapper)`
	padding-horizontal: ${scale(15)};
`;