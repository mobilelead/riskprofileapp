import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from '../App';
import questionStore from '../src/store/QuestionStore';
// Mocking react-navigation's useNavigation
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

// Mock the store to prevent side effects
jest.mock('./src/store/QuestionStore');

describe('App', () => {
  beforeEach(() => {
    // Reset the store before each test
    questionStore.reset();
  });

  test('renders the home screen initially', () => {
    const {getByText} = render(<App />);
    expect(getByText('Question')).toBeTruthy();
  });
});
