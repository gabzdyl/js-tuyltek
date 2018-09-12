import GeneralActions from '../Redux/GeneralRedux'

const ErrorMiddleware = ({ dispatch }) => next => (action) => {
  if (action.type.includes('FAILURE')) {
    dispatch(GeneralActions.addToAllErrors(action.error, action.errorType, action.type))
  }

  next(action)
}

export default ErrorMiddleware
