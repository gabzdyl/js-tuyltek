// @flow
import React from 'react'
import { Provider } from 'react-redux'

import RootContainer from './RootContainer'

// types
import type { GlobalState } from '../store/reducers'

type Props = {
  store: GlobalState,
}

export default class AppContainer extends React.Component<Props> {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <RootContainer/>
        </div>
      </Provider>
    )
  }
}
