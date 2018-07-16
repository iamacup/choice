
import { StyleSheet } from 'react-native';
// import color from 'color';

import * as OurColors from '../../theme/colors';

const styles: any = StyleSheet.create({

  // we style the cards
  cardOuter: {
    justifyContent: 'flex-end',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 'auto',
    height: 'auto',
    backgroundColor: 'transparent',
    // borderRadius: 2,
    // borderColor: color(cardBackground).darken(0.03).hex(),
    // borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.2,
  },

});

export default styles;
