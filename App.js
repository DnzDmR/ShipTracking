import React from 'react';
import MapScreen from './source/screens/MapScreen';
import ShipDetailSreen from './source/screens/ShipDetailSreen';
import AboutScreen from './source/screens/AboutScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Detail" component={ShipDetailSreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
