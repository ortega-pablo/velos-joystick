import { View, Text } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { screens } from "../screens";

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Welcome'
        component={screens.Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='BluetoothPairing'
        component={screens.BluetoothPairing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Home'
        component={screens.Home}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
