import SplitScreen from "./components/split_screen/SplitScreen"


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
    <SplitScreen type={"horizontal"} leftWeight={1} rightWeight={4} >
      <LeftComponent message="Hello" />
      <RightComponent message="world!" />
    </SplitScreen >
  )
}

export default App
