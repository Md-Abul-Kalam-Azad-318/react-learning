
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Counter from './components/Counter'
import Footer from './components/Footer'
import Button from './components/Button'
import Greeting from './components/Greeting'

function App() {
  
  return (
    <div>
      <Navbar />
      <Home /> 
      <About />
      <Contact /> 
      <Counter /> 
      <Footer /> 
      <Button />
      <Greeting name = 'Azad' />
      <Greeting name = 'Rahim' />
      <Greeting name = 'Karim' />  
    </div>
  )
}

export default App

