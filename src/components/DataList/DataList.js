import React from 'react'
import Option from '../Option/Option'
import './DataList.scss'

const Datalist = ({ searchPlanetResult, onClickPlanetOption }) => {
  return (
    <div className="data-list">
      <ul>
        {searchPlanetResult
          ? searchPlanetResult.map(planet => (
              <Option
                key={planet.created}
                planetEndpoint={planet.url}
                onClickPlanetOption={onClickPlanetOption}
              >
                {planet.name}
              </Option>
            ))
          : null}
      </ul>
    </div>
  )
}

export default Datalist
