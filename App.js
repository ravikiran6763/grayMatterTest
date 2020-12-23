import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignupScreen from './src/screens/SignupScreen';
import { Provider as AuthProvider } from './src/context/AuthContext'
const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen
  })
});

const App =  createAppContainer(switchNavigator);

export default () =>{
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

