import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogPage from './components/BlogPage'
import PostPage from './components/PostPage'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
