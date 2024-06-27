import NavBar from './Components/layout/NavBar'
import Home from './sections/Home'

import Projects from './sections/Projects'
import EducationSection from './sections/EducationSection'
import SkillSection from './sections/SkillSection'
import Contact from './sections/Contact'
import './App.css'

function App() {
 

  return (
    <>
      <div>
        <NavBar  />
        <Home />
        <Projects />
        <EducationSection />
        <SkillSection />
        <Contact />
       </div>
    </>
  )
}

export default App
