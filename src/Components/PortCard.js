import React, { Component, useState } from "react";
import { Scene } from "react-scrollmagic";

class PortCard extends Component{
    render(){
        return(
            <Scene classToggle="fade-up" reverse={true} offset={-300}>
                <div className="work-half--item fade-effect">
                    <div className="hover-effect">
                        <a href={this.props.href} target="_blank" rel="noreferrer nofollow">
                            <figure>
                                <picture>
                                    <source type="image/webp" srcSet={this.props.imgWEBP} />
                                    <source type="image/avif" srcSet={this.props.imgAVIF} />
                                    <source type="image/jpeg" srcSet={this.props.imgJPG} />
                                    <img decoding="async" loading="lazy" src={this.props.imgJPG} alt="Portfolio" />
                                </picture>
                                <figcaption className="work-overlay">
                                    <div className="work-overlay--content">
                                        <h4 className="work-item--text item-title">{this.props.title}</h4>
                                        <h5 className="work-item--text item-description">{this.props.description}</h5>
                                        <button className="work-item--text item-btn" type="button" title={this.props.btnTitle}>View Project</button>
                                    </div>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </Scene>
        )
    }
}

export default PortCard;