import React from 'react';

const Home = () => {
    return (
        <div>
            <section className="section hero" aria-label="home" id="home" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/777.png)` }}>
                <div className="container">
                    <div className="hero-content">
                        <h2 className="h1 hero-title">
                            <span className="span">To Every</span> Direction
                        </h2>
                        <p className="hero-text">
                            There are many variations of passages of worem Ipsum available, but the majority
                        </p>
                        <a href="#service" className="btn-outline">View Services</a>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/hero-shape.png`} width="116" height="116" loading="lazy" className="hero-shape shape-1" alt="Hero Shape 1" />
                        <img src={`${process.env.PUBLIC_URL}/assets/images/hero-shape.png`} width="116" height="116" loading="lazy" className="hero-shape shape-2" alt="Hero Shape 2" />
                    </div>
                </div>
            </section>



            <section className="section about" id="about" aria-label="about">
                <div className="container">

                    <figure className="about-banner img-holder" style={{ '--width': 400, '--height': 720 }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/time.jpg`} width="400" height="720" loading="lazy" alt="" className="img-cover" />
                        <img src={`${process.env.PUBLIC_URL}/assets/images/about-shape-2.png`} width="500" height="500" loading="lazy" alt="" className="abs-img abs-img-2" />
                    </figure>

                    <div className="about-content">
                        <p className="section-subtitle">Why Choose Us</p>
                        <h2 className="h2 section-title">We Respect Your Valuable Time</h2>
                        <p className="section-text">
                            We ensure our sleeper buses are punctual, reaching destinations on schedule for a reliable travel experience.
                        </p>
                    
                        <ul className="about-list">
                            <li className="about-item">
                                <div className="about-icon">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </div>
                                <p className="about-text">
                                    Implement stringent safety measures, including regular maintenance checks, trained drivers, and onboard safety instructions.
                                </p>
                            </li>

                            <li className="about-item">
                                <div className="about-icon">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </div>
                                <p className="about-text">
                                    Provide clean, comfortable, and spacious sleeping berths with privacy curtains.
                                </p>
                            </li>

                            <li className="about-item">
                                <div className="about-icon">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </div>
                                <p className="about-text">
                                    Offer amenities such as charging ports, individual reading lights.
                                </p>
                            </li>

                            <li className="about-item">
                                <div className="about-icon">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </div>
                                <p className="about-text">
                                    Collect feedback through surveys and reviews to understand customer satisfaction and areas for improvement.
                                </p>
                            </li>

                            <li className="about-item">
                                <div className="about-icon">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </div>
                                <p className="about-text">
                                    Enable contactless payment options for a faster and safer transaction experience.
                                </p>
                            </li>

                            <li className="about-item">
                                <div className="about-icon">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </div>
                                <p className="about-text">
                                    Provide complimentary snacks and beverages to enhance the travel experience.
                                </p>
                            </li>
                        </ul>

                        <a href="/" className="btn">Learn More</a>

                    </div>

                </div>
            </section>


            <section className="section service" id="service" aria-label="service">
                <div className="container">

                    <p className="section-subtitle">All Services</p>

                    <h2 className="h2 section-title">Trusted For Our Services</h2>

                    <p className="section-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
                        the when an
                        printer took.
                    </p>

                    <ul className="service-list grid-list">

                        <li>
                            <div className="service-card">

                                <div className="card-icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/service-icon-3.png`} width="60" height="60" loading="lazy" alt="Airplane" />
                                </div>



                                <h3 className="h3 card-title">
                                    <span className="span">01</span> Air Freight
                                </h3>

                                <p className="card-text">
                                    Our aim is to optimize and improve your supply chain so that we can give you the best service.
                                </p>

                                <a href="/" className="btn-link">
                                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                                    <span className="span">View Detail</span>
                                </a>

                            </div>
                        </li>

                        <li>
                            <div className="service-card">

                                <div className="card-icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/service-icon-1.png`} width="80" height="60" loading="lazy" alt="Truck" />
                                </div>


                                <h3 className="h3 card-title">
                                    <span className="span">02</span> Road Freight
                                </h3>

                                <p className="card-text">
                                    Our aim is to optimize and improve your supply chain so that we can give you the best service.
                                </p>

                                <a href="/" className="btn-link">
                                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                                    <span className="span">View Detail</span>
                                </a>

                            </div>
                        </li>

                        <li>
                            <div className="service-card">

                                <div className="card-icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/service-icon-2.png`} width="74" height="60" loading="lazy" alt="Ship" />
                                </div>

                                <h3 className="h3 card-title">
                                    <span className="span">03</span> Ocean Freight
                                </h3>

                                <p className="card-text">
                                    Our aim is to optimize and improve your supply chain so that we can give you the best service.
                                </p>

                                <a href="/" className="btn-link">
                                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                                    <span className="span">View Detail</span>
                                </a>

                            </div>
                        </li>

                        <li>
                            <div className="service-card">

                                <div className="card-icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/service-icon-4.png`} width="50" height="60" loading="lazy" alt="Train" />
                                </div>

                                <h3 className="h3 card-title">
                                    <span className="span">04</span> Rail Freight
                                </h3>

                                <p className="card-text">
                                    Our aim is to optimize and improve your supply chain so that we can give you the best service.
                                </p>

                                <a href="/" className="btn-link">
                                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                                    <span className="span">View Detail</span>
                                </a>

                            </div>
                        </li>

                        <li>
                            <div className="service-card">

                                <div className="card-icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/service-icon-5.png`} width="63" height="60" loading="lazy" alt="Trolley" />
                                </div>

                                <h3 className="h3 card-title">
                                    <span className="span">05</span> Warehousing
                                </h3>

                                <p className="card-text">
                                    Our aim is to optimize and improve your supply chain so that we can give you the best service.
                                </p>

                                <a href="/" className="btn-link">
                                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                                    <span className="span">View Detail</span>
                                </a>

                            </div>
                        </li>

                        <li>
                            <div className="service-card">

                                <div className="card-icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/service-icon-6.png`} width="46" height="60" loading="lazy" alt="Paper" />
                                </div>

                                <h3 className="h3 card-title">
                                    <span className="span">06</span> Project Cargo
                                </h3>

                                <p className="card-text">
                                    Our aim is to optimize and improve your supply chain so that we can give you the best service.
                                </p>

                                <a href="/" className="btn-link">
                                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                                    <span className="span">View Detail</span>
                                </a>

                            </div>
                        </li>

                    </ul>

                </div>
            </section>


            <section className="section feature" aria-label="feature">
                <div className="container">

                    <div className="title-wrapper">

                        <div>
                            <p className="section-subtitle">Estimation</p>

                            <h2 className="h2 section-title">Has a wide range of solutions</h2>

                            <p className="section-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever
                                since the when an
                                printer took.
                            </p>
                        </div>

                        <a href="/" className="btn">Read More</a>

                    </div>

                    <ul className="feature-list grid-list">

                        <li>
                            <div className="feature-card" style={{ '--card-number': "'01'" }}>

                                <div className="card-icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature-icon-1.png`} width="72" height="91" alt="" />
                                </div>

                                <h3 className="h3 card-title">Solutions and specialized</h3>

                                <p className="card-text">
                                    Our aim is to optimize and improve your supply chain so that we can give you the best service
                                </p>

                                <a href="/" className="card-btn" aria-label="Read more">
                                    <ion-icon name="arrow-forward"></ion-icon>
                                </a>

                            </div>
                        </li>

                        <li>
                            <div className="feature-card" style={{ '--card-number': "'02'" }}>

                                <div className="card-icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature-icon-2.png`} width="94" height="94" alt="" />
                                </div>

                                <h3 className="h3 card-title">Multiple warehouses</h3>

                                <p className="card-text">
                                    We provide multiple drop off and pickup locations so you don't have to worry. And you should not face
                                    any kind...
                                </p>

                                <a href="/" className="card-btn" aria-label="Read more">
                                    <ion-icon name="arrow-forward"></ion-icon>
                                </a>

                            </div>
                        </li>

                        <li>
                            <div className="feature-card" style={{ '--card-number': "'03'" }}>

                                <div className="card-icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature-icon-3.png`} width="93" height="93" alt="" />
                                </div>

                                <h3 className="h3 card-title">Tracking made easy</h3>

                                <p className="card-text">
                                    A tracking number for the entire process. so that you can find the exact position. this process will
                                    help you
                                </p>

                                <a href="/" className="card-btn" aria-label="Read more">
                                    <ion-icon name="arrow-forward"></ion-icon>
                                </a>

                            </div>
                        </li>

                    </ul>

                </div>
            </section>


            <section className="section blog" aria-label="blog" id="blog">
                <div className="container">
                    <p className="section-subtitle">Our Blogs</p>
                    <h2 className="h2 section-title">Recent news & events</h2>
                    <p className="section-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an
                        printer took.
                    </p>
                    <ul className="blog-list grid-list">
                        <li>
                            <div className="blog-card">
                                <figure className="card-banner img-holder" style={{ '--width': '770', '--height': '500' }}>
                                    <img
                                        src="./assets/images/blog-1.jpg"
                                        width="770"
                                        height="500"
                                        loading="lazy"
                                        alt="At the end of the day, going forward, a new normal that has evolved from. your only logistic partner."
                                        className="img-cover"
                                    />
                                </figure>
                                <div className="card-content">
                                    <time className="card-meta" dateTime="2022-08-02">
                                        <span className="span">02</span> Aug
                                    </time>
                                    <h3 className="h3 card-title">
                                        <a href="/">
                                            At the end of the day, going forward, a new normal that has evolved from. your only logistic partner.
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting industry the standard
                                        dummy text ever since the when an printer.
                                    </p>
                                    <a href="/" className="btn-link">
                                        <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                                        <span className="span">Read More</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="blog-card">
                                <figure className="card-banner img-holder" style={{ '--width': '770', '--height': '500' }}>
                                    <img
                                        src="./assets/images/blog-2.jpg"
                                        width="770"
                                        height="500"
                                        loading="lazy"
                                        alt="Going forward, a new normal that has evolved from generation. moving your products across all borders."
                                        className="img-cover"
                                    />
                                </figure>
                                <div className="card-content">
                                    <time className="card-meta" dateTime="2022-08-21">
                                        <span className="span">21</span> Aug
                                    </time>
                                    <h3 className="h3 card-title">
                                        <a href="/">
                                            Going forward, a new normal that has evolved from generation. moving your products across all borders.
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting industry the standard
                                        dummy text ever since the when an printer.
                                    </p>
                                    <a href="/" className="btn-link">
                                        <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                                        <span className="span">Read More</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section newsletter" aria-label="newsletter">
                <div className="container">
                    <figure className="newsletter-banner img-holder">
                        <img src="./assets/images/newsletter-banner.png" width="303" height="381" alt="newsletter banner" className="w-100" />
                    </figure>
                    <div className="newsletter-content">
                        <h2 className="h2 section-title">Subscribe for offers and news</h2>
                        <form action="" className="newsletter-form">
                            <input type="email" name="email_address" placeholder="Enter Your Email" aria-label="email" className="email-field" />
                            <button type="submit" className="newsletter-btn">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
