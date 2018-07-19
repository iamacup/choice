// @flow

/* eslint-disable react/no-array-index-key */

import * as React from 'react';
import PropTypes from 'prop-types';

import {
  View, FlatList, Button
} from 'react-native';
import {
  Text, Badge, Button as NBButton, Input, Icon
} from 'native-base';

import Card from '../../card';
import styles from '../../card/styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

const subjects = [
  { key: 'Cranfield University' },
  { key: 'Manchester School of Architecture' },
  { key: 'Arts University Bournemouth' },
  { key: 'University of Manchester' },
  { key: 'University of Salford' },
  { key: 'Royal Agricultural University' },
  { key: 'UCL Institute of Education' },
  { key: 'University of Leicester' },
  { key: 'Aberystwyth University' },
  { key: 'University of Kent' },
  { key: 'University of Edinburgh' },
  { key: 'De Montfort University' },
  { key: 'Canterbury Christ Church University' },
  { key: 'Queen Mary, University of London' },
  { key: 'Sheffield Hallam University' },
  { key: "King's College London" },
  { key: 'Royal College of Music' },
  { key: 'University of Sunderland' },
  { key: 'Open University' },
  { key: 'Lancaster University' },
  { key: 'Manchester Metropolitan University' },
  { key: 'Coventry University' },
  { key: 'University of Northampton' },
  { key: 'Staffordshire University' },
  { key: 'Newcastle University' },
  { key: 'University of the West of England' },
  { key: 'University of Wolverhampton' },
  { key: 'University of Huddersfield' },
  { key: 'Royal Northern College of Music' },
  { key: 'Institute of Zoology' },
  { key: 'BPP University' },
  { key: 'Abertay University' },
  { key: 'Harper Adams University' },
  { key: 'University of Southampton' },
  { key: 'Glasgow School of Art' },
  { key: 'New College of the Humanities' },
  { key: 'University of Sussex' },
  { key: 'University of Liverpool' },
  { key: 'University of St Andrews' },
  { key: 'University of Gloucestershire' },
  { key: 'Brighton and Sussex Medical School' },
  { key: 'Liverpool Hope University' },
  { key: 'Armagh Observatory' },
  { key: 'Bournemouth University' },
  { key: 'Birmingham City University' },
  { key: 'Norwich University of the Arts' },
  { key: 'University of Surrey' },
  { key: 'Liverpool Institute for Performing Arts' },
  { key: 'University of Brighton' },
  { key: 'Edge Hill University' },
  { key: 'Durham University' },
  { key: 'University of Central Lancashire' },
  { key: 'Leeds College of Music' },
  { key: 'University for the Creative Arts' },
  { key: 'University of East Anglia' },
  { key: 'University of Portsmouth' },
  { key: 'University of Buckingham' },
  { key: "The faculty of health, social care and education, Kingston University and St George's, University of London" },
  { key: 'Heriot-Watt University' },
  { key: 'Leeds Beckett University' },
  { key: 'University of East London' },
  { key: 'London School of Economics and Political Science' },
  { key: 'University College Birmingham' },
  { key: 'Bath Spa University' },
  { key: 'Bangor University' },
  { key: 'University of Chichester' },
  { key: 'Cardiff University' },
  { key: 'Hull York Medical School' },
  { key: 'University of Cumbria' },
  { key: 'Medway School of Pharmacy' },
  { key: 'Stranmillis University College' },
  { key: 'Nottingham Trent University' },
  { key: 'University of Reading' },
  { key: 'University of Strathclyde' },
  { key: 'Glyndŵr University' },
  { key: 'The University of Law' },
  { key: 'Ravensbourne' },
  { key: 'Queen Margaret University, Edinburgh' },
  { key: 'Leeds Trinity University' },
  { key: 'University of London International Programmes' },
  { key: 'University of Westminster' },
  { key: 'University of Nottingham' },
  { key: 'Keele University' },
  { key: 'Aston University, Birmingham' },
  { key: 'University of Wales, Trinity St David' },
  { key: 'University of Leeds' },
  { key: 'Trinity Laban Conservatoire of Music and Dance' },
  { key: 'Bishop Grosseteste University' },
  { key: 'University of Bradford' },
  { key: 'Leeds College of Art' },
  { key: 'Royal Central School of Speech & Drama, University of London' },
  { key: 'Swansea University' },
  { key: 'University of Exeter' },
  { key: 'University Campus Suffolk' },
  { key: 'Edinburgh Napier University' },
  { key: 'University of South Wales' },
  { key: 'University of Warwick' },
  { key: 'University of Stirling' },
  { key: 'London Business School' },
  { key: 'Birkbeck, University of London' },
  { key: 'University of Chester' },
  { key: "St Mary's University, Twickenham" },
  { key: 'Swansea Metropolitan University' },
  { key: 'Royal Welsh College of Music and Drama' },
  { key: 'University of the Arts London' },
  { key: "Scotland's Rural College" },
  { key: 'University Marine Biological Station, Millport' },
  { key: 'Edinburgh College of Art' },
  { key: 'Royal Academy of Music' },
  { key: 'Royal Conservatoire of Scotland' },
  { key: 'University of Worcester' },
  { key: 'Robert Gordon University' },
  { key: 'Newman University, Birmingham' },
  { key: 'Royal Holloway, University of London' },
  { key: 'British Institute in Paris' },
  { key: 'University of West London' },
  { key: 'University of St Mark & St John' },
  { key: 'Guildhall School of Music & Drama' },
  { key: 'University of the Highlands and Islands' },
  { key: 'Plymouth University' },
  { key: 'University of Winchester' },
  { key: 'City University London' },
  { key: 'Royal Veterinary College' },
  { key: 'Edge Hotel School' },
  { key: 'London School of Hygiene & Tropical Medicine' },
  { key: 'Glasgow Caledonian University' },
  { key: 'Heythrop College' },
  { key: 'The College of Estate Management' },
  { key: 'University of Cambridge' },
  { key: 'Bucks New University' },
  { key: 'Istituto Marangoni' },
  { key: 'University of Essex' },
  { key: 'Anglia Ruskin University' },
  { key: 'University of Oxford' },
  { key: 'Imperial College London' },
  { key: 'Falmouth University' },
  { key: 'University of Hertfordshire' },
  { key: 'The Courtauld Institute of Art' },
  { key: 'Goldsmiths, University of London' },
  { key: 'Institute of Cancer Research' },
  { key: "St Mary's University College, Belfast" },
  { key: 'School of Pharmacy, University of London' },
  { key: 'University of Lincoln' },
  { key: 'Royal College of Art' },
  { key: 'Conservatoire for Dance and Drama' },
  { key: 'University of Sheffield' },
  { key: 'University of Hull' },
  { key: 'University of Birmingham' },
  { key: 'University of Greenwich' },
  { key: 'Northumbria University' },
  { key: 'University of Ulster' },
  { key: 'London South Bank University' },
  { key: 'University of York' },
  { key: 'University of Aberdeen' },
  { key: 'University of Derby' },
  { key: 'University of Bedfordshire' },
  { key: 'Roehampton University' },
  { key: 'Cardiff Metropolitan University' },
  { key: 'Southampton Solent University' },
  { key: 'University of Glasgow' },
  { key: 'University of London' },
  { key: 'University of Bristol' },
  { key: 'Kingston University' },
  { key: 'Liverpool John Moores University' },
  { key: 'UCL (University College London)' },
  { key: 'Teesside University' },
  { key: 'Soas' },
  { key: 'Pearson College' },
  { key: 'Scottish Agricultural College' },
  { key: 'University of Bolton' },
  { key: 'Middlesex University' },
  { key: 'Writtle College' },
  { key: 'Brunel University London' },
  { key: 'University of Wales Centre for Advanced Welsh and Celtic Studies' },
  { key: 'University of the West of Scotland' },
  { key: 'Oxford Brookes University' },
  { key: 'University of Dundee' },
  { key: 'Rose Bruford College' },
  { key: 'York St John University' },
  { key: 'Loughborough University' },
  { key: "Queen's University Belfast" },
  { key: 'University of Bath' },
  { key: 'London Metropolitan University' },
  { key: "St George's, University of London" },
];

