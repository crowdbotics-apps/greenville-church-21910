import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList160077Navigator from '../features/ArticleList160077/navigator';
import ArticleList160076Navigator from '../features/ArticleList160076/navigator';
import ArticleList160075Navigator from '../features/ArticleList160075/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList160077: { screen: ArticleList160077Navigator },
ArticleList160076: { screen: ArticleList160076Navigator },
ArticleList160075: { screen: ArticleList160075Navigator },

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
