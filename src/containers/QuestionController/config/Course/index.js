// @flow

// Generic card containers that take props to render out specifics
import SingleSelectWithPictureCard from '../../../../components/cards/Generic/SingleSelectWithPicture';
import WhichCourseAreasQuestion from '../../../../components/cards/Course/WhichCourseAreasQuestion';

const startID = 'course-1';

const questions = [
  {
    id: 'course-1',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t know',
      },
      right: {
        text: 'Yes',
      },
      left: {
        text: 'No',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Do you know what course you want to study?',
      picture: require('../../../../theme/images/CourseCards/Course/one.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    },
  },
  {
    id: 'course-2',
    size: 'large',
    disabled: {
      vertical: true,
      horizontal: true,
    },
    options: {

    },
    card: WhichCourseAreasQuestion,
  },
  {
    id: 'course-3',
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
  {
    id: 'course-4',
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
    id: 'course-5',
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
    id: 'course-6',
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
    id: 'course-7',
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
      questionText: 'How important is the research reputation of the department?',
      picture: require('../../../../theme/images/CourseCards/Course/six.png'),
      styleRatio: {
        top: 2,
        bottom: 3,
      },
    }
  },
];

const tree = [
  {
    id: 'course-1',
    next: [{
      withAnswer: ['Don\'t know', 'No'],
      id: 'course-3',
    },
    {
      withAnswer: ['Yes'],
      id: 'course-2',
    }]
  },
  {
    id: 'course-2',
    next: 'course-3',
  },
  {
    id: 'course-3',
    next: 'course-4',
  },
  {
    id: 'course-4',
    next: 'course-5',
  },
  {
    id: 'course-5',
    next: 'course-6',
  },
  {
    id: 'course-6',
    next: 'course-7',
  },
  {
    id: 'course-7',
    next: 'NEXT-SECTION',
  },
];

export default {
  startID,
  questions,
  tree,
};
