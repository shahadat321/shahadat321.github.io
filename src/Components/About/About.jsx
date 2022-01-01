import React, { Component } from "react";
import './About.scss';

class About extends Component{
    render(){
        return(
            <section className="section section--light section--about">
                <div className="wrapper">
                    <div className="wrapper--push">
                        <p className="tagline tagline--long tagline--black">About</p>

                        <div className="section--about-content">
                            <div className="large">
                                <h3>I'm Shahadat Hussain, Training myself every day and pushing my own limits to discover new ways, having versatile ability to solve lots of things along with 10 years of great industry experience.</h3>

                                <p>I have diverse experience as I have worked with agencies and brands dealing in different industries. This includes Enterprise software companies, Media houses, Branding and Advertising agencies. Each has its own set of challenges and learnings. This has enabled me to venture into unknown territories without much thought.</p>
                                {/* <h3>I'm a web developer who aims to combine the beauty of design with the logical perfection of coding. Training myself every day and pushing my own limits to discover new ways of creating a great experience for the users.</h3> */}
                            </div>

                            {/* <div className="content-row">
                                <div className="content-row--box">
                                    <p>I specialize in front-end development with latest technology implementations and improving usability, mostly focus on simplicity, mobile first, responsive design, SEO friendly, cross-browser compatibility and pixel-perfection.</p>
                                    
                                </div>
                                <div className="content-row--box">
                                    <p>Front end development is incomplete without strong background knowledge of design. Knowing how the user would interact with the application is an essential part of designing.</p>
                                </div>
                            </div>  */}

                        </div>

                        {/* <div className="large">
                            <p>As an agency based in Nottingham, we specialise in customer experience and achieving results by delivering engaging experiences, both digitally and offline.</p>
                        </div>

                        <div className="g g--gutter bump--md">
                            <div className="gs__1-2">
                                <p>We’ve made a point of redefining what you’ve come to expect from a digital agency and we work hard to ensure that our client's goals and objectives are met and exceeded, no matter how big or small the project. An agency should make a difference to a business and that’s what we’re here to do.</p>
                            </div>
                            <div className="gs__1-2">
                                <p>Our services span across branding, digital design, web development, digital marketing and graphic design. The team behind Abstrakt are highly collaborative, remarkably creative and are driven with the same ideals and desire to do their very best work every single day.</p>
                            </div>
                        </div> */}

                        <a className="link--arrow link--black" href=""><span>About Me</span></a>

                    </div>
                </div>
            </section>
        )
    }
}

export default About;