
import { StyleSheet } from 'react-native';
import color from 'color';

import * as OurColors from '../../../theme/colors';

const styles: any = StyleSheet.create({

  // main layout stuff
  contentView: {
    flex: 1,
    backgroundColor: OurColors.contentBackground,
  },

  // setup swipers VERTICAL spacing
  swiperTopTopViewStandard: {
    flex: 0.5,
  },
  swiperTopViewStandard: {
    flex: 2,
    alignSelf: 'center',
  },
  swiperBottomViewStandard: {
    flex: 1.5,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  swiperTopTopViewLarge: {
    flex: 0.3,
  },
  swiperTopViewLarge: {
    flex: 0.5,
    alignSelf: 'center',
  },
  swiperBottomViewLarge: {
    flex: 0.4,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  swiperOuterView: {
    flexDirection: 'row',
    flex: 6,
    justifyContent: 'center',
  },

  // setup swipers HORIZONTAL spacing
  swiperInnerView: {
    flex: 14,
    justifyContent: 'center'
  },
  swiperLeftRightView: {
    flex: 1,
  },

  // other bits
  directionBadgeText: {
    fontSize: 20,
  },

});

export default styles;
