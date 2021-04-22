import React from 'react';
import RootNavigator from './screens/RootNavigator'
import { LogBox } from "react-native";

LogBox.ignoreLogs([""]);

export default function App() {
  return (
      <RootNavigator />
  );
}
