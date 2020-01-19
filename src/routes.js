import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          headerTitle: "Dev Finder"
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          headerTitle: "Perfil do GitHub"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: "center",
        headerBackTitleVisible: null,
        headerStyle: {
          backgroundColor: "#4D40E7"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      },
      initialRouteName: "Main"
    }
  )
);

export default Routes;
