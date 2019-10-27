import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/actionCreators'
import './AppData.scss'
import MovieItem from '../../components/MovieItem/MovieItem'

class AppData extends Component {
  componentDidMount() {
    this.props.loadMovieTitles()
  }

  render() {
    const { movieTitles } = this.props
    return (
      <div className="app-data">
        {movieTitles.length ? (
          movieTitles.map(movie => (
            <MovieItem
              key={movie.uniqueKey}
              planetEndpoints={movie.planetEndpoints}
              movieTitle={movie.title}
            />
          ))
        ) : (
          <span>Spinner</span>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movieTitles: state.appState.movieTitles,
})

const mapDispatchToProps = dispatch => ({
  loadMovieTitles: () => dispatch(actionCreators.loadMovieTitles()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppData)
