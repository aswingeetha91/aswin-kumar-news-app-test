
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList,TouchableHighlight, TextInput,Dimensions, ActivityIndicator, Image, TouchableOpacity, Alert, NetInfo, PermissionsAndroid } from 'react-native';
import DetailView from '../Details/Details';
import store from '../Reducer/index';
import { StackNavigator } from 'react-navigation';


const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    navigate = props.navigation,

      this.state = {
        articles: [],
        searchArticles: [],
        text: ''
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
    else if (nextProps.type === 'Search') {
      this.setState({
        searchArticles:nextProps.searchData
      });

    }
    

  }


  newsDetailsSelect(rowData) {
    this.props.navigation.navigate('Details', {
      'details': [rowData],
    })

  }

  searchText(text)
  {
    // if(text !== undefined)
    //     this.props.callSearchAPI(text)
    
  }
  renderMessage = () => {
    if(this.state.searchArticles == undefined || this.state.searchArticles.length > 0){
        return(
          <FlatList
          data= {this.state.searchArticles}
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
        );
    }else{
        return(
          <FlatList
          data= {this.state.articles}
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
        );
    }
}

handleChange (text) {
 
}

clearText(){
  this.props.callServiceFeedNews()

}
  
  searchAction(text) {
    this.props.callSearchAPI(this.state.text)
 }
  render() {

    return (
      <View style={styles.container}>
         <View style={{ height:50, flexDirection:'row' }}>
         <View style = {{width:'85%',height:50,}}> 
         <TextInput
         clearButtonMode="always"
        style={{marginTop:10,marginLeft:10, height:30,width:'90%', borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        ref={component => this._textInput = component}
        onSubmitEditing={() => {
           this.clearText()
         }}
        // onChangeText = {this.searchText}
        value={this.state.text}
      />
      </View>
      <View style = {{width:'15%',height:50}}> 
      <TouchableHighlight onPress={() => this.searchAction()}>
    <Image style={{height:30,width:30,marginTop:10}} source={require('../Assets/search.png')} />
</TouchableHighlight>

      </View>
</View>
  
  {this.renderMessage()}
       
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

