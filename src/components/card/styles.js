
import { StyleSheet } from 'react-native';
import color from 'color';

import * as OurColors from '../../theme/colors';

const styles: any = StyleSheet.create({

  // we style the card content
  cardContent: {
    flex: 1,
    justifyContent: 'space-around'
  },

  // text styles
  titleText: {
    color: OurColors.titleTextColor,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainTextColor: {
    color: OurColors.mainTextColor,
  },

  // image styles
  iconImage: {
    flex:1,
    height: undefined,
    width: undefined,
    marginLeft: '10%',
    marginRight: '10%',
  },

});

export default styles;
