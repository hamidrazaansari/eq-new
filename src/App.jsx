import { Route, Routes } from 'react-router-dom'
import './App.css'
import CircularSlider from './components/CircularSlider'
import Hero from './Pages/Hero'
import Test from './components/Program'
import PersonalizeProg from './Pages/PersonalizeProg'
import Process from './Pages/Process'
import ScrollToTop from './components/ScrollToTop'
function App() {

  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route 
        path='/test'
        element ={<Test/>}
      />

      <Route 
        path='/'
        element ={<Hero/>}
      />
      <Route 
        path='/program'
        element ={<PersonalizeProg />}
      />
      <Route 
        path='/process'
        element ={<Process />}
      />

    </Routes>
    </>
  )
}

export default App
