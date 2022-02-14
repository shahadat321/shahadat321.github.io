import React, { Component } from "react";
import { Scene } from "react-scrollmagic";

class Contact extends Component{
    state = {error: null}
    onSubmit = (e) => {
        e.preventDefault();
        fetch(
          "https://script.google.com/macros/s/AKfycbw31RppvJmmR-jHf3hS9BhtAcLVlL8FHqDs-mMeE10khROwvg/exec",
          { method: "POST", body: new FormData(e.currentTarget) }
        )
        .then((response) => {
            console.log("Thanks your feedback!");
            e.target.reset();
        })
        .catch((error) => {
            this.setState({
                error: error.message
            })
        });
    };

    render(){
        return(
            <section id="contact" className="section section--dark section--contact chunk--see-more">
                <div className="wrapper">
                    <div className="wrapper--push">
                        <Scene classToggle="fade-up" reverse={true} offset={-200}>
                            <div className="text-center fade-effect">
                                <h3 className="tagline tagline--long tagline--light">Want to share</h3>
                                <p className="contact--text">Any comments and suggestions will be appreciated.</p>
                            </div>
                        </Scene>
                        <Scene classToggle="fade-up" reverse={true} offset={-200}>
                            <div className="contact-col contact--form fade-effect">
                                <form onSubmit={this.onSubmit} className="form-wrap">
                                    <div className="contact-col--item">
                                        <div className="form-group">
                                            <input id="name" name="name" className="form-control" type="text" placeholder=" " required />
                                            <label className="form-label">Name</label>
                                        </div>
                                    </div>
                                    <div className="contact-col--item">
                                        <div className="form-group">
                                            <input id="email" name="email" className="form-control" type="email" placeholder=" " required />
                                            <label className="form-label">Email</label>
                                        </div>
                                    </div>
                                    <div className="contact-col--item item-fluid">
                                        <div className="form-group">
                                            <textarea id="feedback" name="comment" className="form-control form-control--textarea" placeholder=" " required></textarea>
                                            <label className="form-label">Feedback</label>
                                        </div>
                                    </div>
                                    {/* <div className="" >{this.state.error}</div> */}
                                    <div className="contact-col--item item-fluid text-center"><button className="btn btn-primary" type="submit">Submit</button></div>
                                </form>
                            </div>
                        </Scene>
                        <Scene classToggle="fade-up" reverse={true} offset={-350}>
                            <div className="contact-col contact--form fade-effect">
                                <div className="contact-col--item item-fluid text-center">
                                    <p className="contact-phone"><a href="https://wa.me/9910613200?text=Hi there,%20How%20are%20you%20doing?"> <img className="whatsapp-icon" src="./images/whatsapp.png" width="30" height="30" loading="lazy" alt="" /> +91-99106132<span className="is-desktop">00</span><span className="animate-text tel"><b>...00</b></span></a></p>

                                    <p className="contact-email"><a href="mailto:shahadat.rockstar@gmail.com">shahadat.rock<span className="is-desktop">star</span><span className="animate-text"><b>...star</b></span>@<span className="animate-text--last">gmail.com</span></a></p>

                                    <p className="contact-social"><a href="https://www.linkedin.com/in/shahadat-hussain-97256988/" target="_blank" rel="noreferrer">LinkedIn</a> <a href="https://github.com/shahadat321" target="_blank" rel="noreferrer">GitHub</a> <a href="https://twitter.com/shahadat15" target="_blank" rel="noreferrer">Twitter</a></p>
                                    <p className="copyright">© 2011-22 <a href="https://uilab.in/">UILab.in</a> All right reserved.</p>
                                </div>
                            </div>
                        </Scene>
                    </div>
                    
                </div>
            </section>
        )
    }
}
export default Contact;