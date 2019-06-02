
import React from "react";
import { View, Text, ListView, ActivityIndicator, Image, TouchableOpacity,StyleSheet, Alert,Dimensions } from "react-native";
import { StackNavigator } from 'react-navigation';
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export class DetailView extends React.Component {

  static navigationOptions = {
    title: 'Details',
  };

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.params = this.props.navigation.state.params;

    this.state = {
      dataSource: ds
    };
  }

  componentDidMount() {

    console.disableYellowBox = true;

  console.log(this.params)

  this.setState({
    dataSource: this.state.dataSource.cloneWithRows(this.params.details)
  });

  }

 
  renderNewsDetails(rowData) {


    return (
      <View style={styles.itemRow}>
        <View style={styles.inneritemRow}>
          <View style={{ flex: 1, flexDirection: 'column' }}>

            <View style={styles.details}>
              <Text style={styles.name} numberOfLines={2}>{rowData.title}</Text>

            </View>
            <Image
            source={{ uri: rowData.urlToImage }} style={styles.imageViewContainer}
          />
          <View style = {styles.detailsDesc}>
          <Text style = {styles.desc}>{rowData.description}</Text>
          </View>
           

          </View>
        </View>
      </View>
    );

  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderNewsDetails(rowData)}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  

  imageViewContainer: {
    width: deviceWidth - 20,
    marginLeft: 10,
    height: 320,
    borderRadius: 0,
    left: 0,

  },
  detailsDesc: {
    marginTop:20,
    width: deviceWidth - 20,
    marginLeft: 10,
    height: 200,

  },

  desc: { marginLeft: 10, fontSize: 16 },

  name: { marginLeft: 10, marginTop: 8, fontWeight: 'bold', fontSize: 18, color: '#3c3c3c' },

  itemRow: { flex: 1, flexDirection: 'row', height: ((deviceWidth - 20) / (1.5) + 160), width: deviceWidth },

  details: { marginLeft: 0, marginTop: 0, marginBottom: 13, marginRight: 10, width: '100%' },

  inneritemRow: { marginBottom: 0, marginLeft: 0, marginRight: 0, marginTop: 10, width: deviceWidth, backgroundColor: 'white' },


});

export default DetailView

