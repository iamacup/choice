
import { StyleSheet } from 'react-native';
// import color from 'color';

import * as OurColors from '../../theme/colors';

const styles: any = StyleSheet.create({

  // we style the cards
  cardInner: {
    flex: 1,
  },
  //this has to have the full cardOuter set of styles on it, as it will override them if not, but the only difference is the backgroundColor
  cardInnerPriority: {
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 'auto',
    height: 'auto',
    backgroundColor: OurColors.cardBackgroundPriority,
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

  //this set of styles needs to be replicated up to cardInnerPriority, but the difference is the background
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

});

export default styles;
