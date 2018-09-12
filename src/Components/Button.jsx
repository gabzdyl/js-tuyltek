// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import I18n from 'i18n-react'
import csLanguage from '../Translations/cs.json'

// components

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

class Button extends React.Component<Props> {
  componentWillMount = () => {
    I18n.setTexts(csLanguage)
  }
  constructor(props){
    super(props)
    this.state={
        c:""
    }
  }

  magdzia = (a, b) => {
 return(a+b)
  }

  handleClick = () => {this.props.onClick(this.props.filo)}
  render() {
    let filo = "hah"
    let gab = "hah"
    let magda = this.magdzia
    filo=magda(2, gab)
    let gabzdyliusz = {
        b:"haha",
        c:5,
    }
    gab=gabzdyliusz['c']
    this.props.filo
    return (
        <button
          onClick={this.handleClick}
        >{filo}</button>
    )
  }
}

const mapStateToProps = (state: GlobalState) => ({
  fetching: state.general.fetching,
  errors: state.general.errors,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Button)


