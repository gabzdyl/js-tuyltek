// @flow
import React from 'react'
import { connect } from 'react-redux'
import I18n from 'i18n-react'
import csLanguage from '../Translations/cs.json'

// components
import Button from '../Components/Button'

// redux
import GeneralActions from '../Redux/GeneralRedux'
import UserDataActions from '../Redux/UserDataRedux'

// types
import type { GlobalState } from '../store/reducers'
import type { ErrorType } from '../Types/ErrorTypes'

type StateProps = {
  fetching: number,
  errors: Array<ErrorType>,
}

type DispatchProps = {}

type Props = StateProps & DispatchProps

class RootScreen extends React.Component<Props> {
  componentWillMount = () => {
    I18n.setTexts(csLanguage)
  }
  constructor(props){
    super(props)
    this.state={
        a:0
    }
  }
  handleClick = (name) => {
    let a
    if (name === 'hahahahahahahaha') {
      a = this.state.a +1
    } else {
      a = this.state.a -1
    }
    this.setState({
      a:a
    })
  }

  render() {
    return (
      <div className='body-full'>
        <div className='main-body'>
          <Button onClick={this.handleClick} filo="hahahahahahahaha" />
          <Button onClick={this.handleClick} filo="gabatko" />
          <div>{this.state.a}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: GlobalState) => ({
  fetching: state.general.fetching,
  errors: state.general.errors,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen)


