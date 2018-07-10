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
      questionText: 'Let\'s work out what university location experience is best for you!',
      picture: require('../../../../theme/images/UC.png'),
      styleRatio: {
        top: 2,
        bottom: 3,
      },
    }
  },
  {
    id: 'lifePreferences-1',
    size: 'standard',
    options: {
      top: {
        text: 'Weekends only!',
      },
      right: {
        text: 'I am a party animal 🎉🎉🎉',
      },
      left: {
        text: 'Netflix is the best',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'What does nightlife need to look like for you?',
      picture: require('../../../../theme/images/UC.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    },
  },
  {
    id: 'lifePreferences-1',
    size: 'standard',
    options: {
      top: {
        text: 'Weekends only!',
      },
      right: {
        text: 'I am a party animal 🎉🎉🎉',
      },
      left: {
        text: 'Netflix is the best',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'What does nightlife need to look like for you?',
      picture: require('../../../../theme/images/UC.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    },
  },
  {
    id: 'lifePreferences-2',
    size: 'standard',
    options: {
      top: {
        text: 'In a coffee shop',
      },
      right: {
        text: 'Out doing something crazy',
      },
      left: {
        text: 'Watching YouTube or TV',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'During the day when not working, you are most likely...',
      picture: require('../../../../theme/images/UC.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    },
  },
  {
    id: 'lifePreferences-3',
    size: 'standard',
    options: {
      top: {
        text: 'With a small group of people',
      },
      right: {
        text: 'Halls, with as many people as possible',
      },
      left: {
        text: 'I want my own space',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Where do you want to live?',
      picture: require('../../../../theme/images/UC.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    },
  },
  {
    id: 'lifePreferences-4',
    size: 'standard',
    options: {
      top: {
        text: 'Casual and recreational sport for me!',
      },
      right: {
        text: 'I want to be on the first team',
      },
      left: {
        text: 'I don\'t play sport',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Sport?',
      picture: require('../../../../theme/images/UC.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    },
  },
  {
    id: 'lifePreferences-5',
    size: 'standard',
    options: {
      top: {
        text: 'I play an instrument',
      },
      right: {
        text: 'I want to be in a band / the orchestra',
      },
      left: {
        text: 'I don\'t play an instrument',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Music?',
      picture: require('../../../../theme/images/UC.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    },
  },
  {
    id: 'lifePreferences-6',
    size: 'standard',
    options: {
      top: {
        text: 'I am happy to go wherever the best university/course is',
      },
      right: {
        text: 'London rent and prices are fine',
      },
      left: {
        text: 'I want to save as much money as possible',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Money?',
      picture: require('../../../../theme/images/UC.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
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
    next: 'lifePreferences-2',
  },
  {
    id: 'lifePreferences-2',
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
