import RecursiveComponentColored from "./components/Functional/recursive_component/RecursiveComponentColored"
import SplitScreen from "./components/Layout/split_screen/SplitScreen"
import { nestedObject } from "./components/Functional/recursive_component/nestedObject"
import { DangerButton, BigSuccessButton } from "./components/Functional/partially_applied_component/partiallyApply"
import RegularList from "./components/Layout/lists/RegularList"
import ListItemPersonSmall from "./components/Layout/lists/person/ListItemPersonSmall"
import ListItemPersonLarge from "./components/Layout/lists/person/ListItemPersonLarge"
import { people, products } from "./components/Layout/lists/data"
import NumberedList from "./components/Layout/lists/NumberedList"
import ListItemProductLarge from "./components/Layout/lists/product/ListItemProductLarge"
import ListItemProductSmall from "./components/Layout/lists/product/ListItemProductSmall"

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
      <h3>Lists</h3>


      <RegularList items={people} resourceName="person" itemComponent={ListItemPersonSmall} />
      <RegularList items={people} resourceName="person" itemComponent={ListItemPersonLarge} />


      <NumberedList items={products} resourceName="product" itemComponent={ListItemProductSmall} />
      <NumberedList items={products} resourceName="product" itemComponent={ListItemProductLarge} />

      <h2>Functional</h2>

      <DangerButton text="Danger Button" />
      <BigSuccessButton text="Big Success Button" />
      <RecursiveComponentColored data={nestedObject} />

    </div>
  )
}

export default App