export default class CardContent extends Card {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filteredData: [],
      display: 'none',
    };
  }

  handlePick(item) {
    const { data } = this.state;
    if (this.state.data.length < 3) {
      if (!(data.indexOf(item) > -1)) {
        data.push(item);
        this.setState({ data });
      }
    }
  }

  handleUnpick(item) {
    const { data } = this.state;

    data.splice(data.indexOf(item), 1);

    this.setState({ data });
  }

  handleChange(text) {
    const filteredData = subjects.filter((item) => {
      if (item.key.toLowerCase().includes(text.toLowerCase())) return item;
      else return null;
    });

    this.setState({ filteredData });
  }

  handleSearch() {
    let { display } = this.state;

    if ( display === 'none' ) display = 'flex';
    else display = 'none';

    this.setState({ display });
  }


  render() {
    let filteredData = subjects;
    if (this.state.filteredData.length > 0)  filteredData = this.state.filteredData;

    return (
      <View style={styles.cardContentTrans}>
        <View style={{ flex: 3, alignSelf: 'center', marginTop: 4 }}>
          <Text style={styles.titleTextTrans}>
            Select up to 3 universities you are interested in.
          </Text>
        </View>
        <View style={{ flex: 6, justifyContent: 'center' }}>

          <View style={{
            height: '130%', backgroundColor: '#909090', width: '100%', alignSelf: 'center', borderRadius: 10,
          }}
          >
            <View style={{
              flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '15%'
            }}
            >
              <View style={{ width: '80%' }}>
                <Input placeholderTextColor='white' placeholder='Search' onChangeText={text => this.handleChange(text)} style={{ display: this.state.display, }} />
              </View>
              <View>
                <Text onPress={() => this.handleSearch()}>
                  <Icon name='ios-search' style={{ color: 'white' }} />
                </Text>
              </View>
            </View>
            <View style={{ height: '85%' }}>
              <FlatList
                data={filteredData}
                renderItem={({ item }) => (
                  <View>
                    <Button onPress={() => this.handlePick(item.key)} title={item.key} color='white' />
                  </View>
                )}
              />
            </View>
          </View>
        </View>

        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {this.state.data.map((value, i) => (
              <Badge key={i} onPress={() => { this.handleUnpick(value); }} style={{ margin: 2 }} primary>
                <Text onPress={() => { this.handleUnpick(value); }}>
                  {value}
                </Text>
              </Badge>
            ))}
          </View>
        </View>

        <View style={{
          flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
        }}
        >
          <NBButton onPress={() => { this.props.doneCallback(); }} primary>
            <Text>
              Done
            </Text>
          </NBButton>
        </View>
      </View>
    );
  }
}

CardContent.propTypes = {
  doneCallback: PropTypes.func.isRequired,
};
