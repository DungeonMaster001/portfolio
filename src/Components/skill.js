import '../App.css'
import img1 from '../images/userAsset/blob vector.png'
import img2 from '../images/stack/Javascript.svg'
import img3 from '../images/stack/Express.png'
import img4 from '../images/stack/NextJsCircle.png'
import img5 from '../images/stack/Tailwind.png'
import img6 from '../images/stack/NodeJs.svg'
import img7 from '../images/stack/MongoDB.svg'
import img8 from '../images/stack/Typescript.svg'
import img9 from '../images/stack/Bootstrap.svg'
import img10 from '../images/stack/Git.svg'
import img11 from '../images/stack/Docker.svg'

export default function Skill(){
    return(
        <div class="container skills-container" id="skills">
            <div class="skill-fade-text">Skills</div>
            <div class="skill-container-left">
                <h2 class="skill-heading">
                    <span class="caps">M</span>e and
                    <br/>
                    MyTech Stack
                </h2>
                <div class="skill-subHeading">
                    <p>
                        Hi Everyone My name is Abhinav Joshi I am a Full Stack Web Developer I have been working for last 2 Years for TATA Consultancy Services as MERN Stack developer . Currently I am learning aws and transforming my profile to Full Stack + Devops.
                    </p>
                    <p>
                        In these 2 years I have made several front end applications for TCS as well as clients, also I have built several public and private API's for client using JWT.
                    </p>
                
                </div>
            </div>
            <div class="skill-container-right">
                <img src={img1} class="blob-style" alt=""/>
                <img src={img2} class="skills-logo" alt=""/>
                <img src={img3} class="skills-logo" alt=""/>
                <img src={img4} class="skills-logo" alt=""/>
                <img src={img5} class="skills-logo" alt=""/>
                <img src={img6} class="skills-logo" alt=""/>
                <img src={img7} class="skills-logo" alt=""/>
                <img src={img8} class="skills-logo" alt=""/>
                <img src={img9} class="skills-logo" alt=""/>
                <img src={img10} class="skills-logo" alt=""/>
                <img src={img11} class="skills-logo" alt=""/>
            </div>



        </div>
    )
}