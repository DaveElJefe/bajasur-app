import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { BottomTab } from './routes/bottomTab';
import Login from './screens/login';
import Register from './screens/register';
import RecoverPassword from './screens/recover-password';
import ProductDetails from './screens/productDetails';
import Program from './screens/program';
import Help from './screens/help';
import Contact from './screens/contact';
import Version from './screens/version';
import Privacy from './screens/privacy';

const Stack = createNativeStackNavigator();
export default function App() {
  //Ver como agrupar todas las pantallas sueltas (no debe ser en un Drawer ni Tab)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomTabNavigator'>
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='Register'
          component={Register}
        />
        <Stack.Screen
          name='RecoverPassword'
          component={RecoverPassword}
        />
        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
        />
        <Stack.Screen
          name='Program'
          component={Program}
        />
        <Stack.Screen
          name='Help'
          component={Help}
        />
        <Stack.Screen
          name='Contact'
          component={Contact}
        />
        <Stack.Screen
          name='Version'
          component={Version}
        />
        <Stack.Screen
          name='Privacy'
          component={Privacy}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
