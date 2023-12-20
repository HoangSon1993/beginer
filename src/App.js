import './App.css'
import Toggle from './Toggle'
import Layout from "./Layout";
import BareButton from "./BareButton";
// import Clock from './Clock'
function App() {
  return (
    <div className='App'>
      {/*<Toggle />*/}
      <Layout>
        <BareButton />
      </Layout>
    </div>
  )
}

export default App
