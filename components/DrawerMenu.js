
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabMenu from './TabMenu';
import Aboutus from '../screens/Aboutus';
import HowTo from '../screens/HowTo';

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        headerStyle: { backgroundColor: '#FFFFFF' },
        headerTintColor: '#1E456E',
        drawerActiveTintColor: '#168348',
        drawerActiveBackgroundColor: '#E8F5E9',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={TabMenu}
        options={{
          title: 'SUPHAN BURI TRAVEL HUB',
          drawerLabel: 'หน้าหลัก',
        }}
        listeners={({ navigation }) => ({
          drawerItemPress: (e) => {
            e.preventDefault();
            navigation.navigate('HomeTabs', {
              screen: 'Home',
            });
          },
        })}
      />

      <Drawer.Screen
        name="Aboutus"
        component={Aboutus}
        options={{
          title: 'ผู้จัดทำ',
          drawerLabel: 'ผู้จัดทำ',
        }}
      />

      <Drawer.Screen
        name="HowTo"
        component={HowTo}
        options={{
          title: 'วิธีใช้งาน',
          drawerLabel: 'วิธีใช้งาน',
        }}
      />
    </Drawer.Navigator>
  );
}
