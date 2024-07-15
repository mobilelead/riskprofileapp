import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuestionScreen from '../screens/QuestionScreen';
import ResultScreen from '../screens/ResultScreen';
import {SCREEN_NAME, SCREEN_TITLE} from '../constants/strings';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuestionScreen">
        <Stack.Screen
          name={SCREEN_NAME.question}
          component={QuestionScreen}
          options={{title: SCREEN_TITLE.question}} // Custom title for QuestionScreen
        />
        <Stack.Screen name={SCREEN_NAME.result} component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
