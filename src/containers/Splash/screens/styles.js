
import { StyleSheet } from 'react-native';
// import color from 'color';

import * as OurColors from '../../../theme/colors';

const styles: any = StyleSheet.create({

  // main layout stuff
  contentView: {
    flex: 1,
    backgroundColor: OurColors.contentBackground,
  },

  logoImage: {
    flex:1,
    height: undefined,
    width: undefined,
  },

  logoText: {
    color: OurColors.titleTextColor,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // badge bits
  loadingBadgeText: {
    fontSize: 20,
    color: OurColors.lightText,
    textAlign: 'center',
  },
  loadingBadge: {
    backgroundColor: OurColors.primaryColor,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 10,
    marginLeft: '4%',
    marginRight: '4%',
  },



});

export default styles;
