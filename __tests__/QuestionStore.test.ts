// __tests__/QuestionStore.test.js
import questionStore from '../src/store/QuestionStore';

test('initializes with correct values', () => {
  expect(questionStore.currentQuestionIndex).toBe(0);
  expect(questionStore.selectedOptions).toEqual([null, null, null, null, null]);
});

test('selectOption sets the correct option', () => {
  questionStore.selectOption(2);
  expect(questionStore.selectedOptions[0]).toBe(2);
});

test('nextQuestion increments the currentQuestionIndex', () => {
  questionStore.nextQuestion();
  expect(questionStore.currentQuestionIndex).toBe(1);
});

test('totalScore calculates the correct total score', () => {
  questionStore.selectedOptions = [0, 1, 2, 3, 3];
  expect(questionStore.totalScore).toBe(12);
});

test('riskProfile returns the correct risk profile', () => {
  questionStore.selectedOptions = [0, 1, 2, 3, 3];
  expect(questionStore.riskProfile).toBe('High Risk');
});

test('reset clears the store', () => {
  questionStore.reset();
  expect(questionStore.currentQuestionIndex).toBe(0);
  expect(questionStore.selectedOptions).toEqual([null, null, null, null, null]);
});
