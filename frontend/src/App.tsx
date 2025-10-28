import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HotelDetailsPage from './pages/HotelDetailsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/hotel/:id" element={<HotelDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
