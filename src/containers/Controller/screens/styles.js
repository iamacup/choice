import { StyleSheet } from 'react-native';

const styles: any = StyleSheet.create({
  titleView: {
    flex: 1,
  },
  titleText: {
    fontSize: 28,
    textAlign: 'center',
  },
  card: {
    borderWidth: 2,
    borderColor: '#E8E8E8',
    backgroundColor: '#ccc',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 'auto',
    height: 'auto',
  },
  cardText: {
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    backgroundColor: 'transparent'
  },
  cardRow1: {
    flex: 1,
    flexDirection: 'row',
  },
  cardRow2: {
    flex: 14,
    flexDirection: 'row',
  },
  cardRow3: {
    flex: 1,
    flexDirection: 'row',
  },
  cardCol1: {
    flex: 1,
  },
  cardCol2: {
    flex: 14,
  },
  cardCol3: {
    flex: 1,
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
  chevImage: {
    flex:1,
    height: undefined,
    width: undefined,
    opacity: 0.2,
  }

});

export default styles;
