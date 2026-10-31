import './App.css'
import Menu from './components/Menu';
import About_Me from './components/About_Me';
import Experience from './components/experience';
import Certifications from './components/certifications';
import Projects from './components/projects';

function App() {
  

  return (

       <div  className="header">
        <h1 style={{ fontFamily: 'Chakra Petch' }}>Ing. Jose Ramses Moreno Gonzalez</h1>
        <h2>Software developer</h2>
        <Menu />
        <div className='simple-section'>
          <h3>Basic Information </h3>
        </div>
         <div className='simple-line'></div>
         <About_Me/>
         <div className='simple-section'>
          <h3>Experience </h3>
        </div>
         <div className='simple-line'></div>
         <Experience/>
         <div className='simple-section'>
          <h3>Certifications </h3>
        </div>
         <div className='simple-line'></div>
          <Certifications/>
          <div className='simple-section'>
          <h3>Projects </h3>
        </div>
         <div className='simple-line'></div>
          <Projects/>
        <div className='nab-bar'>
          <div className='first-info'>
            <div className='about-me'>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default App
