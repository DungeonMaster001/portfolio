import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Brands from '@fortawesome/free-brands-svg-icons';
import * as Icon from '@fortawesome/free-solid-svg-icons';
export default function Contact(){
 return(
<div class="contactus-form-container" id="contactme">
            <div class="container">
                <h1 class="contactus-heading">Contact me</h1>
                <h3 class="contactus-sub-heading">
                    Questions, Thoughts, Or Just Want To Say Hello?
                </h3>


                <div class="contactus-form-container">
                    <form class="form" action="">
                        <div class="formfield-container">
                            <input class="formfield" 
                            type="text" 
                            name="name" 
                            id="" 
                            placeholder="Enter your name"/>
                            <input class="formfield" 
                            type="text" 
                            name="email" 
                            id="" 
                            placeholder="Enter your email address"/>
                            <input class="formfield" 
                            type="text" 
                            name="subject" 
                            id="" 
                            placeholder="Enter your subject"/>
                            <textarea class="formfield formfield-textarea" 
                            name="message"
                            cols="30" rows="10" 
                            id="" 
                            placeholder="Enter your message"></textarea>
                        </div>
                        <div>
                            <button type="submit" class="btn-pink" id="submit-btn">
                                Send Message &nbsp;
                                <FontAwesomeIcon icon={Icon.faPaperPlane} size="1x" />
                            </button>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
 )
}


