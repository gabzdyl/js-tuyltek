import GeneralActions from '../Redux/GeneralRedux'

const FetchingMiddleware = ({ dispatch }) => next => (action) => {
  if (action.type.includes('REQUEST_SUCCESS') || action.type.includes('REQUEST_FAILURE')) {
    dispatch(GeneralActions.onStopFetching())
  } else if (action.type.includes('REQUEST') && !action.type.includes('SET_')) {
    dispatch(GeneralActions.onStartFetching())
  }

  next(action)
}

export default FetchingMiddleware
