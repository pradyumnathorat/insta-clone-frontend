import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
    return (

        <>
        <nav className="header">
            <section className="logo">
                <img src={require('../../images/logo.png')} alt="logo" />
            </section>
            <section className="camera-icon">
                <Link to="/post">
                    <img src={require('../../images/cameralogo.webp')} alt="camera-logo" />
                </Link>
            </section>
        </nav>
        </>
    )
}

export default Header;