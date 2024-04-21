import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {
  playSong,
  stopSong,
  pauseSong,
  resumeSong,
} from './actions/songActions';

import Fotter from './comp/Fotter'
import ArtWork from './comp/ArtWork'

import './App.css'

function App() extends Component {

  return (
    <>
      <div className='mainBody'>

      <Fotter 
        stopSong={this.stopSong}
        pauseSong={this.pauseSong}
        resumeSong={this.resumeSong}
        audioControl={this.audioControl}
      />
      </div>
    </>
  )
}

export default App
