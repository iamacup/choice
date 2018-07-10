// @flow

// Generic card containers that take props to render out specifics
import SingleSelectWithPictureCard from '../../../../components/cards/Generic/SingleSelectWithPicture';
import SingleSelectCard from '../../../../components/cards/Generic/SingleSelect';

const startID = 'guide-1';

const questions = [
  {
    id: 'guide-1',
    size: 'standard',
    priorityCard: true,
    flashArrows: true,
    options: {
      right: {
        text: 'OK, Got it!',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: `We're going to ask some questions

Swipe cards like this to answer`,
      picture: require('../../../../theme/images/rightArrow.png'),
      styleRatio: {
        top: 4,
        bottom: 2,
      },
    }
  },
  {
    id: 'guide-2',
    size: 'standard',
    priorityCard: true,
    flashArrows: true,
    options: {
      right: {
        text: 'Right on! 😃',
        initialWording: 'Now the questions, you can change your answers any time using the menu button above.',
      },
      left: {
        text: 'To the left, to the left 🎵🎵🎵',
        initialWording: 'Now the questions, you can change your answers any time using the menu button above.',
      },
      bottom: {
        text: '👇👇👇',
        initialWording: 'Now the questions, you can change your answers any time using the menu button above.',
      },
      top: {
        text: '🆙🆙🆙',
        initialWording: 'Now the questions, you can change your answers any time using the menu button above.',
      },
    },
    card: SingleSelectCard,
    cardProps: {
      questionText: `Hold the card and move it around to see the different answers

Arrows on the side will show you which way a card can be swiped`,
      picture: require('../../../../theme/images/rightArrow.png'),
    }
  },
];

const tree = [
  {
    id: 'guide-1',
    next: 'guide-2',
  },
  {
    id: 'guide-2',
    next: 'NEXT-SECTION',
  },
];

export default {
  startID,
  questions,
  tree,
};
