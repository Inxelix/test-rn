import {
	createSwitchNavigator,
	createAppContainer,
} from 'react-navigation';

import {
	MAIN_STACK,
	AUTHENTICATION_STACK,
	DRAWER,
} from '../constants';
import MainStack from './MainStack';
import AuthenticationStack from './AuthenticationStack';
import Drawer from './Drawer';

const root = createSwitchNavigator(
	{
		[AUTHENTICATION_STACK]: {
			screen: AuthenticationStack,
		},
		[MAIN_STACK]: {
			screen: MainStack,
		},
		[DRAWER]: {
			screen: Drawer,
		},
	},
	{
		initialRouteName: AUTHENTICATION_STACK,
	},
);

export default createAppContainer(root);