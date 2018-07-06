
import { StyleSheet } from 'react-native';
import color from 'color';

const contentBackground = '#2a2c33';
const cardBackground = '#22252a';

const titleTextColor = '#9ba1ae';
const mainTextColor = '#3e434c';
const seperatorColor = '#7dc0ed';

const styles: any = StyleSheet.create({

  // we style the card content
  cardContent: {
    flex: 1,
    justifyContent: 'space-around'
  },

  // text styles
  titleText: {
    color: titleTextColor,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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
