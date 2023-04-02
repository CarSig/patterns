import SplitScreen from "./components/split_screen/SplitScreen"
import RecursiveComponent from "./components/recursive_component/RecursiveComponent"
import nestedObject from "./recursive_components/nestedObject"


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
