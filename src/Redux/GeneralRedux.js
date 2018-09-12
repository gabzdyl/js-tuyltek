// @flow
// external libs
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import type { ImmutableType } from '../Types/ImmutableTypes'
import type { AllErrorType } from '../Types/ErrorTypes'
import type { ErrorType } from '../Types/ErrorTypes'
import type { TranslationType } from '../Types/TranslationType'
import type { ErrorTypeType } from '../Types/ErrorTypes'

/* ------------- Types and Action Creators ------------- */

export type GeneralState = {
  ...ImmutableType<GeneralState>,
  +errorsTimer: Date,
  +errors: Array<ErrorType>,
  +allErrors: Array<AllErrorType>,
  +fetching: number,
  +redirectUrl: string,
  +translations: TranslationType,
  +errorTranslations: TranslationType,
}

const { Types, Creators } = createActions({
  addToAllErrors: ['error', 'errorType', 'action'],
  onActionFailure: ['error', 'errorType'],
  onChangeRequestFailure: ['error', 'errorType'],
  onErrorsReset: null,
  onSetFetching: ['fetching'],
  onStartFetching: null,
  onStopFetching: null,
  onChangeRedirectUrl: ['redirectUrl'],
  translationsRequestSuccess: ['translations'],
  errorTranslationsRequestSuccess: ['errorTranslations'],
  onGetDefaultContentRequest: null,
  onGetDefaultContentRequestSuccess: null,
  setErrorsTimer: null,
  resetErrorsTimer: null,
})

export const GeneralTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const ERROR_TYPES = {
  INFO: 0,
  WARNING: 1,
  CRITICAL: 2,
}


export const INITIAL_STATE = Immutable({ // eslint-disable-line
  errorsTimer: null,
  errors: [],
  allErrors: [],
  fetching: 0,
  redirectUrl: '',
  translations: {},
  errorTranslations: {},
})

/* ------------- Reducers ------------- */

export const addToAllErrorsR = (state: GeneralState, { error, errorType, action }:
  { error: any, errorType: ErrorTypeType, action: string }): GeneralState => {
  const allErrors = state.allErrors.asMutable()
  if (!errorType) {
    errorType = ERROR_TYPES.WARNING
  }
  allErrors.push({ error, type: errorType, action, time: Date.now() })
  return state.merge({ allErrors })
}

export const onActionFailureR = (state: GeneralState, { error, errorType }: { error: any, errorType: ErrorTypeType }): GeneralState => {
  const errors = state.errors.asMutable()
  if (!errorType) {
    errorType = ERROR_TYPES.WARNING
  }
  errors.push({ error, type: errorType, time: Date.now() })
  return state.merge({ errors })
}

export const onChangeRequestFailureR = (state: GeneralState, { error, errorType }:
  { error: any, errorType: ErrorTypeType }): GeneralState => {
  const errors = state.errors.asMutable()
  if (!errorType) {
    errorType = ERROR_TYPES.CRITICAL
  }
  errors.push({ error, type: errorType, time: Date.now() })
  return state.merge({ errors })
}

export const resetErrors = (state: GeneralState): GeneralState =>
  state.merge({ errors: INITIAL_STATE.errors })

export const setFetching = (state: GeneralState, { fetching }: { fetching: number }): GeneralState =>
  state.merge({ fetching })

export const startFetching = (state: GeneralState): GeneralState =>
  setFetching(state, { fetching: state.fetching + 1 })

export const stopFetching = (state: GeneralState): GeneralState =>
  setFetching(state, { fetching: state.fetching > 0 ? state.fetching - 1 : 0 })

export const onChangeRedirectUrlR = (state: GeneralState, { redirectUrl }: { redirectUrl: string }): GeneralState =>
  state.merge({ redirectUrl })

export const translationsRequestSuccessR = (state: GeneralState, { translations }: { translations: TranslationType }): GeneralState =>
  state.merge({ translations })

export const errorTranslationsRequestSuccessR = (state: GeneralState, { errorTranslations }:
  { errorTranslations: TranslationType }): GeneralState =>
  state.merge({ errorTranslations })

export const setErrorsTimerR = (state: GeneralState): GeneralState =>
  state.merge({ errorsTimer: new Date().getTime() })

export const resetErrorsTimerR = (state: GeneralState): GeneralState =>
  state.merge({ errorsTimer: INITIAL_STATE.errorsTimer })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_ALL_ERRORS]: addToAllErrorsR,
  [Types.ON_ACTION_FAILURE]: onActionFailureR,
  [Types.ON_CHANGE_REQUEST_FAILURE]: onChangeRequestFailureR,
  [Types.ON_ERRORS_RESET]: resetErrors,
  [Types.ON_SET_FETCHING]: setFetching,
  [Types.ON_START_FETCHING]: startFetching,
  [Types.ON_STOP_FETCHING]: stopFetching,
  [Types.ON_CHANGE_REDIRECT_URL]: onChangeRedirectUrlR,
  [Types.TRANSLATIONS_REQUEST_SUCCESS]: translationsRequestSuccessR,
  [Types.ERROR_TRANSLATIONS_REQUEST_SUCCESS]: errorTranslationsRequestSuccessR,
  [Types.ON_GET_DEFAULT_CONTENT_REQUEST]: state => state,
  [Types.ON_GET_DEFAULT_CONTENT_REQUEST_SUCCESS]: state => state,
  [Types.SET_ERRORS_TIMER]: setErrorsTimerR,
  [Types.RESET_ERRORS_TIMER]: resetErrorsTimerR,
})
