
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
  titleText: {
    fontSize: 28,
    textAlign: 'center',
  },
  directionBadgeText: {
    fontSize: 20,
  },

  // we style the card content
  cardContent: {
    flex: 1,
    justifyContent: 'space-around'
  },

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
    backgroundColor: cardBackground,
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
    opacity: 0.2,
  },
  iconImage: {
    flex:1,
    height: undefined,
    width: undefined,
    marginLeft: '10%',
    marginRight: '10%',
  },

  // text styles
  titleText: {
    color: titleTextColor,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // seperator
  seperator: {
    borderBottomColor: seperatorColor,
    borderBottomWidth: 1,
    marginLeft: '42%',
    marginRight: '42%',
  },

});

export default styles;
