import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from '@expo/vector-icons';
import { ScreenA } from '../screens/ScreenA'
import { ScreenB } from '../screens/ScreenB'

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name='screenA'
        component={ScreenA}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ }) => {
            return <MaterialIcons
              name='home'
              size={22} />;
          }
        }}
      />

      <Screen
        name='screenB'
        component={ScreenB}
        options={{
          drawerLabel: 'Sair',
          drawerIcon: ({ }) => {
            return <MaterialIcons
              name='logout'
              size={22} />;
          }
        }}

      />
    </Navigator>
  );
}
