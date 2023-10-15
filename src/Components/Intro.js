import img1 from '../images/userAsset/dots.png'
import img2 from '../images/userAsset/cube.png'
import img3 from '../images/userAsset/circle.png'
import img4 from '../images/userAsset/zigzags.png'
import img5 from '../images/userAsset/plus.png'
import img6 from '../images/userAsset/resume pic.jpg'
import '../App.css'
import Typed from 'typed.js';
import {useRef,useEffect} from 'react'
export default function Intro(){
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
            "MERN Stack Developer",
            "Web Developer",
            "Backend Developer",
          ],
          loop: true,
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 1000,
        });
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return(
        <div class="hero-section">
                <div class="faded-text">Abhinav Joshi</div>
    
                <div class="hero-section-left">
                    <div class="hero-section-heading">Hi! Abhinav Joshi</div>
                    <div class="hero-section-heading hero-section-sub-heading">
                        I am a <span class="role" ref={el}></span>
                    </div>
                    <div class="hero-section-description">
                        I’m a software developer and here is my portfolio website. 
                        Here you’ll learn about my journey as a software developer.
                    </div>
                    <div class="btn-pink" id="btn">Hire me</div>
    
                </div>
    
                <div class="hero-section-right">
                    <div class="absolute icons icon-dots">
                        <img src={img1} alt=""/>
                    </div>
                    <div class="absolute icons icon-cube">
                        <img src={img2} alt=""/>
                    </div>
                    <div class="absolute icons icon-circle">
                        <img src={img3} alt=""/>
                    </div>
                    <div class="absolute icons icon-zigzak">
                        <img src={img4}alt=""/>
                    </div>
                    <div class="absolute icons icon-plus">
                        <img src={img5} alt=""/>
                    </div>
                    <div class="user-image">
                        <img src={img6} alt=""/>
                    </div>
    
                </div>
            </div>
    )
}