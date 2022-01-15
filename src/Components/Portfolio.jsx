import React, { Component } from "react";
import { Scene } from "react-scrollmagic";

class Portfolio extends Component{
    render(){
        return(
            <section id="portfolio" className="section section--dark section--work">
                <div className="wrapper">
                    <div className="wrapper--push work-push-up">
                        <div className="work-fluid work-fluid--first">
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-fluid--item hover-effect fade-effect">
                                    <a href="https://pdfsimpli.com/" target="_blank" rel="noreferrer nofollow">
                                        <img src="./images/port-1.jpg" loading="lazy" alt="" />
                                        <div className="work-overlay">
                                            <div className="work-overlay--content">
                                                <h5 className="work-item--text item-title">PDFSimpli</h5>
                                                <h5 className="work-item--text item-description">Created component-based layout, ASP.NET MVC framework, Bootstrap, CSS pre-processor SCSS/SASS and Azure.</h5>
                                                <button className="work-item--text item-btn" type="button" title="PDFSimpli.com">View Project</button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Scene>
                        </div>

                        <div className="work-half">
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://www.thequint.com/" target="_blank" rel="noreferrer nofollow">
                                            <img src="./images/port-2.jpg" loading="lazy" alt="" />
                                            <div className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">The Quint</h4>
                                                    <h5 className="work-item--text item-description">Created component-based layout, JavaScript library ReactJS, Grids susy grids, CSS pre-processor SCSS/SASS.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="TheQuint.com">View Project</button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </Scene>
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://care4life.com/" target="_blank" rel="noreferrer nofollow">
                                            <img src="./images/port-3.jpg" loading="lazy" alt="" />
                                            <div className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">Care4life</h4>
                                                    <h5 className="work-item--text item-description">Developed mobile-first responsive code with latest technology HTML5, CSS3, Bootstrap, JavaScript and Slick Slider.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="Care4life.com">View Project</button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Scene>
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://text4baby.org/" target="_blank" rel="noreferrer nofollow">
                                            <img src="./images/port-4.jpg" loading="lazy" alt="" />
                                            <div className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">Text4baby</h4>
                                                    <h5 className="work-item--text item-description">Developed mobile-first responsive code with latest technology HTML5, CSS3, Bootstrap, JavaScript and Slick Slider.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="Text4Baby.com">View Project</button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Scene>
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://www.thequint.com/quintlab/buri-ladki-game/" target="_blank" rel="noreferrer nofollow">
                                            <img src="./images/port-5.jpg" loading="lazy" alt="" />
                                            <div className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">Buri Ladki</h4>
                                                    <h5 className="work-item--text item-description">Who is a 'Buri Ladki'? You decide.
                                                    Developed interactive game with full screen slider.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="BuriLadkiGame">View Project</button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Scene>
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://braahmam.net/" target="_blank" rel="noreferrer nofollow">
                                            <img src="./images/port-6.jpg" loading="lazy" alt="" />
                                            <div className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">Braahmam</h4>
                                                    <h5 className="work-item--text item-description">Converted PSD to WordPress, theme customization, manage widget and plugins.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="Braahmam.com">View Project</button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Scene>
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://www.thequint.com/quintlab/sandesh-to-a-soldier/" target="_blank" rel="noreferrer nofollow">
                                            <img src="./images/port-7.jpg" loading="lazy" alt="" />
                                            <div className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">Sandesh to a Soldier - The Quint</h4>
                                                    <h5 className="work-item--text item-description">Developed a full screen parallax microsite to send a message to the Soldier.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="SandeshtoaSoldier">View Project</button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Scene>
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://www.thequint.com/quintlab/phone-life-balance/" target="_blank" rel="noreferrer nofollow">
                                            <img src="./images/port-8.jpg" loading="lazy" alt="" />
                                            <div className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">Motorola Partner - The Quint</h4>
                                                    <h5 className="work-item--text item-description">Developed a full screen parallax microsite for Phone-Life Balance.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="PhoneLifeBalance">View Project</button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Scene>
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://www.thequint.com/quintlab/concept-of-consent/" target="_blank" rel="noreferrer nofollow">
                                            <img src="./images/port-9.jpg" loading="lazy" alt="" />
                                            <div className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">Concept of Consent - The Quint</h4>
                                                    <h5 className="work-item--text item-description">
                                                    Custom Animated slider with transition effect quiz.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="ConceptOfConcent">View Project</button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Scene>
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://webcircle.com.au/" target="_blank" rel="noreferrer nofollow">
                                            <img src="./images/port-10.jpg" loading="lazy" alt="" />
                                            <div className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">WebCircle.com.au</h4>
                                                    <h5 className="work-item--text item-description">Developed mobile-first responsive code with latest technology HTML5, CSS3, Bootstrap, JavaScript and Slider.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="WebCircle.com.au">View Project</button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Scene>
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://beyondtheorphanage.org/" target="_blank" rel="noreferrer nofollow">
                                            <img src="./images/port-11.jpg" loading="lazy" alt="" />
                                            <div className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">Beyond the Orphanage</h4>
                                                    <h5 className="work-item--text item-description">Developed mobile-first responsive code with latest technology HTML5, CSS3, Bootstrap, JavaScript and Swiper Slider.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="BeyondTheOrphanage.org">View Project</button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Scene>
                        </div>
                        <Scene classToggle="fade-up" reverse={true} offset={-300}>
                            <div className="text-center fade-effect"><a href="#portfolio" className="btn btn-primary">View all work</a></div>
                        </Scene>

                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;