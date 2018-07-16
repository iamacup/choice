// @flow

// Generic card containers that take props to render out specifics
import SingleSelectWithPictureCard from '../../../../components/cards/Generic/SingleSelectWithPicture';
import WhichCourseAreasQuestion from '../../../../components/cards/Course/WhichCourseAreasQuestion';

const startID = 'courseChoices-1';

const questions = [
  {
    id: 'courseChoices-1',
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
        top: 2,
        bottom: 5,
      },
    },
  },
  {
    id: 'courseChoices-2',
    size: 'large',
    disabled: {
      vertical: true,
      horizontal: true,
    },
    options: {

    },
    card: WhichCourseAreasQuestion,
  },
];

const tree = [
  {
    id: 'courseChoices-1',
    next: [{
      withAnswer: ['Don\'t know', 'No'],
      id: 'NEXT-SECTION',
    },
    {
      withAnswer: ['Yes'],
      id: 'courseChoices-2',
    }]
  },
  {
    id: 'courseChoices-2',
    next: 'NEXT-SECTION',
  },
];

export default {
  startID,
  questions,
  tree,
};
