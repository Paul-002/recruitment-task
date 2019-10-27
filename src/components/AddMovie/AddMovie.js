import React, { Component } from 'react'
import { connect } from 'react-redux'
import './AddMovie.scss'
import { ReactComponent as ArrowOpen } from '../../assets/ARROW_OPEN.svg'
import { ReactComponent as ArrowClose } from '../../assets/ARROW_CLOSE.svg'
import * as actionCreators from '../../store/actions/actionCreators'
import BadgesWraper from '../../containers/AppUserMovie/BadgesWrapper/BadgesWrapper'
import { checkForValidity } from '../../shared/validation'
import SubmitButton from '../SubmitButton/SubmitButton'
import InputPlanetWrapper from '../../containers/AppUserMovie/InputPlanetWrapper/InputPlanetWrapper'
import InputMovieWrapper from '../../containers/AppUserMovie/InputMovieWrapper/InputMovieWrapper'

class AddMovie extends Component {
  state = {
    isExpanded: false,
    inputPlanetValue: '',
    userMovieTitle: '',
    planetBadges: [],
    userPlanetEndpoint: [],
    isValid: false,
  }

  toggleHandler = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }

  validateMovieInput = (inputName, value) => {
    this.setState({ isValid: checkForValidity(inputName, value) })
  }

  inputChangeHandler(e) {
    const inputName = e.target.name
    const value = e.target.value

    if (inputName === 'userMovieTitle') {
      this.setState({ [inputName]: value }, () =>
        this.validateMovieInput(inputName, value)
      )
    } else {
      this.setState({ [inputName]: value }, () => this.props.searchPlanet(value))
    }
  }

  onClickPlanetHandler = (planetName, planetEndpoint) => {
    const dataForCreateNewFilm = { name: planetName, endpoint: planetEndpoint }

    this.setState(prevState => ({
      inputPlanetValue: '',
      userPlanetEndpoint: prevState.userPlanetEndpoint.concat(dataForCreateNewFilm),
      planetBadges: prevState.planetBadges.concat(planetName),
    }))
  }

  deleteBadgeHandler = e => {
    const userPlanetEndpoint = [...this.state.userPlanetEndpoint]
    const planetBadges = [...this.state.planetBadges]

    this.setState({
      userPlanetEndpoint: userPlanetEndpoint.filter(
        item => item.name !== e.target.value
      ),
      planetBadges: planetBadges.filter(item => item !== e.target.value),
    })
  }

  onSubmitHandler = () => {
    const title = [this.state.userMovieTitle].reduce((a, b) => a + b)
    const allEndpoints = this.state.userPlanetEndpoint.map(item => {
      return item.endpoint
    })
    this.setState({ isValid: false, userMovieTitle: '' })
    this.props.setUserMovie(title, allEndpoints)
  }

  render() {
    const {
      isExpanded,
      planetBadges,
      isValid,
      userMovieTitle,
      inputPlanetValue,
    } = this.state
    const { searchPlanetResult } = this.props
    const currentHeight = isExpanded ? planetBadges.length * 42 + 220 : 0

    return (
      <div className={`panel2 ${isExpanded ? 'is-expanded' : ''}`}>
        <div className="panel2-item">
          <h3>Add movie</h3>
          <button onClick={this.toggleHandler}>
            {isExpanded ? <ArrowClose /> : <ArrowOpen />}
          </button>
        </div>
        <div className="panel2-collapse" style={{ height: currentHeight + 'px' }}>
          <div className="panel2-body">
            <div className="elements-container">
              <InputMovieWrapper
                userMovieTitle={userMovieTitle}
                inputMovieChange={e => this.inputChangeHandler(e)}
                showValidPrompt={isValid}
              />

              {planetBadges.length ? (
                <BadgesWraper
                  deleteBadge={this.deleteBadgeHandler}
                  planetBadges={planetBadges}
                />
              ) : null}

              <InputPlanetWrapper
                inputPlanetValue={inputPlanetValue}
                inputPlanetChange={e => this.inputChangeHandler(e)}
                onClickPlanetOption={this.onClickPlanetHandler}
                searchPlanetResult={inputPlanetValue ? searchPlanetResult : null}
              />

              <div className="button-align">
                <SubmitButton
                  onSubmit={this.onSubmitHandler}
                  disabled={!!!(planetBadges.length && isValid)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  selectedPlanet: state.appState.selectedPlanet,
  searchPlanetResult: state.appState.searchPlanetResult,
})

const mapDispatchToProps = dispatch => ({
  setUserMovie: (title, endpoints) =>
    dispatch(actionCreators.setUserMovie(title, endpoints)),
  searchPlanet: inputPlanetValue =>
    dispatch(actionCreators.searchPlanet(inputPlanetValue)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMovie)
