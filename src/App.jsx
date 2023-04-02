

import { useState } from 'react'
import Layout from './Layout'
import Functional from './Functional'


function App() {
  const [selectedOption, setSelectedOption] = useState('layout')


  return (
    <div>
      <h1>React Patterns</h1>

      <select id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="layout">Layout</option>
        <option value="functional">Functional</option>
      </select>


      {selectedOption === 'layout' && <Layout />}
      {selectedOption === 'functional' && <Functional />}







    </div>
  )
}

export default App
