import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

export default function SocialMediaLinks() {
    return (
        <>
            <a href="https://github.com/jorgenusan" target="_blank" rel="noopener noreferrer"><FaGithub className="social-link"/></a>
            <a href="https://linkedin.com/in/jorgenusan" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-link"/></a>
            <a href="https://twitter.com/Jorge_nusan" target="_blank" rel="noopener noreferrer"><FaTwitterSquare className="social-link"/></a>
            <a href="mailto:jorge.nusan@gmail.com" target="_blank" rel="noopener noreferrer"><ImMail className="social-link border border-custom-black"/></a>
        </>
    )
}
