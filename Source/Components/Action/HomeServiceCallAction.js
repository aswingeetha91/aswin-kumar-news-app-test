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
});

const mapDispatchToProps = (dispatch) => ({
    callServiceFeedNews: () => dispatch(callServiceFeedNewsData()),
})

export const callServiceFeedNewsData = () => {

    return dispatch => {

        dispatch(serviceActionRestuarantDetailsPending())
        axios.get(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${API_KEY}`)
            .then(response => {
                dispatch(serviceActionRestuarantDetailsSuccess(response.data.articles))
            })
            .catch(error => {
                dispatch(serviceActionRestuarantDetailsError(error))
            });
    }
}

export const serviceActionRestuarantDetailsPending = () => ({
    type: ActionTypes.NEWS_SERVICE_PENDING,
})

export const serviceActionRestuarantDetailsError = (error) => ({
    type: ActionTypes.NEWS_SERVICE_ERROR,
    error: error
})

export const serviceActionRestuarantDetailsSuccess = (newsData) => ({
    type: ActionTypes.NEWS_SERVICE_SUCCESS,
    newsData: newsData,

})


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);