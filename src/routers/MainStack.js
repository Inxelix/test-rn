import { createStackNavigator } from 'react-navigation';

import {
	SET_MEETING_SCREEN,
	MEETING_SCREEN,
} from '../constants';
import {
	SetMeetingScreen,
	MeetingScreen,
} from '../screens';


const MainStack = createStackNavigator(
	{
		[MEETING_SCREEN]: {
			screen: MeetingScreen,
		},
		[SET_MEETING_SCREEN]: {
			screen: SetMeetingScreen,
		},
	},
	{
		initialRouteName: MEETING_SCREEN,
	},
);

export default MainStack;
