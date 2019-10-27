import React from 'react'
import './BadgesWrapper.scss'
import PlanetBadge from '../../../components/PlanetBadge/PlanetBadge'

const BadgesWraper = ({ planetBadges, deleteBadge }) => {
  return (
    <ul className="badges-wrapper">
      {planetBadges.map((planet, index) => (
        <PlanetBadge
          key={`${planet}${index}`}
          index={index}
          deleteBadge={deleteBadge}
          planetName={planet}
        />
      ))}
    </ul>
  )
}

export default BadgesWraper
