import './App.css'
import Flags from './components/flags'
import Switch from './components/switch'
import { ShopList } from './components/shoplist'

import ButtonRow from './components/buttonrow'

function App() {
  return (
    <>
      <div className='main' style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <div className='header' style={{ backgroundColor: 'transparent' }}>
          <Flags />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Switch />
          </div>
        </div>
        <p style={{ margin: '20px', border: '1px solid black', borderRadius: '10px', fontWeight: 'bold', fontSize: '20px' }}>alza</p>
        <div style={{ marginTop: '10px' }}>
          <ShopList name='Apple' quantity={5} />
          <ShopList name='Orange' quantity={10} />
          <ShopList name='Banana' quantity={15} />
          <ShopList name='Pineapple' quantity={20} />
        </div>
        <button className='blueButton' style={{ marginBottom: '10px' }}> add </button> 
        <ButtonRow />
      </div>
    </>
  )
}

export default App