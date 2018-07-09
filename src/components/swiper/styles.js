
import { StyleSheet } from 'react-native';
import color from 'color';

import * as OurColors from '../../theme/colors';

const styles: any = StyleSheet.create({

  // we style the cards
  cardInner: {
    flex: 1,
  },
  cardOuter: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 'auto',
    height: 'auto',
    backgroundColor: OurColors.cardBackground,
    borderRadius: 8,
    // borderColor: color(cardBackground).darken(0.03).hex(),
    // borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
  },

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

  // image style
  chevImage: {
    flex:1,
    height: undefined,
    width: undefined,
    opacity: OurColors.chevronOpacity,
  },

});

export default styles;
