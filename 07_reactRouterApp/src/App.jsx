import './App.css'
import {Link, NavLink, Route, Routes} from 'react-router-dom'
import Home from  './components/home'
import About from './components/About'
import Support from './components/Support'
import Labs from './components/Labs'
import NotFound from './components/NotFound'
import MainHeader from './components/MainHeader'




function App() {

  return (
    <div className='App'>

{/* Creating front-end and link to their paths  */}
      <nav>
          <ul>
              <li>
                <NavLink to="/">Home</NavLink> 
              </li>

              <li>
                <NavLink to="/support">Support</NavLink> 
              </li>

              <li>
                <NavLink to="labs">Labs</NavLink> 
              </li>

              <li>
                <NavLink to="about">About</NavLink> 
              </li>
          </ul>
      </nav>


{/* Define rotes */}
      <Routes>
      
          <Route path="/" element={<MainHeader />}>
              {/* Default route  (index wala)*/}
              <Route index element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/support" element={<Support />}></Route>
              <Route path="/labs" element={<Labs />}></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Route>
      </Routes> 
    </div>
  )
}

export default App
