import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, HOME_SCREEN_KEY} from '../screens/Home';

const Stack = createNativeStackNavigator();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={HOME_SCREEN_KEY}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
