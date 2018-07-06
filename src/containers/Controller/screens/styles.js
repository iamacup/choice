
import { StyleSheet } from 'react-native';
import color from 'color';

const contentBackground = '#2a2c33';
const cardBackground = '#22252a';

const titleTextColor = '#9ba1ae';
const mainTextColor = '#3e434c';
const seperatorColor = '#7dc0ed';

const styles: any = StyleSheet.create({

  // main layout stuff
  contentView: {
    flex: 1,
    backgroundColor: contentBackground,
  },

  // setup swipers VERTICAL spacing
  swiperTopTopView: {
    flex: 0.5,
  },
  swiperTopView: {
    flex: 2,
    alignSelf: 'center',
  },
  swiperOuterView: {
    flexDirection: 'row',
    flex: 6,
    justifyContent: 'center',
  },
  swiperBottomView: {
    flex: 1.5,
    justifyContent: 'center',
    alignSelf: 'center',
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
