import React from 'react';
import MapScreen from './source/screens/MapScreen';
import SearchSreen from './source/screens/SearchScreen';
import AboutScreen from './source/screens/AboutScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          activeColor="#f1935c"
          inactiveColor="#fff"
          barStyle={{ backgroundColor: '#2e3238' }}>
        <Tab.Screen name="Live Map" component={MapScreen} 
          options={{ tabBarIcon: ({color,size}) => (<Icon name="map" size={18} color={color} />)}}/>
        <Tab.Screen name="Ship Detail" component={SearchSreen} 
          options={{ tabBarIcon: ({color,size}) => (<Icon name="ship" size={18} color={color} />)}}/>
        <Tab.Screen name="About" component={AboutScreen} 
          options={{ tabBarIcon: ({color,size}) => (<Icon name="address-card" size={18} color={color} />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
