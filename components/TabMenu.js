
import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UITab1 from '../screens/uitab1';
import UITab2 from '../screens/uitab2';
import UITab3 from '../screens/uitab3';
import UITab4 from '../screens/uitab4';
import TopicDetail from '../screens/TopicDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function KnowledgeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="KnowledgeList"
        component={UITab3}
        options={{ title: 'สาระน่ารู้' }}
      />
      <Stack.Screen
        name="TopicDetail"
        component={TopicDetail}
        options={{ title: 'รายละเอียดความรู้' }}
      />
    </Stack.Navigator>
  );
}

function ExploreStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Places"
        component={UITab4}
        options={{ title: 'สถานที่ท่องเที่ยว' }}
      />
      <Stack.Screen
        name="TopicDetail"
        component={TopicDetail}
        options={{ title: 'รายละเอียดสถานที่' }}
      />
    </Stack.Navigator>
  );
}

export default function TabMenu() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#168348',
        tabBarInactiveTintColor: '#64748B',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={UITab1}
        options={{
          title: 'หน้าหลัก',
          tabBarIcon: () => (
            <Text style={{ fontSize: 20 }}>🏠</Text>
          ),
        }}
      />

      <Tab.Screen
        name="RNKnowledge"
        component={KnowledgeStackScreen}
        options={{
          title: 'สาระน่ารู้',
          tabBarIcon: () => (
            <Text style={{ fontSize: 20 }}>📖</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          title: 'สถานที่ท่องเที่ยว',
          tabBarIcon: () => (
            <Text style={{ fontSize: 20 }}>🗺️</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Aboutus"
        component={UITab2}
        options={{
          title: 'ผู้จัดทำ',
          tabBarIcon: () => (
            <Text style={{ fontSize: 20 }}>👩🏻‍💻</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
