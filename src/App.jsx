
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Counter from './components/Counter'
import Footer from './components/Footer'


function App() {
  

  return (
    <div>
      <Navbar />
      <Home /> 
      <About />
      <Contact /> 
      <Counter /> 
      <Footer />   
    </div>
  )
}

export default App

