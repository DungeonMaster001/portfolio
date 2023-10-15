import '../App.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Brands from '@fortawesome/free-brands-svg-icons';
export default function Footer(){
    return(
        <footer>
            <div class="container">
                <div class="footer-wrapper">
                    <div class="footer-faded-text faded-text">Abhinav Joshi</div>

                    <div class="link-wrapper">
                        <div>
                            <a href="#projects">Projects</a>
                        </div>
                        <div>
                            <a href="#skills">Skills</a>
                        </div>
                        <div>
                            <a href="#contactme">Contact Me</a>
                        </div>
                    </div>

                    <div class="icon-wrapper">
                    <FontAwesomeIcon icon={Brands.faGithub} size="3x" />
                    <FontAwesomeIcon icon={Brands.faLinkedin} size="3x" />
                    <FontAwesomeIcon icon={Brands.faInstagram} size="3x" />
                    <FontAwesomeIcon icon={Brands.faFacebook} size="3x" />
                    </div>

                </div>
            </div>
        </footer>
    )
}