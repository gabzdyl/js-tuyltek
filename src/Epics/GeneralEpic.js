// external libs
import { Observable } from 'rxjs/Observable'

import Api from '../Services/Api'

// redux
import GeneralActions, { GeneralTypes } from '../Redux/GeneralRedux'

// types

const GeneralEpic = [
  (action$, store) => (
    action$.ofType(GeneralTypes.ON_GET_DEFAULT_CONTENT_REQUEST)
      .switchMap((action) => {
        return Observable.fromPromise(Api.getSomething())
          .switchMap((response) => {
            if (response.status === 200 && response.data.responseType === 'SUCCESS') {
              return Observable.of(GeneralActions.onGetDefaultContentRequestSuccess())
            }
            throw response
          })
          .catch(e => Observable.of(GeneralActions.onChangeRequestFailure(e)))
      })
  )
]

export default GeneralEpic
