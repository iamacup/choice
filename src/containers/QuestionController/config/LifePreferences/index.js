// @flow

// Generic card containers that take props to render out specifics
import SingleSelectWithPictureCard from '../../../../components/cards/Generic/SingleSelectWithPicture';

const startID = 'lifePreferences-0';

const questions = [
  {
    id: 'lifePreferences-0',
    size: 'standard',
    priorityCard: true,
    options: {
      right: {
        text: 'Let\'s get started!',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Let\'s work out the fun stuff first!',
      picture: require('../../../../theme/images/CourseCards/Life/zero.png'),
      styleRatio: {
        top: 2,
        bottom: 5,
      },
    }
  },
  {
    id: 'lifePreferences-1',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t Know / Maybe!',
      },
      right: {
        text: 'Yes, I am a party animal 🎉🎉🎉',
      },
      left: {
        text: 'No, Netflix is the best 📺!',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Is nightlife important to you?',
      picture: require('../../../../theme/images/CourseCards/Life/two.png'),
      styleRatio: {
        top: 2,
        bottom: 5,
      },
    },
  },
  {
    id: 'lifePreferences-3',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t Know / Maybe!',
      },
      right: {
        text: 'Yes please 🏢!',
      },
      left: {
        text: 'I want my own space 🏠',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Want to stay in halls in your first year?',
      picture: require('../../../../theme/images/CourseCards/Life/three.png'),
      styleRatio: {
        top: 2,
        bottom: 5,
      },
    },
  },
  {
    id: 'lifePreferences-4',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t Know / Maybe!',
      },
      right: {
        text: 'For sure!',
      },
      left: {
        text: 'Probably not',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Do you want to play sport at uni?',
      picture: require('../../../../theme/images/CourseCards/Life/four.png'),
      styleRatio: {
        top: 2,
        bottom: 5,
      },
    },
  },
  {
    id: 'lifePreferences-5',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t Know / Maybe',
      },
      right: {
        text: '🎺🎺🎺 Yes please!',
      },
      left: {
        text: 'You don\'t want to hear me',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Will you want to join a band or the orchestra?',
      picture: require('../../../../theme/images/CourseCards/Life/five.png'),
      styleRatio: {
        top: 2,
        bottom: 5,
      },
    },
  },
  {
    id: 'lifePreferences-6',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t Know / Maybe',
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
      questionText: 'Do you to go to a big city university?',
      picture: require('../../../../theme/images/CourseCards/Life/six.png'),
      styleRatio: {
        top: 2,
        bottom: 5,
      },
    },
  },
];

const tree = [
  {
    id: 'lifePreferences-0',
    next: 'lifePreferences-1',
  },
  {
    id: 'lifePreferences-1',
    next: 'lifePreferences-3',
  },
  {
    id: 'lifePreferences-3',
    next: 'lifePreferences-4',
  },
  {
    id: 'lifePreferences-4',
    next: 'lifePreferences-5',
  },
  {
    id: 'lifePreferences-5',
    next: 'lifePreferences-6',
  },
  {
    id: 'lifePreferences-6',
    next: 'NEXT-SECTION',
  },
];

export default {
  startID,
  questions,
  tree,
};
