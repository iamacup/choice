
import { StyleSheet } from 'react-native';
// import color from 'color';

// import * as OurColors from '../../../theme/colors';

const styles: any = StyleSheet.create({

  // all the card layout jiggery pokery to get the direction arrows sorted
  cardRowTopBottom: {
    flex: 1,
    flexDirection: 'row',
  },
  cardRowContent: {
    flex: 14,
    flexDirection: 'row',
  },
  cardColLeftRight: {
    flex: 1,
  },
  cardColContent: {
    flex: 14,
  },
  cardHorizontalIndicator: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  cardVerticalIndicator: {
    justifyContent: 'center',
    flex: 1,
  },

  // emojis
  emojiText: {
    fontSize: 40,
  },
});

export default styles;
