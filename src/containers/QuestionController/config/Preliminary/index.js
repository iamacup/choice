// @flow

// Generic card containers that take props to render out specifics
import MultiSelectCard from '../../../../components/cards/Generic/MultiSelect';
import SingleSelectWithPictureCard from '../../../../components/cards/Generic/SingleSelectWithPicture';

const startID = 'prelim-1';

const questions = [
  {
    id: 'prelim-1',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t know',
        initialWording: 'That\'s great, Here are a few questions to help work things out',
      },
      right: {
        text: 'Yes',
      },
      left: {
        text: 'No',
        initialWording: 'You\'re not alone! Here are a few questions to help show you some options',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Do you want to go to University?',
      picture: require('../../../../theme/images/CourseCards/Preliminary/one.png'),
      styleRatio: {
        top: 2,
        bottom: 5,
      },
    }
  },
  {
    id: 'prelim-2',
    size: 'large',
    disabled: {
      vertical: true,
      horizontal: true,
    },
    options: {

    },
    card: MultiSelectCard,
    cardProps: {
      options: [
        'I want to study somethign that is my passion',
        'I need a degree to get a job',
        'I want to experience the social life',
        'Other',
      ],
      questionText: 'Why do you want to go to University?',
      styleRatio: {
        top: 1,
        bottom: 5,
      },
    },
  },
  {
    id: 'prelim-3',
    size: 'large',
    disabled: {
      vertical: true,
      horizontal: true,
    },
    options: {

    },
    card: MultiSelectCard,
    cardProps: {
      options: [
        'Cost',
        'Don\'t see a benefit',
        'Am not clever enough',
        'Won\'t fit in',
        'Need special support',
        'Responsibilities at home',
      ],
      'questionText': 'Why don\'t you want to go to University?',
      'styleRatio': {
        top: 3,
        bottom: 10,
      },
    },
  },
];

const tree = [
  {
    id: 'prelim-1',
    next: [{
      withAnswer: ['Don\'t know', 'No'],
      id: 'prelim-3',
    },
    {
      withAnswer: ['Yes'],
      id: 'prelim-2',
    }]
  },
  {
    id: 'prelim-2',
    next: 'NEXT-SECTION',
  },
  {
    id: 'prelim-3',
    next: 'NEXT-SECTION',
  },
];

export default {
  startID,
  questions,
  tree,
};
