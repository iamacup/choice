// @flow

// Generic card containers that take props to render out specifics
import SingleSelectWithPictureCard from '../../../../components/cards/Generic/SingleSelectWithPicture';
import SingleSelectCard from '../../../../components/cards/Generic/SingleSelect';
import SwipeDirecctionsCard from '../../../../components/cards/Guide/SwipeDirections';

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
      // we let them swipe any direction, with no text prompt
      left: {
        
      },
      bottom: {
        
      },
      top: {
        
      },
    },
    card: SingleSelectCard,
    cardProps: {
      questionText: `We're going to ask some questions

Swipe Right to answer 👉`,
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
        text: 'Yes',
        initialWording: 'Now the questions, you can change your answers any time using the menu button above.',
      },
      left: {
        text: 'No',
        initialWording: 'Now the questions, you can change your answers any time using the menu button above.',
      },
      top: {
        text: 'Don\'t know / maybe',
        initialWording: 'Now the questions, you can change your answers any time using the menu button above.',
      },
      bottom: {
        
      },
    },
    card: SwipeDirecctionsCard,
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
