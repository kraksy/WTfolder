
import './App.css'
import Header from './components/header'
import Value from './components/value'
import Graph from './components/graph'
import Percentage from './components/percentage'

function App() {
  return (
    <>
      <Header />
      <Value />
      <Percentage value={<Value />} />
      <Graph value={<Value />} />
    </>
  )
}

export default App
