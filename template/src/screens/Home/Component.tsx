import React from 'react';

import {Text, View} from 'react-native';
import t from '../../theme';

export const Component: React.FC = () => {
  return (
    <View style={[t.flexGrow, t.justifyCenter, t.itemsCenter]}>
      <Text style={[t.fontSansBold, t.text3xl]}>Boilerplate v1</Text>
    </View>
  );
};
