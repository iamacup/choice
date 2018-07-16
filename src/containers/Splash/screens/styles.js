
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

  // badge bits
  loadingText: {
    fontSize: 20,
    color: OurColors.lightText,
    textAlign: 'center',
    fontWeight: 'bold',
  },

});

export default styles;
