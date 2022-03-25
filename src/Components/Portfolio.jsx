import React, { Component, useState } from "react";
import { Scene } from "react-scrollmagic";
import Port from "./PortAPI";
import PortCard from "./PortCard";

class Portfolio extends Component{
    render(){
        return(
            <section id="portfolio" className="section section--dark section--work">
                <div className="wrapper">
                    <div className="wrapper--push work-push-up">

                        <div className="work-thumbs">
                            {Port.map((data) => (<PortCard {...data} key={data.id} />))}
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