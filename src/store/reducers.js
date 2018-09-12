// @flow
import { combineReducers } from 'redux'

import { reducer as GeneralReduxReducer } from '../Redux/GeneralRedux'
import { reducer as UserDataReduxReducer } from '../Redux/UserDataRedux'

// types
import type { Store } from 'redux'
import type { GeneralState } from '../Redux/GeneralRedux'
import type { UserDataState } from '../Redux/UserDataRedux'

export type GlobalState = Store & {
  general: GeneralState,
  userData: UserDataState
}

export const makeRootReducer = (): GlobalState =>
	combineReducers({
    general: GeneralReduxReducer,
    userData: UserDataReduxReducer,
	})

export default makeRootReducer
