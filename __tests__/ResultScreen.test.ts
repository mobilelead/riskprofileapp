// __tests__/ResultScreen.test.js
import {render, fireEvent} from '@testing-library/react-native';
import questionStore from '../src/store/QuestionStore';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

test('renders correctly and matches snapshot', () => {
  const {toJSON} = render(<ResultScreen />);
  expect(toJSON()).toMatchSnapshot();
});

test('resets the store and navigates to "Question" when "Done" button is pressed', () => {
  const {getByText} = render(<ResultScreen />);
  const doneButton = getByText('Done');
  fireEvent.press(doneButton);
  expect(questionStore.currentQuestionIndex).toBe(0);
  expect(questionStore.selectedOptions).toEqual([null, null, null, null, null]);
  expect(useNavigation().navigate).toHaveBeenCalledWith('Question');
});
