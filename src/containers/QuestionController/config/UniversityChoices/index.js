// @flow

// Generic card containers that take props to render out specifics
import SingleSelectWithPictureCard from '../../../../components/cards/Generic/SingleSelectWithPicture';
import WhichUniQuestion from '../../../../components/cards/Uni/WhichUniQuestion';

const startID = 'uniChoices-1';

const questions = [
  {
    id: 'uniChoices-1',
    size: 'standard',
    options: {
      top: {
        text: 'Not sure',
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
      questionText: 'Have any idea which university / universities you want to attend?',
      picture: require('../../../../theme/images/UC.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    },
  },
  {
    id: 'uniChoices-2',
    size: 'large',
    disabled: {
      vertical: true,
      horizontal: true,
    },
    options: {
      
    },
    card: WhichUniQuestion,
  },
];

const tree = [
  {
    id: 'uniChoices-1',
    next: [{
      withAnswer: ['Not sure', 'No'],
      id: 'NEXT-SECTION',
    },
    {
      withAnswer: ['Yes'],
      id: 'uniChoices-2',
    }]
  },
  {
    id: 'uniChoices-2',
    next: 'NEXT-SECTION',
  },
];

export default {
  startID,
  questions,
  tree,
};
