import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import LayoutDefault from './layout/DefaultLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route index element={<HomePage />} />
            <Route path='/Prodotti' element={<Prodotti />} />
            <Route path='/ChiSiamo' element={<ChiSiamo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
