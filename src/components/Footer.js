import twitterIcon from "../images/Twitter-Icon.svg";
import facebookIcon from "../images/Facebook-Icon.svg";
import instagramIcon from "../images/Instagram-Icon.svg";
import githubIcon from "../images/GitHub-Icon.svg";

export default function Footer() {
    return (
        <div className="footer">
            <img className="socialIcons" src={twitterIcon}/>
            <img className="socialIcons" src={facebookIcon}/>
            <img className="socialIcons" src={instagramIcon}/>
            <img className="socialIcons" src={githubIcon}/>
        </div>
    )
}