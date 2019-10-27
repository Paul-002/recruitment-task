export const checkForValidity = (inputName, value) => {
  let isValid = false
  const trimVal = value.trim()
  const minLength = trimVal.length >= 3
  const capitalLetter = /^[A-Z]/.test(trimVal)

  switch (inputName) {
    case 'userMovieTitle':
      isValid = capitalLetter && minLength
      break
    default:
  }
  return isValid
}
