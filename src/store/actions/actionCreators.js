import actionTypes from './actionTypes'
import axios from 'axios'

export const loadTitlesSuccess = response => ({
  type: actionTypes.LOAD_TITLES_SUCCESS,
  response,
})

export const loadTitlesError = error => ({
  type: actionTypes.LOAD_TITLES_ERROR,
  error,
})

export const loadMovieEndpointsSuccess = response => ({
  type: actionTypes.LOAD_MOVIE_ENDPOINTS_SUCCESS,
  response,
})

export const loadMovieEndpointsError = error => ({
  type: actionTypes.LOAD_MOVIE_ENDPOINTS_ERROR,
  error,
})

export const searchPlanetSuccess = (inputPlanetValue, response) => ({
  type: actionTypes.SEARCH_PLANET_SUCCESS,
  inputPlanetValue,
  response,
})

export const searchPlanetError = error => ({
  type: actionTypes.SEARCH_PLANET_ERROR,
  error,
})

export const userMovieHandler = (title, endpoints) => ({
  type: actionTypes.SET_USER_MOVIE,
  title,
  endpoints,
})

export const setUserMovie = (title, endpoints) => dispatch => {
  dispatch(userMovieHandler(title, endpoints))
}

export const loadMovieTitles = () => dispatch => {
  axios
    .get(`https://swapi.co/api/films/`)
    .then(response => {
      dispatch(loadTitlesSuccess(response))
    })
    .catch(error => {
      dispatch(loadTitlesError(error))
    })
}

export const loadMovieEndpoints = endpoints => dispatch => {
  const allEndpoints = endpoints.map(endpoint => axios.get(endpoint))

  Promise.all(allEndpoints)
    .then(response => {
      dispatch(loadMovieEndpointsSuccess(response))
    })
    .catch(error => {
      dispatch(loadMovieEndpointsError(error))
    })
}

export const searchPlanet = inputPlanetValue => dispatch => {
  if (inputPlanetValue) {
    axios
      .get(`https://swapi.co/api/planets?search=${inputPlanetValue}`)
      .then(response => {
        dispatch(searchPlanetSuccess(inputPlanetValue, response))
      })
      .catch(error => {
        dispatch(searchPlanetError(error))
      })
  }
}
