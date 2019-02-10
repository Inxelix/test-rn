import { createDrawerNavigator } from 'react-navigation'; // 1.0.3

import { Footer } from '../screens/Drawer/containers';
import MainStack from './MainStack';
import ChatStack from './ChatStack';
import {
  CustomDrawerComponent,
} from '../screens/Drawer/containers';
import {
  colors,
} from '../constants';

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: MainStack,
    },
    Chat: {
      screen: ChatStack,
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: colors.primaryColor,
    },
  },
);  

export default Drawer;
