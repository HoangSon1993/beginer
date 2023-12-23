import './App.css'
import ProductList from './ProductList/ProductList'
import Form from './Form/Form'
import UncontrolledComponent from './Form/UncontrolledComponent'
import Calculator from './Calculator/Calculator'
import Inheritance from './CompositionVSInheritance/Inheritance'
import Composition from './CompositionVSInheritance/Composition'
import FilterableProductTable from './ThinkingInReact/FilterableProductTable'
import UseClassComponent from './UseClassComponent'
import User from './User'
import { useState } from 'react'
function App() {
  const [isShow, setIsShow] = useState(true)
  return (
    <div className='App'>
      {/*<ProductList />*/}
      {/*<Form />*/}
      {/*<UncontrolledComponent />*/}
      {/*<Calculator />*/}
      {/*<Inheritance />*/}
      {/*<Composition />*/}
      {/*<FilterableProductTable />*/}
      {/*<UseClassComponent />*/}
      {isShow && <User />}
      <button onClick={() => setIsShow((prevState) => !prevState)}>Set Is Show</button>
    </div>
  )
}

export default App
