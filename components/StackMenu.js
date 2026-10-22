
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UITab4 from '../screens/uitab4';
import TopicDetail from '../screens/TopicDetail';

const Stack = createNativeStackNavigator();

export default function StackMenu() {
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
