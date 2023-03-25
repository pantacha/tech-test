import React from 'react'

export const ButtonComponent = () => {

  return (

        <button 
            className="btn btn-outline-primary col-md-3 offset-md-6 mt-4"
            onClick={ () => {console.log('notify')} }
            >
          Click to notify
        </button>

  )

}
