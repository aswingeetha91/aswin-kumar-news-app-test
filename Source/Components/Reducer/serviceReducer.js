import * as Actions from '../Action/actionTypes'

const serviceReducer = (state = { isLoading: false, error: undefined, type: '', newsData: [] }, action) => {
    switch (action.type) {
        case Actions.NEWS_SERVICE_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.NEWS_SERVICE_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.NEWS_SERVICE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                newsData:action.newsData,
                type: 'news'
            });
        default:
            return state;
    }
}

export default serviceReducer;