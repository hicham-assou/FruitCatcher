import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './Screens/HomeScreen/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen/Parametres';
import FreeModeScreen from "./Screens/FreeGameModeScreen/FreeGame";
import ArcadeGameScreen from "./Screens/ArcadeGameModeScreen/ArcadeGame";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="Fruit Catcher" component={MainScreen} />
        <Stack.Screen name="Parametres" component={SettingsScreen} />
        <Stack.Screen name="Mode Libre" component={FreeModeScreen} />
        <Stack.Screen name="Mode Arcade" component={ArcadeGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;