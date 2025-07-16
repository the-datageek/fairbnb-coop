import React from 'react';
import '../component.css';
import whyFairImg from '../../assets/whyfair.png';

const HostNowImg = "https://plus.unsplash.com/premium_photo-1687710306880-95c72d9a19c5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&w=600";

const AboutSection: React.FC = () => (
  <>
    <section className="aboutSection">
      <div className="aboutSection-col aboutSection-colLeft">
        <div className="aboutSection-imageCol">
          <img src="https://images.unsplash.com/photo-1621570277341-4fea9203f5e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXBhbnklMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D?auto=compress&w=400" alt="Team" className="aboutSection-img aboutSection-img1" />
          <img src="https://plus.unsplash.com/premium_photo-1661698455305-75c6e7c17abe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMGdyb3VwfGVufDB8fDB8fHww?auto=compress&w=400" alt="Workshop" className="aboutSection-img aboutSection-img2" />
        </div>
      </div>
      <div className="aboutSection-col aboutSection-colRight">
        <div className="aboutSection-label">About<span>-----</span></div>
        <h2 className="aboutSection-title">Mission-Driven & Bold</h2>
        <p className="aboutSection-desc">
          We are a cooperative platform that<br />
          puts people over profit by reinvesting in the<br />
          communities.
        </p>
        <div className="aboutSection-stats">
          <div className="aboutSection-stat">
            <div className="aboutSection-statValue">1000+</div>
            <div className="aboutSection-statLabel">ethical travellers</div>
          </div>
          <div className="aboutSection-stat">
            <div className="aboutSection-statValue">200+</div>
            <div className="aboutSection-statLabel">local projects funded</div>
          </div>
          <div className="aboutSection-stat">
            <div className="aboutSection-statValue">50%</div>
            <div className="aboutSection-statLabel">off every booking fee</div>
          </div>
        </div>
      </div>
    </section>
    {/* Why Fair Section */}
    <section className="whyFairSection">
      <div className="whyFair-col whyFair-colLeft">
        <div className="whyFair-label">Why Fair?<span>----</span></div>
        <h2 className="whyFair-title">Fair Looks Different Here</h2>
        <div className="whyFair-desc">
          <p>The host earns the same. The guest pays the same.<br />But the community shares in the value.</p>
          <p>50% of our platform fee is used to fund a project of your choice for the communities you visit.<br />This is what we call Community Powered Tourism.</p>
        </div>
        <button className="whyFair-btn">Discover how Fairbnb.coop works →</button>
      </div>
      <div className="whyFair-col whyFair-colRight">
        <img src={whyFairImg} alt="Why Fair" className="whyFair-img" />
      </div>
    </section>
    {/* Host Now Section */}
    <section className="hostNowSection">
      <div className="hostNow-col hostNow-colLeft">
        <h2 className="hostNow-title">Host now</h2>
        <p className="hostNow-desc">
          Listing your accommodation on Fairbnb.coop is free and helps to<br />
          crowdfund social projects in your community.
        </p>
        <button className="hostNow-btn">
          <span className="hostNow-btnText">Add your listing</span>
          <span className="hostNow-btnIcon">→</span>
        </button>
      </div>
      <div className="hostNow-col hostNow-colRight">
        <img src={HostNowImg} alt="Host" className="hostNow-img" />
      </div>
    </section>
    {/* Impact Calculator Section */}
    <section className="impactSection">
      <h2 className="impactSection-title">Discover the potential impact of<br />Fairbnb.coop in your city</h2>
      <p className="impactSection-desc">
        Booking a stay on Fairbnb.coop you will have a positive impact on your<br />
        destination by funding a local community project.
      </p>
      <button className="impactSection-btn">
        <span className="impactSection-btnText">Try the Impact Calculator</span>
      </button>
    </section>
    {/* Footer Section */}
    <footer className="footerSection">
      <div className="footer-col footer-colLogo">
        <img src="https://placehold.co/80x80?text=Logo" alt="Logo" className="footer-logo" />
        <div className="footer-tagline">Community empowered<br />tourism</div>
      </div>
      <div className="footer-col footer-colLinks">
        <div className="footer-heading">Quick links</div>
        <ul className="footer-links">
          <li>How it works</li>
          <li>Get involved</li>
          <li>About Us</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="footer-col footer-colContact">
        <div className="footer-heading">Contact Us</div>
        <div className="footer-socials">
          {/* LinkedIn icon */}
          <span className="footer-socialIcon" title="LinkedIn">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          </span>
          {/* Gmail icon */}
          <span className="footer-socialIcon" title="Gmail">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-8-6.065v10.5c0 .828.672 1.5 1.5 1.5h13c.828 0 1.5-.672 1.5-1.5v-10.5l-8 6.065zm8-8.065h-16c-.828 0-1.5.672-1.5 1.5v.5l9 6.818 9-6.818v-.5c0-.828-.672-1.5-1.5-1.5z"/></svg>
          </span>
          {/* Phone icon */}
          <span className="footer-socialIcon" title="Phone">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.07 22 2 13.93 2 4.5c0-.55.45-1 1-1H6.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.33.03.7-.24 1.01l-2.2 2.2z"/></svg>
          </span>
        </div>
      </div>
      <div className="footer-col footer-colNewsletter">
        <div className="footer-heading">Subscribe to our Newsletter</div>
        <form className="footer-newsletterForm">
          <input type="email" className="footer-newsletterInput" placeholder="Email address" />
          <button type="submit" className="footer-newsletterBtn">Send</button>
        </form>
      </div>
    </footer>
  </>
);

export default AboutSection; 