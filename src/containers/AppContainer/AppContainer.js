import React from 'react'
import './AppContainer.scss'
import AppHeader from '../AppHeader/AppHeader'
import AppData from '../AppData/AppData'
import Footer from '../Footer/Footer'
import AppUserMovie from '../AppUserMovie/AppUserMovie'

const AppContainer = () => {
  return (
    <div className="app-container">
      <AppHeader />
      <AppData />
      <AppUserMovie />
      <Footer />
    </div>
  )
}

export default AppContainer
