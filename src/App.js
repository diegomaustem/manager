import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Projects from'./components/pages/Projects'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Project from'./components/pages/Project'

import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import NavBar from'./components/layout/NavBar'




function App() {
  return (
   <Router>
     <NavBar />
        <Container customClass="min-height">
          <Routes>
                <Route  exact path="/" element={<Home />} > </Route>
                <Route  path="/projects" element={<Projects />} > </Route>
                <Route  path="/company" element={<Company />} > </Route>
                <Route  path="/contact" element={<Contact />} > </Route>
                <Route  path="/newproject" element={<NewProject />} > </Route>
                <Route  path="/project/:id" element={<Project />} > </Route>
          </Routes>
        </Container>
      <Footer />
   </Router>
  );
}

export default App;
