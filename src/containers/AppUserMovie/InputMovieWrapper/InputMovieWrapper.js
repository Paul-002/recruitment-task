import React from 'react'
import InputMovie from '../../../components/Inputs/InputMovie'
import MovieValidationPrompt from '../../../components/MovieValidationPrompt/MovieValidationPrompt'

const InputMovieWrapper = ({
  inputMovieChange,
  userMovieTitle,
  showValidPrompt,
}) => {
  return (
    <>
      <InputMovie
        redLabel={showValidPrompt}
        userMovieTitle={userMovieTitle}
        inputMovieChange={inputMovieChange}
      />
      <MovieValidationPrompt showValidPrompt={showValidPrompt} />
    </>
  )
}

export default InputMovieWrapper
