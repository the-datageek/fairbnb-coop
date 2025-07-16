import React, { useState } from 'react';
import SearchForm from '../molecules/SearchForm';
import '../component.css';

const leftImages = [
  {
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww?auto=format&fit=crop&w=400&q=80',
    style: { width: '15rem', height: '16rem', top: 0, right: '-12.3rem', position: 'absolute' as 'absolute' },
  },
  {
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww?auto=format&fit=crop&w=400&q=80',
    style: { width: '22rem', height: '12rem', top: '17rem', right: '-18.3rem', position: 'absolute' as 'absolute' },
  },
  {
    src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D?auto=format&fit=crop&w=400&q=80',
    style: { width: '15rem', height: '12rem', top: '30rem', right: '-12.3rem', position: 'absolute' as 'absolute' },
  },
];
const rightImages = [
  {
    src: 'https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D?auto=format&fit=crop&w=400&q=80',
    style: { width: '22rem', height: '12rem', top: 0, left: '-15.5rem', position: 'absolute' as 'absolute' },
  },
  {
    src: 'https://images.unsplash.com/photo-1568849676085-51415703900f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D?auto=format&fit=crop&w=400&q=80',
    style: { width: '15rem', height: '16rem', top: '13rem', left: '-8.5rem', position: 'absolute' as 'absolute' },
  },
  {
    src: 'https://images.unsplash.com/photo-1487622750296-6360190669a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D?auto=format&fit=crop&w=400&q=80',
    style: { width: '22rem', height: '12rem', top: '30rem', left: '-15.5rem', position: 'absolute' as 'absolute' },
  },
];

const navLinks = [
  { label: 'Discovery', href: '#' },
  { label: 'Impact Calculator', href: '#' },
  { label: 'Blog', href: '#' },
];

const HeroSection: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbarLogo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" className="navbarLogoImg" />
        </div>
        <ul className="navbarLinks">
          {navLinks.map(link => (
            <li key={link.label}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
        <button className="navbarHostBtn">Become a host</button>
        <button className="navbarHamburger" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <span className="hamburgerIcon" />
        </button>
      </nav>
      {/* Side Drawer for mobile/tablet */}
      {drawerOpen && (
        <div className="navbarDrawerOverlay" onClick={() => setDrawerOpen(false)}>
          <nav className="navbarDrawer" onClick={e => e.stopPropagation()}>
            <button className="navbarDrawerClose" onClick={() => setDrawerOpen(false)} aria-label="Close menu">&times;</button>
            <ul className="navbarDrawerLinks">
              {navLinks.map(link => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
            <button className="navbarHostBtn navbarDrawerHostBtn">Become a host</button>
          </nav>
        </div>
      )}
      <div className="heroWrapper">
        <div className="imageColumn leftColumn">
          {leftImages.map((img, idx) => (
            <img key={idx} src={img.src} className="heroImage" style={img.style} alt="Scenic" />
          ))}
        </div>
        <div className="heroContent">
          <h1 className="heroHeading">
            Feel Good About <br /> Where You Stay
          </h1>
          <p className="heroParagraph">
            Every time you travel, you spark real change.<br /> 50% of our fees go directly to local community
            projects — no extra <br />cost, just extra impact.
          </p>
          <SearchForm />
        </div>
        <div className="imageColumn rightColumn">
          {rightImages.map((img, idx) => (
            <img key={idx} src={img.src} className="heroImage" style={img.style} alt="Scenic" />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;