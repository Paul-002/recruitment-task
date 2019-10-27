import React from 'react'
import './MovieValidationPrompt.scss'

const MovieValidationPrompt = ({ showValidPrompt, onBlur }) => {
  return (
    <div className={`prompt ${showValidPrompt && onBlur ? 'invalid' : ''}`}>
      <span>Movie tittle name must start with a capital letter.</span>
    </div>
  )
}

export default MovieValidationPrompt
