import React from 'react';
import {observer} from 'mobx-react-lite';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import questionStore from '../store/QuestionStore';
import {BUTTON_LABELS, TEXTS, SCREEN_NAME} from '../constants/strings';
import {COLORS} from '../constants/colors';

const QuestionScreen = () => {
  const navigation = useNavigation();

  const nextQuestion = () => {
    if (
      questionStore.selectedOptions[questionStore.currentQuestionIndex] === null
    ) {
      Alert.alert(`${TEXTS.alertOption}`);
    } else {
      if (
        questionStore.currentQuestionIndex <
        questionStore.questions.length - 1
      ) {
        questionStore.nextQuestion();
      } else {
        navigation.navigate(SCREEN_NAME.result);
      }
    }
  };

  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.questionCounter}>
          {TEXTS.questionCounter(
            questionStore.currentQuestionIndex + 1,
            questionStore.questions.length,
          )}
        </Text>
        <View style={styles.card}>
          <Text style={styles.questionText}>
            {
              questionStore.questions[questionStore.currentQuestionIndex]
                .question
            }
          </Text>
        </View>
        {questionStore.questions[
          questionStore.currentQuestionIndex
        ].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              questionStore.selectedOptions[
                questionStore.currentQuestionIndex
              ] === index && styles.selectedOptionButton,
            ]}
            onPress={() => questionStore.selectOption(index)}>
            <View
              style={[
                styles.optionText,
                questionStore.selectedOptions[
                  questionStore.currentQuestionIndex
                ] === index && styles.selectedOptionText,
              ]}>
              <Text style={styles.optionText}>{option.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
          <Text style={styles.nextButtonText}>{BUTTON_LABELS.next}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  main: {flex: 1, backgroundColor: 'white'},
  card: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: COLORS.cardBackground,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  questionCounter: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  optionButton: {
    width: '100%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: COLORS.optionButton,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  selectedOptionButton: {
    backgroundColor: '#65c3ba',
    borderColor: '#009688',
  },
  selectedOptionText: {
    color: '#fff',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  nextButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#3da4ab',
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#63ace5',
  },
  nextButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default observer(QuestionScreen);
