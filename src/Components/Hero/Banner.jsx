import React, { Component } from 'react';

class Banner extends Component {
    state = {  }
    render() { 
        return (
            <section className="hero hero--dark">
                <div className="wrapper">
                    <div className="wrapper--push">
                        <div className="wrapper--content">
                            <p>
                            {/* <span class="tagline tagline--long tagline--white">Shahadat Hussain</span><br /> */}
                                I'm a <b>front-end developer</b> who aims to combine the beauty of design with the latest technologies and achieve a highly optimized end product.
                            </p>

                            {/* <p>Start your journey to the Digital World!</p>
                            <p>I'm a <b>front-end web developer</b> with having versatile ability to solve lots of things along with 10+ years of great industry experience.</p> */}

                            

                            {/* <p>Development is not just about writing a few lines of code. It’s about creating a magic that your customers experience with every click.</p> */}



                            {/* <p><strong>We are Abstrakt</strong>, and we’re redefining what you’ve come to expect from a brand and digital agency.</p> */}
                            {/* <p>START YOUR JOURNEY TO THE DIGITAL WORLD</p> */}
                            {/* <p style={{fontSize: '1.25rem', marginBottom: '0'}}> -- As a Front-end Developer</p> */}

                            {/* <h2 class="tagline tagline--long tagline--white" style={{fontSize: '1.25rem', marginBottom: '0', textTransform: 'capitalize'}}>As a Front-end Developer</h2> */}
                            {/* <p>I have diverse experience as I have worked with agencies and brands dealing in different industries. This includes Enterprise software companies, Media houses, Branding and Advertising agencies.</p> */}
                            {/* <p style={{fontSize: '1.25rem'}}> -- Front-end Developer from New Delhi INDIA</p> */}
                            <span className="hero--arrow-icon arrow bounce">
                                <svg viewBox="0 0 29 107" xmlns="http://www.w3.org/2000/svg"><path d="M15.425 106.639l13.116-12.42c.55-.446.615-1.23.144-1.751a1.363 1.363 0 0 0-1.993 0l-10.887 10.296V1.242C15.805.556 15.218 0 14.493 0c-.724 0-1.311.556-1.311 1.242v101.522L2.308 92.468a1.363 1.363 0 0 0-1.85-.136 1.197 1.197 0 0 0 0 1.887l13.117 12.42a1.364 1.364 0 0 0 1.85 0z" fill="#FFF"></path></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Banner;