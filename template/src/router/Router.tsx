import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  navigation as navigationRef,
  onNavigatorReady,
  onNavigatorStateChange,
} from './utils/actions';

import {MainStack} from '../stacks/MainStack';
import {MAIN_STACK_KEY} from './utils/routerKeys';

const Stack = createNativeStackNavigator();

export const Router: React.FC = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onNavigatorReady}
      onStateChange={onNavigatorStateChange}>
      <Stack.Navigator>
        <Stack.Screen
          name={MAIN_STACK_KEY}
          component={MainStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
