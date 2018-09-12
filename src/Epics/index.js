// external libs
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/from'
import { combineEpics } from 'redux-observable'

// epics
import GeneralEpic from './GeneralEpic'

const epics = [
  ...GeneralEpic,
]

const rootEpic = (action$, { getState }) =>
  combineEpics(...epics)(action$, { getState })

export default rootEpic
