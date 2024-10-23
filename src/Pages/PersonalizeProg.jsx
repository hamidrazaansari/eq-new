import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProgImg from '../assets/image/personalize-prog.png'
import '../assets/css/personalize-prog.css'
import { IoMdStar } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import Slider from 'react-slick'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import ScrollAnimation from 'react-animate-on-scroll';




// Custom Prev Arrow
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-prev-btn" onClick={onClick}>
        <HiOutlineArrowLongLeft />
      </button>
    );
  };
  
  // Custom Next Arrow
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-next-arrow" onClick={onClick}>
        <HiOutlineArrowLongRight />
      </button>
    );
  };


function PersonalizeProg() {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
      };
    
    return (
        <div className='personalize-program' >
            <NavBar />
            <section >
                <div className="container">
                    <h2>Personalized Training  <span>Program</span> </h2>
                    <div className="breadcrumb">
                        <a href="/">Homepage</a>  <span></span>
                        <a href="/">Personalized Training Program</a>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="program-box">
                                <img src={ProgImg} alt="Personal Training Trail" />
                                <h3>Trail Plans</h3>
                                <div className="populaty">
                                    <p className='rating'>5 <IoMdStar style={{ fontSize: "10px", position: "relative", right: "5px" }} /></p>
                                    <p><FaRegUser /> <span>2445 People taken the plan </span></p>
                                </div>
                                <span className='time'>45 Minutes</span>
                                <button className='BookNowBtn '>Book Now</button>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="program-box">
                                <img src={ProgImg} alt="Personal Training Trail" />
                                <h3>Starter Plans (45minutes)</h3>
                                <div className="populaty">
                                    <p className='rating'>5 <IoMdStar style={{ fontSize: "10px", position: "relative", right: "5px" }} /></p>
                                    <p><FaRegUser /> <span>2445 People taken the plan </span></p>
                                </div>
                                <span className='time'>45 Minutes</span>
                                <button className='BookNowBtn '>Book Now</button>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="program-box">
                                <img src={ProgImg} alt="Personal Training Trail" />
                                <h3>weterm Plans (60 minutes)</h3>
                                <div className="populaty">
                                    <p className='rating'>5 <IoMdStar style={{ fontSize: "10px", position: "relative", right: "5px" }} /></p>
                                    <p><FaRegUser /> <span>2445 People taken the plan </span></p>
                                </div>
                                <span className='time'>45 Minutes</span>
                                <button className='BookNowBtn '>Book Now</button>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="program-box">
                                <img src={ProgImg} alt="Personal Training Trail" />
                                <h3>Trail Plans</h3>
                                <div className="populaty">
                                    <p className='rating'>5 <IoMdStar style={{ fontSize: "10px", position: "relative", right: "5px" }} /></p>
                                    <p><FaRegUser /> <span>2445 People taken the plan </span></p>
                                </div>
                                <span className='time'>45 Minutes</span>
                                <button className='BookNowBtn '>Book Now</button>

                            </div>
                        </div>

                    </div>
                    <div className="row my-5">
                        <div className="col-12 p-3">
                            <div className="recall">
                                <h2>Need help finding the right plans?</h2>
                                <p>Request a callback to get your quires answered</p>
                                <button>Request a call</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="other-plan">
                        <h2 className='other-plan-heading'>See Others plans</h2>

                        <Slider {...settings}>
                            <div className="slide">
                            <div className="program-box">
                                <img src={ProgImg} alt="Personal Training Trail" />
                                <h3>Hybrid Training Program</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur hjgg adipiscing elit, sed do eiusmod tempor lorem </p>
                                <button className='BookNowBtn '>Explore plan</button>

                            </div>
                            </div>
                            <div className="slide">
                            <div className="program-box">
                                <img src={ProgImg} alt="Personal Training Trail" />
                                <h3>Corporate Wellness Program</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur hjgg adipiscing elit, sed do eiusmod tempor lorem </p>
                                <button className='BookNowBtn '>Explore plan</button>

                            </div>
                            </div>
                            <div className="slide">
                            <div className="program-box">
                                <img src={ProgImg} alt="Personal Training Trail" />
                                <h3>Group Training Program</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur hjgg adipiscing elit, sed do eiusmod tempor lorem </p>
                                <button className='BookNowBtn '>Explore plan</button>

                            </div>
                            </div>
                            <div className="slide">
                            <div className="program-box">
                                <img src={ProgImg} alt="Personal Training Trail" />
                                <h3>Hybrid Training Program</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur hjgg adipiscing elit, sed do eiusmod tempor lorem </p>
                                <button className='BookNowBtn '>Explore plan</button>

                            </div>
                            </div>
                        </Slider>
                   </div>
                </div>
            </section>
            <section class="mailing">
                <div className="container">
                    <ScrollAnimation animateIn="fadeInUp">
                        <h2 className='text-center'>Join the Equilibrium Mailing List</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp">
                        <p className='text-center'>Be the first to hear about competitions & offers.</p>
                    </ScrollAnimation>
                    {/* <ScrollAnimation animateIn="fadeInUp">   */}
                    <form action="" className='d-flex align-items-center justify-content-center'>
                        <input type="text" placeholder='Email Address' className='form-control' />
                        <button className='form-submit '>Subscribe</button>
                    </form>
                    {/* </ScrollAnimation>     */}
                </div>
            </section>
            <section className='footer'>
                <Footer />

            </section>
        </div>
    )
}

export default PersonalizeProg