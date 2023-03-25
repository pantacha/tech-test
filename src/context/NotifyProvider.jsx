import React from 'react'
import { NotifyContext } from './ButtonContext'

export const NotifyProvider = ({children}) => {

  const clickToNotify = () => {
    addNotification({
      title: 'Technical test',
      message: 'can see the tech test in the repo',
      duration: 3000,
      native: true,
      onClick: 
      
    })
  }

  return (

    <NotifyContext.Provider value={{clickToNotify}}>
        {children}
    </NotifyContext.Provider>

  )

}
