import React, { Component } from "react";

class Portfolio extends Component{
    render(){
        return(
            <section className="section section--dark section--work">
                <div className="wrapper">
                    <div className="wrapper--push work-push-up">
                        {/* <div className="ta-c bump--sm"><h2 className="tagline tagline--long tagline--white">Work</h2></div>
                        <div>Portfolio</div> */}
                        <div className="work-fluid work-fluid--first">
                            <div className="work-fluid--item hover-effect">
                                <a href="https://pdfsimpli.com/" target="_blank">
                                    <img src="./images/port-1.jpg" />
                                    <div className="work-overlay">
                                        <div className="work-overlay--content">
                                            <h5 className="work-item--text item-title">PDFSimpli</h5>
                                            <h5 className="work-item--text item-description">PDF Made Simple in Seconds<br />
                                            Convert and edit any type of document easily!</h5>
                                            <button className="work-item--text item-btn" type="button">View Case Study</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="work-half">
                            <div className="work-half--item hover-effect">
                                <a href="https://www.thequint.com/">
                                    <img src="./images/port-2.jpg" />
                                    <div className="work-overlay">
                                        <div className="work-overlay--content">
                                            <h5 className="work-item--text item-title">The Quint</h5>
                                            <h5 className="work-item--text item-description">Latest News, Breaking News LIVE, Top News Headlines, Viral Videos News Updates - The Quint.</h5>
                                            <button className="work-item--text item-btn" type="button">View Case Study</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="work-half--item hover-effect">
                                <a href="">
                                    {/* <img src="https://www.frankdigital.com.au/img/work-thumbnails/work-campos.jpg" /> */}
                                    <img src="./images/port-3.jpg" />
                                    <div className="work-overlay">
                                        <div className="work-overlay--content">
                                            <h5 className="work-item--text item-title">The Forme</h5>
                                            <h5 className="work-item--text item-description">Launching a sophisticated eCommerce experience for the modern woman</h5>
                                            <button className="work-item--text item-btn" type="button">View Case Study</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="work-half--item hover-effect">
                                <a href="">
                                    {/* <img src="https://www.frankdigital.com.au/img/work-thumbnails/work-rab.jpg" /> */}
                                    <img src="./images/port-4.jpg" />
                                    <div className="work-overlay">
                                        <div className="work-overlay--content">
                                            <h5 className="work-item--text item-title">The Forme</h5>
                                            <h5 className="work-item--text item-description">Launching a sophisticated eCommerce experience for the modern woman</h5>
                                            <button className="work-item--text item-btn" type="button">View Case Study</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="work-half--item hover-effect">
                                <a href="">
                                    {/* <img src="https://www.frankdigital.com.au/img/work-thumbnails/frank_work_canteen_connect_mobile.jpg" /> */}
                                    <img src="./images/port-5.jpg" />
                                    <div className="work-overlay">
                                        <div className="work-overlay--content">
                                            <h5 className="work-item--text item-title">The Forme</h5>
                                            <h5 className="work-item--text item-description">Launching a sophisticated eCommerce experience for the modern woman</h5>
                                            <button className="work-item--text item-btn" type="button">View Case Study</button>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="work-half--item hover-effect">
                                <a href="">
                                    <img src="./images/port-6.jpg" />
                                    <div className="work-overlay">
                                        <div className="work-overlay--content">
                                            <h5 className="work-item--text item-title">The Forme</h5>
                                            <h5 className="work-item--text item-description">Launching a sophisticated eCommerce experience for the modern woman</h5>
                                            <button className="work-item--text item-btn" type="button">View Case Study</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="work-half--item hover-effect">
                                <a href="">
                                    <img src="./images/port-7.jpg" />
                                    <div className="work-overlay">
                                        <div className="work-overlay--content">
                                            <h5 className="work-item--text item-title">The Forme</h5>
                                            <h5 className="work-item--text item-description">Launching a sophisticated eCommerce experience for the modern woman</h5>
                                            <button className="work-item--text item-btn" type="button">View Case Study</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div className="p-spacer--large p-spacer-top--large ta-c">
                            <div className="crop crop--p">
                                {/* <p className="h1 color--white in in-move-top">Want to see more?</p> */}
                            </div>
                            <div className="crop crop--p">
                                <div className="in in-move-top">
                                    {/* <a className="link--arrow link--white" href="https://weareabstrakt.com/work"><span>View all work</span></a> */}

                                    <div className="text-center"><a href="" className="btn btn-primary">View all work</a></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;