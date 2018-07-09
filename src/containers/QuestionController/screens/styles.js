
import { StyleSheet } from 'react-native';
// import color from 'color';

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
    flex: 0.4,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  swiperTopTopViewLarge: {
    flex: 0.2,
  },
  swiperTopViewLarge: {
    flex: 0.6,
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

  // badge bits
  directionBadgeText: {
    fontSize: 20,
    color: OurColors.lightText,
    textAlign: 'center',
  },
  directionBadge: {
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
