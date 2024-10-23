import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/css/hero.css';
import '../assets/css/program.css';
import program from '../assets/image/program-1.png'
import program2 from '../assets/image/program-2.png'
import program3 from '../assets/image/program-3.png'
import program6 from '../assets/image/program-6.png'
import Target from '../assets/image/target2.png'
import Expert from '../assets/image/expert2.png'
import Confidence from '../assets/image/confidence2.png'
import progArrow from '../assets/image/arrow1.png'
import progArrow2 from '../assets/image/arrow-2.png'
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Program = () => {
  // Use layout effect for GSAP context
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Select all horizontal sections
      const horizontalSections = gsap.utils.toArray('.horizontal-section');

      // Apply horizontal scroll animation
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '#container',
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => '+=' + document.querySelector('#container').offsetWidth,
        },
      });
    });

    return () => ctx.revert(); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="container mb-5 position-relative">
        <div className='arrow'><img src={progArrow} alt="" /></div>
        <div className='arrow-point'><img src={progArrow2} alt="" /></div>
        <ScrollAnimation animateIn="fadeInUp">
        <h2>Our <br /> 
        <span>Programs</span></h2>
        </ScrollAnimation>
      </div>
      <main id="container">
        {/* ---------- Section 01: Program 1 ---------- */}
        <section className="horizontal-section">
          <div className="prog">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-box">
                  <img src={program} alt="Personalized Training Program" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <p className='num'>01</p>

                  <h3>Personalized Training Program</h3>

                  <p>Unlock your potential with tailored yoga sessions designed just for you. Whether you're a beginner or advanced, our program adapts to your needs, helping you grow stronger, more flexible, and balanced. Experience yoga that evolves with you, every step of the way.</p>

                  <ul>
                    <li><img src={Target} alt="Targeted Goals" /><span>Targeted Goals</span></li>
                    <li><img src={Expert} alt="Expert Guidance" /><span>Expert Guidance</span></li>
                    <li><img src={Confidence} alt="Increased Confidence" /><span>Increased Confidence</span></li>
                  </ul>

                 <Link to={'/program'}><button className='program-btn'>Explore the plan</button></Link>  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Section 02: Program 2 ---------- */}
        <section className="horizontal-section">
          <div className="prog">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-box">
                  <img src={program2} alt="Personalized Training Program" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <p className='num'>02</p>
                  <h3>Hybrid Training
                    Program</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  aliquip ex ea commodo consequat. </p>
                  <ul>
                    <li><img src={Target} alt="Targeted Goals" /><span>Targeted Goals</span></li>
                    <li><img src={Expert} alt="Expert Guidance" /><span>Expert Guidance</span></li>
                    <li><img src={Confidence} alt="Increased Confidence" /><span>Increased Confidence</span></li>
                  </ul>
                  <button className='program-btn'>Explore the plan</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Section 03: Program 3 ---------- */}
        <section className="horizontal-section">
          <div className="prog">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-box">
                  <img src={program3} alt="Personalized Training Program" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <p className='num'>03</p>
                  <h3>Group Training
                    Program</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  aliquip ex ea commodo consequat. </p>
                  <ul>
                    <li><img src={Target} alt="Targeted Goals" /><span>Targeted Goals</span></li>
                    <li><img src={Expert} alt="Expert Guidance" /><span>Expert Guidance</span></li>
                    <li><img src={Confidence} alt="Increased Confidence" /><span>Increased Confidence</span></li>
                  </ul>
                  <button className='program-btn'>Explore the plan</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Section 04: Additional Content ---------- */}
        <section className="horizontal-section">
          <div className="prog">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-box">
                  <img src={program6} alt="Personalized Training Program" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <p className='num'>04</p>
                  <h3>Corporate Wellness
                    Program</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. aliquip ex ea commodo consequat.  </p>
                  <ul>
                    <li><img src={Target} alt="Targeted Goals" /><span>Targeted Goals</span></li>
                    <li><img src={Expert} alt="Expert Guidance" /><span>Expert Guidance</span></li>
                    <li><img src={Confidence} alt="Increased Confidence" /><span>Increased Confidence</span></li>
                  </ul>
                  <button className='program-btn'>Explore the plan</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Section 03: Program 5 ---------- */}
        <section className="horizontal-section">
          <div className="prog">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-box">
                  <img src={program6} alt="Personalized Training Program" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <p className='num'>05</p>
                  <h3>Build My Own
                    Program</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. aliquip ex ea commodo consequat.  </p>
                  <ul>
                    <li><img src={Target} alt="Targeted Goals" /><span>Targeted Goals</span></li>
                    <li><img src={Expert} alt="Expert Guidance" /><span>Expert Guidance</span></li>
                    <li><img src={Confidence} alt="Increased Confidence" /><span>Increased Confidence</span></li>
                  </ul>
                  <button className='program-btn'>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Section 03: Program 6 ---------- */}
        <section className="horizontal-section">
          <div className="prog">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-box">
                  <img src={program6} alt="Personalized Training Program" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <p className='num'>06</p>
                  <h3>Merchandise</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. aliquip ex ea commodo consequat.  </p>
                  <ul>
                    <li><img src={Target} alt="Targeted Goals" /><span>Targeted Goals</span></li>
                    <li><img src={Expert} alt="Expert Guidance" /><span>Expert Guidance</span></li>
                    <li><img src={Confidence} alt="Increased Confidence" /><span>Increased Confidence</span></li>
                  </ul>
                  <button className='program-btn'>Explore the plan</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Program;
