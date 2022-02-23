import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import profilePicture from "../images/Profile-Picture.png";
import linkedInIcon from "../images/LinkedIn-Icon.svg";
import emailIcon from "../images/Email-Icon.svg";

export default function Info() {
    return (
        <div className="profileCard">
            <img className="profilePicture" src={profilePicture} alt="Profile Picture" />
            <div className="info">
                <h1 className="nameText">Laura Smith</h1>
                <h3 className="professionText">Frontend Developer</h3>
                <h4 className="websiteText">laurasmith.website</h4>
                <button className="emailButton">
                    <img className="emailIcon" src={emailIcon} />
                    Email
                </button>
                <button className="linkedInButton">
                    <img className="linkedInIcon" src={linkedInIcon} />
                    LinkedIn
                </button>
                <div className="moreInfo">
                    <About />
                    <Interests />
                </div>
                <Footer />
            </div>
        </div>
    )
}