import {makeAutoObservable} from 'mobx';

class QuestionStore {
  questions = [
    {
      question: 'How would you describe your investment knowledge?',
      options: [
        {text: 'Novice', points: 1},
        {text: 'Intermediate', points: 2},
        {text: 'Advanced', points: 3},
      ],
    },
    {
      question: 'Investment Duration',
      options: [
        {text: 'Short-term (less than 1 year)', points: 1},
        {text: 'Medium-term (1-5 years)', points: 2},
        {text: 'Long-term (more than 5 years)', points: 3},
      ],
    },
    {
      question: 'How comfortable are you with taking risks?',
      options: [
        {text: 'Very risk-averse', points: 1},
        {text: 'Somewhat risk-averse', points: 2},
        {text: 'Neutral Somewhat risk-averse', points: 3},
        {text: 'Very risk-tolerant', points: 4},
      ],
    },
    {
      question: 'What percentage of your income are you willing to invest?',
      options: [
        {text: 'Less than 10%', points: 1},
        {text: '10-20%', points: 2},
        {text: '25-50%', points: 3},
        {text: 'More than 50%', points: 4},
      ],
    },
    {
      question:
        'How would you react to a sudden drop in the value of your investments?',
      options: [
        {text: 'Panic and sell immediately', points: 1},
        {text: 'Monitor closely and consider selling', points: 2},
        {text: 'Hold and wait recovery', points: 3},
        {text: 'See it as a buying opportunity and invest more', points: 4},
      ],
    },
  ];

  currentQuestionIndex = 0;
  //   selectedOptions = [];
  selectedOptions: (number | null)[] = Array(this.questions.length).fill(null);

  constructor() {
    makeAutoObservable(this);
  }

  selectOption(optionIndex: number) {
    this.selectedOptions[this.currentQuestionIndex] = optionIndex;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex += 1;
    }
  }

  get totalScore() {
    return this.selectedOptions.reduce((total, optionIndex, questionIndex) => {
      if (
        optionIndex !== null &&
        this.questions[questionIndex].options[optionIndex]
      ) {
        return (
          total + this.questions[questionIndex].options[optionIndex].points
        );
      }
      return total;
    }, 0);
  }

  get riskProfile() {
    const totalScore = this.totalScore;
    if (totalScore <= 5) {
      return 'Low Risk';
    } else if (totalScore <= 10) {
      return 'Moderate Risk';
    } else {
      return 'High Risk';
    }
  }
  reset() {
    this.currentQuestionIndex = 0;
    this.selectedOptions = Array(this.questions.length).fill(null);
  }
}

const questionStore = new QuestionStore();
export default questionStore;
