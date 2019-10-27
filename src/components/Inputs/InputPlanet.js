import React from 'react'
import './InputStyle.scss'

const InputPlanet = ({ inputPlanetChange, inputPlanetValue }) => {
  return (
    <div className="input-wrapper">
      <label>Add Planet</label>
      <input
        type="text"
        name="inputPlanetValue"
        autoComplete="off"
        placeholder="Seacrh for the the planet"
        value={inputPlanetValue}
        onChange={e => inputPlanetChange(e)}
      />
    </div>
  )
}

export default InputPlanet
