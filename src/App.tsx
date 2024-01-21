import './App.css'
import Flags from './components/flags'
import Switch from './components/switch'
import { ShopList } from './components/shoplist'

function App() {

  return (
    <>
      <div className='main'>
        <div className='header' style={{ backgroundColor: 'transparent' }}>
          <Flags />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Switch />
          </div>
        </div>
        <p style={{ marginTop: '20px' }}>alza</p>
        <div style={{ marginTop: '10px' }}>
          <ShopList name='Apple' quantity={5} />
          <ShopList name='Orange' quantity={10} />
          <ShopList name='Banana' quantity={15} />
        </div>
        <button> add </button>
        <div className='buttonRow'>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
          <button>Button 4</button>
        </div>
      </div>
    </>
  )
}

export default App
