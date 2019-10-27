import React from 'react'
import './InputPlanetWrapper.scss'
import InputPlanet from '../../../components/Inputs/InputPlanet'
import DataList from '../../../components/DataList/DataList'

const InputPlanetWrapper = ({
  inputPlanetValue,
  inputPlanetChange,
  onClickPlanetOption,
  searchPlanetResult,
}) => {
  return (
    <div className="input-planet-wrapper">
      <InputPlanet
        inputPlanetValue={inputPlanetValue}
        inputPlanetChange={inputPlanetChange}
      />
      <DataList
        onClickPlanetOption={onClickPlanetOption}
        searchPlanetResult={searchPlanetResult}
      />
    </div>
  )
}

export default InputPlanetWrapper
