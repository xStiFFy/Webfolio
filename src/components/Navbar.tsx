import './Navbar.css'
import monogram_purple from '../assets/monogram_purple.svg'

function Navbar() {

    return (
        <nav className="navbar">
            <a className="navbar-logo glow-hover" href="#home">
                <img src={monogram_purple} alt="MG" />
            </a>

            <div className="navbar-links">
                <a href="#about" className="glow-hover">
                    About
                </a>
                <a href="#projects" className="glow-hover">
                    Projects
                </a>               
                <a href="#contact" className="glow-hover">
                    Contact
                </a>
            </div>
        </nav>
    )
}

export default Navbar;