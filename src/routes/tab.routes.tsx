import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import { ScreenA } from '../screens/ScreenA'
import { ScreenB } from '../screens/ScreenB'

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'navy',
        tabBarInactiveTintColor: 'red',
        headerShown: false
      }}
    >
      <Screen
        name='screenA'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons
              name='home'
              color={color}
              size={size} />;
          }
        }}
        component={ScreenA}
      />

      <Screen
        name='screenB'
        options={{
          tabBarLabel: 'Novo',
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons
              name='add'
              color={color}
              size={size} />;
          }
        }}
        component={ScreenB}
      />
    </Navigator>
  );
}
