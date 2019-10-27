import React, { Component } from 'react'
import { ReactComponent as ArrowOpen } from '../../assets/ARROW_OPEN.svg'
import { ReactComponent as ArrowClose } from '../../assets/ARROW_CLOSE.svg'
import './MovieItem.scss'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/actionCreators'
import TableData from '../TableData/TableData'

class MovieItem extends Component {
  state = {
    isExpanded: false,
  }

  makeRequest = endpoints => {
    if (this.state.isExpanded) {
      this.props.loadMovieEndpoints(endpoints)
    }
  }

  handleToggle = endpoints => {
    this.setState(
      prevState => ({
        height: this.refs.inner.clientHeight,
        isExpanded: !prevState.isExpanded,
      }),
      () => this.makeRequest(endpoints)
    )
  }

  render() {
    const { movieTitle, planetEndpoints } = this.props
    const { isExpanded, height } = this.state
    const currentHeight = isExpanded ? height : 0 // panel collapse

    return (
      <div className={`panel ${isExpanded ? 'is-expanded' : ''}`}>
        {this.props.myProps}
        <div className="panel-item">
          <h3>{movieTitle}</h3>
          <button onClick={() => this.handleToggle(planetEndpoints)}>
            {isExpanded ? <ArrowClose /> : <ArrowOpen />}
          </button>
        </div>
        <div className="panel-collapse" style={{ height: currentHeight + 'px' }}>
          <div className="panel-body" ref="inner">
            <TableData isExpanded={isExpanded} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planetsInfo: state.appState.planetsInfo,
})

const mapDispatchToProps = dispatch => ({
  loadMovieEndpoints: endpoints =>
    dispatch(actionCreators.loadMovieEndpoints(endpoints)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieItem)
