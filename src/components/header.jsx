import React from 'react';
import Slide1 from "../images/slides/1.jpg"
import Slide2 from "../images/slides/2.jpg"
import Slide3 from "../images/slides/3.jpg"
const Header = () => {
    return ( 
       < div className="boxed">
        <header>
        <div class="owl-carousel owl-item">
            <div class="item">
                <img src={Slide1} alt="images not found"/>
                <div class="cover">
                    <div class="container">
                        <div class="header-content">
                            <div class="line"></div>
                            <h2>Digital Experience</h2>
                            <h4>Transforming today’s workforce for tomorrow and beyond</h4>
                        </div>
                    </div>
                 </div>
            </div>                    
            <div class="item">
                <img src={Slide2} alt="images not found"/>
                <div class="cover">
                    <div class="container">
                        <div class="header-content">
                            <div class="line animated bounceInLeft"></div>
                            <h2>Intelligent solutions</h2>
                            <h4>Providing scalable solutions leveraging legacy and next gen technologies</h4>
                        </div>
                    </div>
                 </div>
            </div>                
            <div class="item">
                <img src={Slide3} alt="images not found"/>
                <div class="cover">
                    <div class="container">
                        <div class="header-content">
                            <div class="line animated bounceInLeft"></div>
                            <h2>Digital Solutions</h2>
                            <h4>Reimagine your business with hands on partner<br/> to support you define, design and deliver solutions.</h4>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </header>
    </div>
     );
}
 
export default Header;