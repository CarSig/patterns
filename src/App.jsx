import RecursiveComponent from "./components/recursive_component/RecursiveComponent"
import SplitScreen from "./components/split_screen/SplitScreen"

import { nestedObject } from "./components/recursive_component/nestedObject"


const LeftComponent = ({ message }) => {
  return (
    <h1>{message}</h1>
  )
}

const RightComponent = ({ message }) => {
  return (
    <h1>{message}</h1>
  )
}


function App() {


  return (
    <div>
      <RecursiveComponent data={nestedObject} />
      <SplitScreen type={"horizontal"} leftWeight={1} rightWeight={4} >
        <LeftComponent message="Hello" />
        <RightComponent message="world!" />
      </SplitScreen >
    </div>
  )
}

export default App
