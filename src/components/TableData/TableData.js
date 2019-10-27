import React, { Component } from 'react'
import './TableData.scss'
import { connect } from 'react-redux'

class TableData extends Component {
  state = {
    isLoaded: false,
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.isExpanded &&
      !this.state.isLoaded &&
      nextProps.planetsInfo !== this.props.planetsInfo
    ) {
      return true
    }
    return false
  }

  componentDidUpdate() {
    if (this.props.isExpanded) {
      this.setState(prevState => ({
        isLoaded: !prevState.isLoaded,
      }))
    }
  }

  render() {
    const { planetsInfo } = this.props

    return (
      <table>
        <thead>
          <tr>
            <th>Planet Name</th>
            <th>Rotation peroid</th>
            <th>Orbital peroid</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Surface water</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody className={!planetsInfo.length ? 'align-center' : ''}>
          {!planetsInfo.length ? (
            <tr>
              <td>Spinner</td>
            </tr>
          ) : (
            planetsInfo.map((planet, index) => (
              <tr key={`${index}${planet.data.name}`}>
                <td>{planet.data.name}</td>
                <td>{planet.data.rotation_period}</td>
                <td>{planet.data.orbital_period}</td>
                <td>{planet.data.diameter}</td>
                <td>{planet.data.climate}</td>
                <td>{planet.data.surface_water}</td>
                <td>{planet.data.population}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  planetsInfo: state.appState.planetsInfo,
})

export default connect(
  mapStateToProps,
  null
)(TableData)
