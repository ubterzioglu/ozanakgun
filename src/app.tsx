import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BilgiPage from './pages/BilgiPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bilgi" element={<BilgiPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
