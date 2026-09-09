import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Schools from './pages/Schools.jsx'
import PharmaceuticalSciences from './pages/PharmaceuticalSciences.jsx'
import MedicalSciences from './pages/MedicalSciences.jsx'
import Nursing from './pages/Nursing.jsx'
import AlliedHealth from './pages/AlliedHealth.jsx'
import Programmes from './pages/Programmes.jsx'
import Admissions from './pages/Admissions.jsx'
import Infrastructure from './pages/Infrastructure.jsx'
import Research from './pages/Research.jsx'
import Placements from './pages/Placements.jsx'
import Faculty from './pages/Faculty.jsx'
import CampusLife from './pages/CampusLife.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/pharmaceutical-sciences" element={<PharmaceuticalSciences />} />
        <Route path="/medical-sciences" element={<MedicalSciences />} />
        <Route path="/nursing" element={<Nursing />} />
        <Route path="/allied-health" element={<AlliedHealth />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/research" element={<Research />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
