import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { PostCategory } from './components/PostCategory'
import { AddDetails } from './components/AddDetails'
function App() {


  return (
    <>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/postcategory' element={<PostCategory />} />
        <Route path='/adddetails' element={<AddDetails />} />
      </Routes>
    </>
  )
}

export default App
