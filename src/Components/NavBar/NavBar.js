import { Link } from "react-router-dom"
import "./NavBar.css"


const NavBar = (props) => {
    const {elemento, link} = props
    return (
            <li><Link to= {`${link}`}> <p className="textoNavBar">{elemento}</p></Link></li>
    )
}

export default NavBar