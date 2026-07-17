
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Counter from './components/Counter'
import Footer from './components/Footer'
import Button from './components/Button'
import Greeting from './components/Greeting'
import StudentList from './components/StudentList'
import EmployeeList from './components/EmployeeList'

function App() {
  
  return (
    <div>
      <Navbar />

      <Home /> 
      <About />
      <Contact /> 

      <Counter /> 

      <Button />
      
      <Greeting
        name = 'Azad'
        profession = 'Managing Director'
        country = 'Bangladesh'
        />
        <Greeting
        name = 'Rahim'
        profession = 'Engineer'
        country = 'Bangladesh'
        />

        <StudentList />
        <EmployeeList />
        
        <Footer />   
    </div>
  );
}

export default App

