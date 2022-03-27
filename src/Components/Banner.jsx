import React, { Component } from 'react';

class Banner extends Component {
    render() { 
        return (
            <section id="home" className="hero hero--dark">
                <div className="wrapper">
                    <div className="wrapper--push">
                        <div className="wrapper--content">
                            <span className='tag-line'>Hi, my name is</span>
                            <h1 className="main-headline">Shahadat Hussain.</h1>
                            {/* <h1 className="main-headline">What was Impossible Technology makes Possible.</h1> */}
                            <h2 className="sub-headline">I'm a front-end developer.</h2>
                            <h3 className="hero-content">I build interactive website that run across <span>platforms &amp; devices.</span></h3>
                            <a className="scroll-mouse" href="#about" aria-label="UILab.in"><span>Scroll Mouse</span></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Banner;