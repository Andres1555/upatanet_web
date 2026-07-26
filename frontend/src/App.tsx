import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './index';
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import { HomeJornadas } from './pages/HomeJornadas';
import { CreacionJornada } from './pages/CreacionJornada';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/HomeJornadas" element={<HomeJornadas />} />
          <Route path="/CreacionJornada" element={<CreacionJornada />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
