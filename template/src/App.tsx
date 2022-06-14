import React from 'react';

import {SafeAreaView} from 'react-native';
import {Router} from './router/Router';
import t from './theme';

const App: React.FC = () => {
  return (
    <SafeAreaView style={[t.flexGrow]}>
      <Router />
    </SafeAreaView>
  );
};

export default App;
