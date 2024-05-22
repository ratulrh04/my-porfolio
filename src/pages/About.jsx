import SectionTitle from "../components/SectionTitle";

const About = () => {
    let aboutTitle = {
        name: "About Me"
    };
    return (
        <div>
            <section id="About">
                <SectionTitle {...aboutTitle} />
                <div className="about-sec-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="left-contant">
                                    <img src="/images/myPhoto.jpg" alt="my-photo" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="right-contant">
                                    <h1>A Programmer and Frontend Developer</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum aperiam modi dolorem temporibus. Fugiat eius, iusto officiis voluptatem nulla id illo veniam, veritatis exercitationem voluptas a ipsam sed minima recusandae sint? Ea numquam, provident, aliquid asperiores facere excepturi!</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="info-left-contant">
                                                <div className="inline-contant">
                                                    <span>Name<code>:</code></span><i> Ratul Raha</i>
                                                </div>
                                                <div className="inline-contant">
                                                    <span>Degree<code>:</code></span><i> Bsc in CSE</i>
                                                </div>
                                                <div className="inline-contant">
                                                    <span>Phone<code>:</code></span><i> 01334-579004</i>
                                                </div>
                                                <div className="inline-contant">
                                                    <span>Address<code>:</code></span><i> Khulna, Bangladesh</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="info-left-contant">
                                                <div className="inline-contant">
                                                    <span>Birthday<code>:</code></span><i>24.08.2002</i>
                                                </div>
                                                <div className="inline-contant">
                                                    <span>Age<code>:</code></span><i>22</i>
                                                </div>
                                                <div className="inline-contant">
                                                    <span>Email<code>:</code></span><i>ratulraha.04@gmail.com</i>
                                                </div>
                                                <div className="inline-contant">
                                                    <span>Work<code>:</code></span><i>Freelancer</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
