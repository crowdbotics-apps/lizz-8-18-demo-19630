import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen391768Navigator from '../features/CopyOfBlankScreen391768/navigator';
import BlankScreen391767Navigator from '../features/BlankScreen391767/navigator';
import SignIn2191766Navigator from '../features/SignIn2191766/navigator';
import SignUp2291765Navigator from '../features/SignUp2291765/navigator';
import Feed391764Navigator from '../features/Feed391764/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen391768: { screen: CopyOfBlankScreen391768Navigator },
BlankScreen391767: { screen: BlankScreen391767Navigator },
SignIn2191766: { screen: SignIn2191766Navigator },
SignUp2291765: { screen: SignUp2291765Navigator },
Feed391764: { screen: Feed391764Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
