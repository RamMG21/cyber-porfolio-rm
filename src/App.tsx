import './App.css'
import Menu from './components/Menu';
import About_Me from './components/About_Me';

function App() {
  

  return (

       <div  className="header">
        <h1 style={{ fontFamily: 'Chakra Petch' }}>Jose Ramses Moreno</h1>
        <h2>Software developer</h2>
        <Menu />
        <div className='simple-section'>
          <h3>Basic Information </h3>
        </div>
         <div className='simple-line'></div>
         <About_Me/>
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
