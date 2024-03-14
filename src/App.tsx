
import './App.css'
import Header from './components/header'
import LoginSpace from './components/loginSpace'
import Card from './components/Card'
import Icon from './components/icon'
import WeatherText from './components/weatherText'

function App() {
  return (
    <>
      <Header />
      <LoginSpace />

      <Card>
        <Icon src="https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg" />
        <WeatherText />
      </Card>

    </>
  )
}

export default App
