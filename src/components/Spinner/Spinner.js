import React from 'react'
import './Spinner.scss'
import { ReactComponent as SpinnerTop } from '../../assets/SPINNER_TOP.svg'
import { ReactComponent as SpinnerBot } from '../../assets/SPINNER_BOT.svg'

const Spinner = () => {
  return (
    <tr>
      <td>
        <SpinnerTop />
        <SpinnerBot />
      </td>
    </tr>
  )
}

export default Spinner
