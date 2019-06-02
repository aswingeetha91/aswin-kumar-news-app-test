
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TextInput, ActivityIndicator, Image, TouchableOpacity, Alert, NetInfo, PermissionsAndroid } from 'react-native';
import DetailView from '../Details/Details';
import store from '../Reducer/index';
import { StackNavigator } from 'react-navigation';



export class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    navigate = props.navigation,

      this.state = {
        articles: []

      };


  }

  componentDidMount()
  {
    console.disableYellowBox = true;
    this.props.callServiceFeedNews()

  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.type === 'news') {
      this.setState({
        articles:nextProps.newsData
      });

    }
    

  }


  newsDetailsSelect(rowData) {
    this.props.navigation.navigate('Details', {
      'details': [rowData],
    })

  }

  

  render() {

    return (
      <View style={styles.container}>
      <View style={{ height:40}}>
      <Text style={styles.header}> Your Daily Read </Text>
</View>
        <FlatList
          data={this.state.articles}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.newsDetailsSelect(item)} >
          <View style={styles.flatview}>
          <View style = {styles.TitleView}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
            </View>
            <View style = {styles.ImgView}>
           
      <Image style={styles.profile} resizeMode='contain' source={{ uri: item.urlToImage }}></Image>
        
              </View>
          </View>
          </TouchableOpacity>

          }
          keyExtractor={item => item.author}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  
    flatview: {
      flexDirection: 'row',
      // width:'100%'
    },
    TitleView: {
     width:'65%',
     height:120,
    },
    profile:{
       width: '70%', height:80, alignSelf: 'center' 
    },
    ImgView: {
     width:'35%',
     height:120,
    },
    header: {
      marginTop:10,
      fontFamily: 'Verdana',
      fontSize: 18
    },
    title: {
      left:5,
      fontFamily: 'Verdana',
      fontSize: 15,
      fontWeight: 'bold',
    },
    author: {
      left: 10, 
      color: 'grey',
      fontSize: 15,
    }
    
  });

export default HomeScreen

