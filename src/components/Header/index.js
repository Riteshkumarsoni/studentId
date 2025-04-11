import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
    <nav className="nav-bg-container">
        <div className="nav-card1">
            <Link to="/" className='nav-link'><h1 className="nav-heading">Student Id</h1></Link>
        </div>
        <ul className="nav-list-container">
            <Link to="/" className='nav-link'><li className="nav-item">Home</li></Link>
            <Link to="/show-id" className='nav-link'><li className="nav-item">Show Id</li></Link>
        </ul>
    </nav>
)

export default Header