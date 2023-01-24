import { Link } from "react-router-dom";
import landingImage from "../../images/nature-quotes-landscape-1648265299.jpeg"
import "./LandingPage.css";
const LandingPage = () => {
    return (

        <>
            <div className="landing">
                <div className="img">
                    <img src={landingImage} alt="nature img" />
                </div>
                <div className="button1">
                    <div className="xxx">
                    10x Team 04
                    </div>
                    <Link to="/post-view">
                        <button className="button2">Enter</button>
                    </Link>

                </div>
            </div>

        </>
    )
}
export default LandingPage;