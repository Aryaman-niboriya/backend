import React from 'react'
import { BrowserRouter as  Router , Routes , Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<CreatePost/>} />
        <Route path="/aboutus" element={<h1>About Us</h1>}/>
      </Routes>
    </Router>
  )
}

export default App