// __tests__/QuestionScreen.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuestionScreen from '../src/screens/QuestionScreen';
import questionStore from '../src/store/QuestionStore';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

test('renders correctly and matches snapshot', () => {
  const {toJSON} = render(<QuestionScreen />);
  expect(toJSON()).toMatchSnapshot();
});

test('alerts when no option is selected and "Next" button is pressed', () => {
  const alertMock = jest.spyOn(global, 'alert');
  const {getByText} = render(<QuestionScreen />);
  const nextButton = getByText('Next');
  fireEvent.press(nextButton);
  expect(alertMock).toHaveBeenCalledWith(
    'Please select an option before proceeding.',
  );
  alertMock.mockRestore();
});

test('navigates to "Result" when all questions are answered and "Next" button is pressed', () => {
  const {getByText} = render(<QuestionScreen />);
  const nextButton = getByText('Next');

  // Simulate answering all questions
  questionStore.selectedOptions = [0, 0, 0, 0, 0];

  fireEvent.press(nextButton);
  expect(useNavigation().navigate).toHaveBeenCalledWith('Result');
});
