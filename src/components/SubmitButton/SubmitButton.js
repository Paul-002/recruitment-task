import React from 'react'
import './SubmitButton.scss'

const SubmitButton = ({ onSubmit, disabled }) => {
  return (
    <button className="submit-button" onClick={() => onSubmit()} disabled={disabled}>
      ADD MOVIE
    </button>
  )
}

export default SubmitButton
