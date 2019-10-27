import actionTypes from '../actions/actionTypes'

const initialState = {
  movieTitles: [],
  planetsInfo: [],
  planetsInfoError: [],
  searchPlanetResult: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TITLES_SUCCESS:
      const result = action.response.data.results.map(movie => ({
        title: movie.title,
        planetEndpoints: movie.planets,
        uniqueKey: movie.created,
      }))
      return {
        ...state,
        movieTitles: result,
      }

    case actionTypes.LOAD_TITLES_ERROR:
      return {
        ...state,
        error: action.error,
      }

    case actionTypes.LOAD_MOVIE_ENDPOINTS_SUCCESS:
      return {
        ...state,
        planetsInfo: action.response,
      }

    case actionTypes.LOAD_MOVIE_ENDPOINTS_ERROR:
      return {
        ...state,
        planetsInfoError: action.error,
      }

    case actionTypes.SEARCH_PLANET_SUCCESS:
      const filteredResponse = action.response.data.results.filter(item =>
        item.name.toLowerCase().startsWith(action.inputPlanetValue.toLowerCase())
      )
      return {
        ...state,
        searchPlanetResult: filteredResponse,
      }

    case actionTypes.SEARCH_PLANET_ERROR:
      return {
        ...state,
        searchPlanetResultError: action.error,
      }

    case actionTypes.SET_USER_MOVIE:
      return {
        ...state,
        movieTitles: state.movieTitles.concat({
          title: action.title,
          planetEndpoints: action.endpoints,
        }),
      }

    default:
      return state
  }
}

export default reducer
