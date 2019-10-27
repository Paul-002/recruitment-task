import React from 'react'
import './PlanetBadge.scss'
import { ReactComponent as CrossButton } from '../../assets/CROSS.svg'

const PlanetBadge = ({ planetName, deleteBadge, index }) => {
  return (
    <li className="badge">
      <span>{planetName}</span>
      <button
        className="badge-button"
        value={planetName}
        name={`${planetName}${index}`}
        onClick={e => deleteBadge(e)}
      >
        <CrossButton />
      </button>
    </li>
  )
}

export default PlanetBadge
