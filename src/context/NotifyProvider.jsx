import React from 'react'
import addNotification from 'react-push-notification'

import { NotifyContext } from './NotifyContext'

export const NotifyProvider = ({children}) => {

  const clickToNotify = () => {
    addNotification({
      title: 'Technical Test Project',
      message: 'Click to se more details about the Technical test and other projects of the repo',
      duration: 3000,
      icon: '../assets/icon',
      onClick: () => window.location ="https://github.com/pantacha",
      native: true,
    })
  }

  return (

    <NotifyContext.Provider value={{clickToNotify}}>
        {children}
    </NotifyContext.Provider>

  )

}
