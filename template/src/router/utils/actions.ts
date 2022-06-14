import {NavigationContainerRef, StackActions} from '@react-navigation/native';
import {createRef} from 'react';

type navigationProps = {
  screenId: String;
  options?: any;
  forcePushScreen?: boolean;
};

export const navigation = createRef<NavigationContainerRef<any | null>>();
export const routeName = createRef<NavigationContainerRef<any | null>>();

export const popScreen = () =>
  navigation?.current?.dispatch(StackActions.pop());

export const openScreen = (screenId: string, options = {}) => {
  navigation.current?.dispatch(StackActions.replace(screenId, options));
};

export const openScreenWithPush = (
  screenId: string,
  options = {},
  forcePushScreen: boolean,
) => {
  if (forcePushScreen) {
    const pushAction = StackActions.push(screenId, options);
    navigation.current?.dispatch(pushAction);
    return;
  }

  navigation.current?.navigate(screenId, options);
};

export const openStack = (stackId: string, screenId: string, options = {}) => {
  navigation.current?.navigate(stackId, {screen: screenId, params: options});
};

export const openStackWithReplace = (
  stackId: string,
  screenId: string,
  options = {},
) => {
  navigation.current?.dispatch(
    StackActions.replace(stackId, {screen: screenId, params: options}),
  );
};

// TODO: Add Home screen when reset
export const resetNavigator = (screenId: string) => {
  navigation.current?.navigate(screenId);
};

export const onNavigatorReady = () => {
  routeName.current = navigation?.current?.getCurrentRoute().name;
};

export const onNavigatorStateChange = () => {
  const currentRouteName = navigation?.current?.getCurrentRoute().name;

  routeName.current = currentRouteName;
};
