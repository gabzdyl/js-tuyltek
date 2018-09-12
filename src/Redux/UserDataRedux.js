// @flow
// external libs
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import type { ValueObject } from '../Types/ValuesType'
import type { ImmutableType } from '../Types/ImmutableTypes'

/* ------------- Types and Action Creators ------------- */

export type UserDataState = {
  ...ImmutableType<UserDataState>,
  +data: ValueObject,
}

const { Types, Creators } = createActions({
  userDataSetValue: ['key', 'value'],
})

export const UserDataTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({ // eslint-disable-line
	data: {},
})

/* ------------- Reducers ------------- */

export const userDataSetValueR = (state: UserDataState, { key, value }: { key: string, value: ValueObject }): UserDataState =>
  state.setIn(['data', key], value)

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_DATA_SET_VALUE]: userDataSetValueR,
})
