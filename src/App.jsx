import { useContext, useState } from 'react'
import { ButtonComponent } from './components/ButtonComponent'
import { NotifyContext } from './context';

function App() {

  const { clickToNotify } = useContext(NotifyContext);

  return (
    
    <>
      <div className="container">
        <div className="row mt-2">
          <div className="col-8">
            <h1>App Screen</h1>
            <hr />

            <ButtonComponent clickToNotify={clickToNotify} />

          </div>
        </div>
      </div>
    </>

  )
}

export default App
