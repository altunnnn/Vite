import { Link } from 'react-router-dom'
function Nav(){
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
            <li className='nav-item'>
                <Link className='nav-link' to="/">Menu</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/grouped">Teams</Link>
            </li>
        </ul>
    </nav>
}
export default Nav