import img from '../images/userAsset/NavLogo.jpg'
import '../App.css'
export default function Navbar(){
    return(
        <div class="navbar">

                <div class="logo-container">
                    <img src={img} class="logo"/>
                    <div class="logo-text">oshi Abhinav</div>
                </div>
                <div class="nav-items">
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

            </div>
    )
}