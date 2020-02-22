import React from 'react';
import MapScreen from './source/screens/MapScreen';
import SearchSreen from './source/screens/SearchScreen';
import AboutScreen from './source/screens/AboutScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          activeColor="#ff0000"
          inactiveColor="#fff"
          barStyle={{ backgroundColor: '#2e3238' }}
        >
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Search" component={SearchSreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
