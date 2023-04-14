

import { useState } from 'react'
import Layout from './Layout'
import Functional from './Functional'
import { printProps } from './components/HOC/printProps'
import { UserInfo } from './components/Container/UserInfo'


const UserInfoWrapped = printProps(UserInfo)

function App() {
  const [selectedOption, setSelectedOption] = useState('layout')


  return (
    <div>
      <UserInfoWrapped user={{ name: 'John', age: 25, hairColor: 'Brown', hobbies: ['Skiing', 'Hiking', 'Coding'] }} />
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
