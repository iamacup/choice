// @flow

// Generic card containers that take props to render out specifics
import SingleSelectWithPictureCard from '../../../../components/cards/Generic/SingleSelectWithPicture';

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
      questionText: 'Let\'s take a look at what university experience is best for you!',
      picture: require('../../../../theme/images/CourseCards/Course/zero.png'),
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
      top: {
        text: 'Don\'t know',
      },
      right: {
        text: 'Coursework all the way!',
      },
      left: {
        text: 'Exams are my jam',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Would you rather do coursework over exams?',
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
        text: 'Yes, loads of lectures',
      },
      left: {
        text: 'Independant study works better for me',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Do you want more lectures than independant study?',
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
      top: {
        text: 'Don\'t know',
      },
      right: {
        text: 'More lectures',
      },
      left: {
        text: 'Labs / Practicals / Discussion Groups are the way to go!',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Do you want more lectures than hands-on / practical time?',
      picture: require('../../../../theme/images/CourseCards/Course/four.png'),
      styleRatio: {
        top: 2,
        bottom: 3,
      },
    }
  },
  {
    id: 'coursePreferences-4',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t know / Maybe',
      },
      right: {
        text: 'Yes, it\'s important',
      },
      left: {
        text: 'Not important at all',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Do you care about the research reputation of the university?',
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
        text: 'Don\'t know / maybe',
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
      questionText: 'Would you choose a university course on price alone?',
      picture: require('../../../../theme/images/CourseCards/Course/two.png'),
      styleRatio: {
        top: 2,
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
