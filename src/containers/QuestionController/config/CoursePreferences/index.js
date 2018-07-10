// @flow

// Generic card containers that take props to render out specifics
import SingleSelectWithPictureCard from '../../../../components/cards/Generic/SingleSelectWithPicture';
import WhichCourseAreasQuestion from '../../../../components/cards/Course/WhichCourseAreasQuestion';

const startID = 'coursePreferences-0';

const questions = [
  {
    id: 'coursePreferences-0',
    size: 'standard',
    priorityCard: true,
    options: {
      right: {
        text: 'Let\'s get started!',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: `Let's take a look at what university experience is best for you!`,
      picture: require('../../../../theme/images/UC.png'),   
      styleRatio: {
        top: 2,
        bottom: 3,
      },
    }
  },
  {
    id: 'coursePreferences-1',
    size: 'standard',
    options: {
      right: {
        text: 'Exams',
      },
      left: {
        text: 'Coursework',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Do you prefer coursework or exams?',
      picture: require('../../../../theme/images/CourseCards/Course/five.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    }
  },
  {
    id: 'coursePreferences-2',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t know',
      },
      right: {
        text: '20-40 hours a week',
      },
      left: {
        text: '10-20 hours a week',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'How much contact time are you expecting?',
      picture: require('../../../../theme/images/CourseCards/Course/three.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    }
  },
  {
    id: 'coursePreferences-3',
    size: 'standard',
    options: {
      right: {
        text: 'Lectures',
      },
      left: {
        text: 'Labs / Practicals / Discussion Groups',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Which way do you like to learn the most?',
      picture: require('../../../../theme/images/CourseCards/Course/four.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    }
  },
  {
    id: 'coursePreferences-4',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t know',
      },
      right: {
        text: 'Very important',
      },
      left: {
        text: 'Not important at all',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'How important is the research reputation of the university?',
      picture: require('../../../../theme/images/CourseCards/Course/six.png'),
      styleRatio: {
        top: 2,
        bottom: 3,
      },
    }
  },
  {
    id: 'coursePreferences-5',
    size: 'standard',
    options: {
      top: {
        text: 'I want to save money if i can',
      },
      right: {
        text: 'I don\'t mind, it\'s a loan after all',
      },
      left: {
        text: 'I really want the cheapest option',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'How much are you willing to pay for your course?',
      picture: require('../../../../theme/images/CourseCards/Course/two.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    }
  },
];

const tree = [
  {
    id: 'coursePreferences-0',
    next: 'coursePreferences-1',
  },
  {
    id: 'coursePreferences-1',
    next: 'coursePreferences-2',
  },
  {
    id: 'coursePreferences-2',
    next: 'coursePreferences-3',
  },
  {
    id: 'coursePreferences-3',
    next: 'coursePreferences-4',
  },
  {
    id: 'coursePreferences-4',
    next: 'coursePreferences-5',
  },
  {
    id: 'coursePreferences-5',
    next: 'NEXT-SECTION',
  },
];

export default {
  startID,
  questions,
  tree,
};
