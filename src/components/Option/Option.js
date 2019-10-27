import React from 'react'
import './Option.scss'

const Option = ({ children, planetEndpoint, onClickPlanetOption }) => {
  return (
    <li
      className="option"
      onClick={e => onClickPlanetOption(e.target.innerText, planetEndpoint)}
    >
      <span>{children}</span>
    </li>
  )
}

export default Option
