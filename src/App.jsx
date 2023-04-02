import RecursiveComponentColored from "./components/Functional/recursive_component/RecursiveComponentColored"
import SplitScreen from "./components/Layout/split_screen/SplitScreen"
import { nestedObject } from "./components/Functional/recursive_component/nestedObject"
import { DangerButton, BigSuccessButton } from "./components/Functional/partially_applied_component/partiallyApply"

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
      <h1>React Patterns</h1>
      <h2>Layout</h2>
      <h3>Split Screen</h3>
      <SplitScreen type={"horizontal"} leftWeight={1} rightWeight={4} >
        <LeftComponent message="Hello" />
        <RightComponent message="world!" />
      </SplitScreen >

      <h2>Functional</h2>

      <DangerButton text="Danger Button" />
      <BigSuccessButton text="Big Success Button" />
      <RecursiveComponentColored data={nestedObject} />

    </div>
  )
}

export default App
