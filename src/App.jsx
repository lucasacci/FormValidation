import { useState } from 'react'
import { Form } from './Form'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-center my-4'>Formulario</h1>
      <Form/>
    </>
  )
}

export default App
