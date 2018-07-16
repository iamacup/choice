
import { StyleSheet } from 'react-native';
// import color from 'color';

import * as OurColors from '../../theme/colors';

const styles: any = StyleSheet.create({

  // we style the card content
  cardContentTrans: {
    flex: 1,
    justifyContent: 'space-around'
  },

  cardContent: {
    flex: 1,
    backgroundColor: OurColors.cardBackground,
  },

  cardContentPriority: {
    flex: 1,
    backgroundColor: OurColors.cardBackgroundPriority,
  },

  // text styles
  titleText: {
    color: OurColors.titleTextColor,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleTextTrans: {
    color: OurColors.titleTextColorTrans,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleTextPriority: {
    color: OurColors.titleTextColorPriority,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainTextColor: {
    color: OurColors.mainTextColor,
  },
  mainTextColorPriority: {
    color: OurColors.mainTextColorPriority,
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
