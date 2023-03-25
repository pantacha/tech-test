import React from 'react'
import addNotification from 'react-push-notification'

import { NotifyContext } from './NotifyContext'

export const NotifyProvider = ({children}) => {

  const clickToNotify = () => {
    addNotification({
      title: 'Technical Test Project',
      message: 'More details about the Technical test and other projects in the repo',
      duration: 3000,
      icon: '../assets/icon',
      onClick: () => window.location ="https://github.com/pantacha/tech-test",
      native: true,
    })
  }

  return (

    <NotifyContext.Provider value={{clickToNotify}}>
        {children}
    </NotifyContext.Provider>

  )

}
