import * as ActionTypes from '../Action/actionTypes';
import { connect } from 'react-redux';
import {
    Alert, AsyncStorage,
} from 'react-native'
import axios from 'axios';
import DetailView from '../Details/DetailView';

const mapStateToProps = (state) => ({
    isLoading: state.serviceReducer.isLoading,
    error: state.serviceReducer.error,
    type: state.serviceReducer.type,
});



export default connect(mapStateToProps)(DetailView);