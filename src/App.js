import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom'
import Home from './components/Home'
import ShowId from './components/ShowId'
import NotFound from './components/NotFound'
import'./index.css'

const App = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/show-id" element={<ShowId />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path='*' element={<Navigate to="/not-found" />} />
        </Routes>
    </Router>
)

export default App