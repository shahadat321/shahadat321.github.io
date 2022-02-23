import React, { Component, useState } from "react";
import { Scene } from "react-scrollmagic";
import Port from "./PortAPI";
// import PortCard from "./PortCard";
import PortCard from "./PortCard";

class Portfolio extends Component{
    render(){
        return(
            <section id="portfolio" className="section section--dark section--work">
                <div className="wrapper">
                    <div className="wrapper--push work-push-up">

                        {/* <div className="work-fluid work-fluid--first">
                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-fluid--item hover-effect fade-effect">
                                    <a href="https://pdfsimpli.com/" target="_blank" rel="noreferrer nofollow">
                                        <img src="./images/port-1.jpg" loading="lazy" alt="" />
                                        <div className="work-overlay">
                                            <div className="work-overlay--content">
                                                <h5 className="work-item--text item-title">PDFSimpli.com</h5>
                                                <h5 className="work-item--text item-description">Created component-based layout, ASP.NET MVC framework, Bootstrap, CSS pre-processor SCSS/SASS and Azure.</h5>
                                                <button className="work-item--text item-btn" type="button" title="PDFSimpli.com">View Project</button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Scene>
                        </div> */}

                        <div className="work-half">

                            {Port.map((data) => (<PortCard {...data} key={data.id} />))}

                            {/* <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://www.thequint.com/" target="_blank" rel="noreferrer nofollow">
                                            <figure>
                                                <picture>
                                                    <source type="image/webp" srcset="./images/webp/port-2.webp" />
                                                    <source type="image/jpeg" srcset="./images/port-2.jpg" />
                                                    <img src="./images/port-2.jpg" />
                                                </picture>
                                                <figcaption className="work-overlay">
                                                    <div className="work-overlay--content">
                                                        <h4 className="work-item--text item-title">Quint Digital Media Limited</h4>
                                                        <h5 className="work-item--text item-description">Created component-based layout, JavaScript library ReactJS, Grids susy grids, CSS pre-processor SCSS/SASS.</h5>
                                                        <button className="work-item--text item-btn" type="button" title="TheQuint.com">View Project</button>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                            
                                        </a>
                                    </div>

                                </div>
                            </Scene>

                            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                                <div className="work-half--item fade-effect">
                                    <div className="hover-effect">
                                        <a href="https://www.thequint.com/" target="_blank" rel="noreferrer nofollow">
                                            <img src="./images/port-2.jpg" loading="lazy" alt="" />
                                            <div className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">Quint Digital Media Limited</h4>
                                                    <h5 className="work-item--text item-description">Created component-based layout, JavaScript library ReactJS, Grids susy grids, CSS pre-processor SCSS/SASS.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="TheQuint.com">View Project</button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </Scene> */}
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