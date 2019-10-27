import React from 'react'
import './InputStyle.scss'

const InputMovie = ({ userMovieTitle, inputMovieChange, onBlur, redLabel }) => {
  return (
    <div className="input-wrapper">
      <label className={redLabel && onBlur ? 'invalid' : ''}>Movie tittle</label>
      <input
        type="text"
        name="userMovieTitle"
        autoComplete="off"
        placeholder="Please enter the tittle of the movie"
        value={userMovieTitle}
        onBlur={onBlur}
        onChange={e => inputMovieChange(e)}
      />
    </div>
  )
}

export default InputMovie
