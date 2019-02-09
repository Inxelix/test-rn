import { createDrawerNavigator } from 'react-navigation'; // 1.0.3

import { Footer } from '../screens/Drawer/containers';
import MainStack from './MainStack';
import ChatStack from './ChatStack';

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
    drawerOpenRoute: 'DrawerOpen',
  }
);  

export default Drawer;
