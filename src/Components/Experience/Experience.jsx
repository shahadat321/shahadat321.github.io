import React, { Component } from "react";

class Experience extends Component{
    render(){
        return(
            <section className="section section--dark section--exp ">
                <div className="wrapper">
                    <div className="wrapper--push work-push-up">
                        {/* <div className="text-center"><h2 className="tagline tagline--long tagline--white">Experience</h2></div>
                        <br />
                        <br /> */}
                        <div className="exp-col">
                            <div className="exp-col--item">
                                {/* <p className="tagline tagline--short tagline--white">01</p> */}
                                <p className="exp-number">01</p>
                                <h6>Jun 2019 - Present</h6>
                                <h5>Tech Lead II</h5>
                                <p><a href="https://worksimpli.io/" target="_blank">WorkSimpli Software, LLC.</a></p>
                                <p className="small"><strong>Technology:</strong> HTML5, CSS3, SCSS/SASS, JavaScript, React, Angular, JSON, Bootstrap, Azure and GitHub.</p>
                            </div>
                            <div className="exp-col--item">
                                <p className="exp-number">02</p>
                                <h6>Dec 2015 - Jun 2019</h6>
                                <h5>Sr. Front End Developer</h5>
                                <p><a href="https://indecomm.com/" target="_blank">Indecomm Global Services Pvt. Ltd.</a></p>
                                <p className="small"><strong>Technology:</strong> HTML5, CSS3, SCSS/SASS, JavaScript, React, JSON, Google API, Bootstrap and GitHub.</p>
                            </div>
                            <div className="exp-col--item">
                                <p className="exp-number">03</p>
                                <h6>Jul 2015 - Dec 2015</h6>
                                <h5>Sr. Front End Developer</h5>
                                <p><a href="https://braahmam.net/" target="_blank">Braahmam Net Solutions Pvt. Ltd.</a></p>
                                <p className="small"><strong>Technology:</strong> HTML5, CSS3, SCSS/SASS, JavaScript, WodrPress, Bootstrap and GitHub.</p>
                            </div>

                            <div className="exp-col--item">
                                <p className="exp-number">04</p>
                                <h6>Dec 2014 - Jul 2015</h6>
                                <h5>Sr. Front End Developer</h5>
                                <p><a href="https://jktech.com/" target="_blank">JK Technosoft Ltd.</a></p>
                                <p className="small"><strong>Technology:</strong> HTML5, CSS3, SCSS/SASS, JavaScript, jQuery Bootstrap and GitHub.</p>
                            </div>
                            <div className="exp-col--item">
                                <p className="exp-number">05</p>
                                <h6>Mar 2013 - Dec 2014</h6>
                                <h5>UI/UX Developer</h5>
                                <p><a href="https://www.18thdigitech.com/" target="_blank">18th DigiTech Pvt. Ltd.</a></p>
                                <p className="small"><strong>Technology:</strong> HTML5, CSS3, SCSS/SASS, JavaScript, jQuery, Bootstrap and GitHub.</p>
                            </div>
                            <div className="exp-col--item">
                                <p className="exp-number">06</p>
                                <h6>Jun 2011 - Mar 2013</h6>
                                <h5>UI Developer</h5>
                                <p><a href="http://www.frillmedia.com/" target="_blank">Frill Media Pvt. Ltd.</a></p>
                                <p className="small"><strong>Technology:</strong> HTML5, CSS3, SCSS/SASS, JavaScript, jQuery, Bootstrap and GitHub.</p>
                                
                            </div>
                            
                        </div>
                        <div className="text-center">
                            {/* <button className="btn btn-primary">To know more about me</button> */}
                            <a className="link--arrow link--white" href="https://www.linkedin.com/in/shahadat-hussain-97256988/"><span>about me</span></a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience;