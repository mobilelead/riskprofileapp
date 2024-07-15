import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import questionStore from '../store/QuestionStore';
import {useNavigation} from '@react-navigation/native';

const ResultScreen: React.FC = () => {
  const navigation = useNavigation();

  const resetAndNavigate = () => {
    questionStore.reset();
    navigation.navigate('Question');
  };
  return (
    <View style={styles.container}>
      <View style={styles.scoreCard}>
        {/* <Text style={styles.score}>
          Total Score: {questionStore.totalScore}
        </Text> */}
        <Text style={styles.title}>
          Your Investment Risk Score is: {questionStore.totalScore}
        </Text>
        {/* <Text style={styles.score}>
          Total Score: {questionStore.totalScore}
        </Text> */}
        <Text style={styles.score}>
          Risk Profile: {questionStore.riskProfile}
        </Text>
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetAndNavigate}>
        <Text style={styles.resetButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreCard: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#ebf4f6',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  score: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  resetButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#3da4ab',
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ResultScreen;
