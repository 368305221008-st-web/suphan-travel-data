
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerMenu from './components/DrawerMenu';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  );
}
