import React from 'react'
import RegularList from "./components/Layout/lists/RegularList"
import ListItemPersonSmall from "./components/Layout/lists/person/ListItemPersonSmall"
import ListItemPersonLarge from "./components/Layout/lists/person/ListItemPersonLarge"
import { people, products } from "./components/Layout/lists/data"
import NumberedList from "./components/Layout/lists/NumberedList"
import ListItemProductLarge from "./components/Layout/lists/product/ListItemProductLarge"
import ListItemProductSmall from "./components/Layout/lists/product/ListItemProductSmall"
import Modal from "./components/Layout/modal/Modal"
import SplitScreen from "./components/Layout/split_screen/SplitScreen"
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


const Layout = () => {
    return (
        <div>   <h2>Layout</h2>
            <h3>Modal</h3>
            <Modal>
                <ListItemProductLarge product={products[0]} />

            </Modal>

            <h3>Split Screen</h3>
            <SplitScreen type={"horizontal"} leftWeight={1} rightWeight={4} >
                <LeftComponent message="Hello" />
                <RightComponent message="world!" />
            </SplitScreen >
            <h3>Lists</h3>
            <RegularList items={people} resourceName="person" itemComponent={ListItemPersonLarge} />


        </div>


    )
}

export default Layout