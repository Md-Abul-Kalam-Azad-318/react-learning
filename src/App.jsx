
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Counter from './components/Counter'


function App() {
  

  return (
    <div>
      <Navbar />
      <Home /> 
      <About />
      <Contact /> 
      <Counter />    
    </div>
  )
}

export default App

