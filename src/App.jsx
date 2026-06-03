import React, { useState } from 'react';

const phone = '[PLACE PHONE NUMBER]';
const email = '[PLACE EMAIL ADDRESS]';
const whatsappNumber = '[PLACE NUMBER WITHOUT SYMBOLS]';
const location = '[PLACE CITY, STATE, USA]';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Brands', href: '#brands' },
  { label: 'Products', href: '#products' },
  { label: 'Contact Us', href: '#contact' }
];

const aboutCards = [
  'Multibrand Supplier',
  'Reliable Support',
  'Industrial & Automotive Applications'
];

const brands = ['SKF', 'FAG', 'TIMKEN', 'NSK', 'KOYO', 'NTN', 'A&S', 'FERSA'];

const products = [
  {
    title: 'Bearings',
    description: 'Reliable bearing options for demanding mechanical, industrial and commercial applications.'
  },
  {
    title: 'Automotive Bearings',
    description: 'Replacement and sourcing support for automotive bearing requirements across multiple brands.'
  },
  {
    title: 'Industrial Bearings',
    description: 'Solutions for machinery, equipment maintenance, production lines and industrial operations.'
  },
  {
    title: 'Seals and Related Components',
    description: 'Related components that help protect performance, reduce downtime and support proper operation.'
  },
  {
    title: 'Replacement Parts',
    description: 'Multibrand replacement part sourcing for maintenance teams, workshops and distributors.'
  },
  {
    title: 'Custom Sourcing',
    description: 'Personalized support to identify products according to application, availability and needs.'
  }
];

const benefits = [
  'Fast response',
  'Multibrand availability',
  'Personalized attention',
  'Reliable sourcing'
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="SR Bearings home">
          <img className="brand-logo" src="/assets/srb-legacy-logo.png" alt="" />
          <span>SR Bearings</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-panel ${isOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="btn btn-primary nav-cta" href="#contact" onClick={closeMenu}>
            Request a Quote
          </a>
        </div>
      </nav>
    </header>
  );
}

function BearingVisual() {
  return (
    <div className="bearing-visual" aria-hidden="true">
      <div className="bearing-ring ring-main">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bearing-ring ring-small"></div>
      <div className="visual-label">
        <strong>Industrial Supply</strong>
        <span>Bearings • Components • Parts</span>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function App() {
  const currentYear = new Date().getFullYear();
  const quoteMailto = `mailto:${email}?subject=Request%20a%20Quote`;

  return (
    <>
      <Header />

      <main>
        <section className="hero section-band" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">U.S.-registered industrial supplier</span>
              <h1>Reliable Bearing Solutions for Industrial and Automotive Needs</h1>
              <p>
                We supply high-quality bearings and industrial components from trusted global
                brands, serving businesses with fast, reliable and personalized support.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  Request a Quote
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container two-column">
            <SectionHeader title="About Us" eyebrow="Who we are">
              We are a U.S.-registered bearing and industrial components supplier focused on
              providing reliable products, personalized service and fast response times. Our
              company works with multiple internationally recognized brands to help customers find
              the right bearing solutions for automotive, industrial and mechanical applications.
            </SectionHeader>
            <div className="feature-grid">
              {aboutCards.map((item) => (
                <article className="feature-card" key={item}>
                  <span className="feature-icon">✓</span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-section" id="brands">
          <div className="container">
            <SectionHeader title="Brands We Work With" eyebrow="Trusted names">
              We work with recognized bearing brands to offer customers reliable options according
              to their needs, availability and application.
            </SectionHeader>
            <div className="brand-grid">
              {brands.map((brand) => (
                <div className="brand-chip" key={brand}>
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <SectionHeader title="Products & Solutions" eyebrow="What we supply" />
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.title}>
                  <span className="card-icon" aria-hidden="true"></span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section choose-section">
          <div className="container choose-grid">
            <SectionHeader title="Why Choose Us" eyebrow="Built for business" />
            <div className="benefit-list">
              {benefits.map((benefit) => (
                <div className="benefit-item" key={benefit}>
                  <span>✓</span>
                  <strong>{benefit}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <SectionHeader title="Contact Us" eyebrow="Request support">
                Need a quote or more information? Contact us and our team will help you find the
                right solution.
              </SectionHeader>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`tel:${phone}`}>
                  Call Us
                </a>
                <a className="btn btn-secondary" href={`mailto:${email}`}>
                  Email Us
                </a>
                <a className="btn btn-secondary" href={`https://wa.me/${whatsappNumber}`}>
                  WhatsApp
                </a>
                <a className="btn btn-outline" href={quoteMailto}>
                  Request a Quote
                </a>
              </div>
            </div>
            <div className="contact-card">
              <dl>
                <div>
                  <dt>Phone</dt>
                  <dd>{phone}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{email}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{location}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <img className="brand-logo" src="/assets/srb-legacy-logo.png" alt="" />
              <span>SR Bearings</span>
            </a>
            <p>Reliable bearing and industrial component solutions.</p>
          </div>
          <div>
            <h2>Quick Links</h2>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2>Main Brands</h2>
            <p>SKF • FAG • TIMKEN • NSK • KOYO • NTN</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} SR Bearings. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
