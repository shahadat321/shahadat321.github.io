import react, { Component } from "react";

class Contact extends Component{
    render(){
        return(
            <section className="section section--dark section--contact chunk--see-more">
                <div className="wrapper">
                    <div className="wrapper--push">
                        <div className="text-center"><h2 className="tagline tagline--long tagline--white">Contact</h2></div>
                        <br />
                        <br />
                        <div className="contact-col contact--form">
                            <div className="contact-col--item">
                                <div className="form">
                                    <input id="name" className="form__input" type="text" placeholder=" " />
                                    <label className="form__label">Name</label>
                                </div>
                            </div>
                            <div className="contact-col--item">
                                <div className="form">
                                    <input id="email" className="form__input" type="text" placeholder=" " />
                                    <label className="form__label">Email</label>
                                </div>
                            </div>
                            <div className="contact-col--item item-fluid">
                                <div className="form">
                                    <textarea id="comments" className="form__input form__input--textarea" placeholder=" "></textarea>
                                    <label className="form__label">Comments</label>
                                </div>
                            </div>
                            <div className="contact-col--item item-fluid text-center"><button className="btn btn-primary">Submit</button></div>
                        </div>

                        <div className="contact-col contact--form">
                            <div className="contact-col--item item-fluid text-center">
                                {/* <p className="tagline tagline--short tagline--white">Email</p> */}
                                <br />
                                <br />
                                <br />

                                <p className="contact-phone"><a href="https://wa.me/9910613200?text=Hi there,%20How%20are%20you%20doing?"> <img className="whatsapp-icon" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-1024.png" width='30' /> +91-99106132<span className="ani-text tel"><b>...00</b></span></a></p>

                                <p className="contact-email"><a href="mailto:shahadat.rockstar@gmail.com">shahadat.rock<span className="ani-text"><b>...star</b></span>@<span className="ani-text--last">gmail.com</span></a></p>

                                 <p className="contact-social"><a href="">LinkedIn</a> <a href="">Twitter</a> <a href="">GitHub</a></p>
                                 <p>© 2011-22 UILab.in</p>
                            </div>
                        </div>

                        {/* <div className="contact-col">
                            <div className="copyright">© 2011-22 -:- uilab.in -:- All right reserved.</div>
                            <div className="social"><a href="">LinkedIn</a> <a href="">Twitter</a> <a href="">GitHub</a></div>
                        </div> */}
                    </div>
                    
                </div>
            </section>
        )
    }
}
export default Contact;