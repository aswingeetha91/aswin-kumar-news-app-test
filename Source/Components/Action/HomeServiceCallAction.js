import * as ActionTypes from '../Action/actionTypes';
import { connect } from 'react-redux';
import {
    Alert, AsyncStorage,
} from 'react-native'
import HomeScreen from '../Home/HomeScreen';
import axios from 'axios';

const API_KEY = '9b64bcfe576047ba8e5bb7fd24c9e526'

const mapStateToProps = (state) => ({
    isLoading: state.serviceReducer.isLoading,
    error: state.serviceReducer.error,
    type: state.serviceReducer.type,
    newsData: state.serviceReducer.newsData,
    searchData: state.serviceReducer.searchData,

});

const mapDispatchToProps = (dispatch) => ({
    callServiceFeedNews: () => dispatch(callServiceFeedNewsData()),
    callSearchAPI:(data) => dispatch(callServiceSearchAPI(data))

})

export const callServiceFeedNewsData = () => {

    return dispatch => {

        dispatch(serviceActionNewsPending())
        axios.get(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${API_KEY}`)
            .then(response => {
                dispatch(serviceActionNewsSuccess(response.data.articles))
            })
            .catch(error => {
                dispatch(serviceActionNewsError(error))
            });
    }
}

export const callServiceSearchAPI = (data) => {

    return dispatch => {
        
        dispatch(serviceSearchActionNewsPending())
        axios.get(`https://newsapi.org/v2/everything?q=${data}&sortBy=popularity&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526`)
            .then(response => {
                dispatch(serviceSearchActionNewsSuccess(response.data.articles))
            })
            .catch(error => {
                dispatch(serviceSearchActionNewsError(error))
            });
    }
}

export const serviceSearchActionNewsPending = () => ({
    type: ActionTypes.NEWS_SEARCH_SERVICE_PENDING,
})

export const serviceSearchActionNewsError = (error) => ({
    type: ActionTypes.NEWS_SEARCH_SERVICE_ERROR,
    error: error
})

export const serviceSearchActionNewsSuccess = (searchData) => ({
    type: ActionTypes.NEWS_SEARCH_SERVICE_SUCCESS,
    searchData: searchData,

})

export const serviceActionNewsPending = () => ({
    type: ActionTypes.NEWS_SERVICE_PENDING,
})

export const serviceActionNewsError = (error) => ({
    type: ActionTypes.NEWS_SERVICE_ERROR,
    error: error
})

export const serviceActionNewsSuccess = (newsData) => ({
    type: ActionTypes.NEWS_SERVICE_SUCCESS,
    newsData: newsData,

})


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);