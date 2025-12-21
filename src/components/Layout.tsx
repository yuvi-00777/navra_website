import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navraLogo from '../assets/navra_final_logo_crop.png';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

interface DropdownItem {
  name: string;
  path: string;
  items?: string[]; // For nested items like Streetwear -> T-Shirts
}

interface NavItem {
  name: string;
  path: string;
  dropdown?: DropdownItem[];
}

/**
 * Layout component that wraps all pages
 * Contains the Header/Navigation and Footer
 * Replicates the navigation structure from hongyuapparel.com
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine if we should show the dark header (scrolled style) by default
  // This is for pages that don't have a dark hero section at the top
  const isDetailPage = location.pathname.startsWith('/product') && location.pathname !== '/products';
  const shouldShowDarkHeader = isScrolled || isDetailPage;

  // Navigation items with dropdowns matching hongyuapparel.com
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'Products',
      path: '/products',
    },
    { name: 'Fabrics', path: '/fabrics' },
    { name: 'Technology', path: '/technology' },
    {
      name: 'Solutions',
      path: '/solutions/cut-and-sew',
      dropdown: [
        { name: 'Cut & Sew Customize', path: '/solutions/cut-and-sew' },
        { name: 'Logo Customize', path: '/solutions/logo-customize' },
        { name: 'Blank Wholesale', path: '/solutions/blank-wholesale' },
        { name: 'Private Label Clothing', path: '/solutions/private-label' },
        { name: 'For Startups', path: '/solutions/startups' },
      ],
    },
    {
      name: 'Service',
      path: '/services',
      dropdown: [
        { name: 'Clothing Prototype', path: '/services/clothing-prototype' },
        { name: 'Sample Development', path: '/services/sample-development' },
        { name: 'Custom Apparel Production', path: '/services/apparel-production' },
        { name: 'Labels / Tags / Packaging', path: '/services/labels-tags-packaging' },
        { name: 'Global Shipping', path: '/services/global-shipping' },
        // { name: 'Product Photography', path: '/services/product-photography' },
      ],
    },
    {
      name: 'About Us',
      path: '/about-us',
    },
    {
      name: 'Contact Us',
      path: '/contact-us',
    },
  ];

  return (
    <div className="layout">
      {/* Header */}
      <header
        className={`header ${shouldShowDarkHeader ? 'header--scrolled' : 'header--transparent'}`}
      >
        <div className="header__container">
            {/* Logo */}
          <Link to="/" className="logo">
            <img 
              src={navraLogo} 
              alt="Navra" 
              style={{ 
                height: '48px', 
                width: 'auto',
                filter: shouldShowDarkHeader ? 'none' : 'brightness(0) invert(1)' 
              }} 
            />
            </Link>

            {/* Desktop Navigation */}
          <nav className="nav">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="nav__item"
                >
                  <Link
                    to={item.path}
                  className={`nav__link ${shouldShowDarkHeader ? 'nav__link--dark' : 'nav__link--light'} ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  >
                    {item.name}
                    {item.dropdown && (
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="nav__dropdown">
                      {item.dropdown.map((dropItem, idx) => (
                      <div
                        key={idx}
                        className="relative group/sub"
                      >
                        <Link
                          to={dropItem.path}
                          className="nav__dropdown-link flex justify-between items-center"
                        >
                          {dropItem.name}
                          {dropItem.items && (
                            <svg className="w-4 h-4 transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </Link>
                        
                        {/* Sub Dropdown */}
                        {dropItem.items && (
                          <div className="nav__sub-dropdown">
                            {dropItem.items.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                to={dropItem.path}
                                className="nav__dropdown-link"
                              >
                                {subItem}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

          {/* Actions: Search & CTA */}
          <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`mobile-menu-btn ${shouldShowDarkHeader ? 'mobile-menu-btn--dark' : 'mobile-menu-btn--light'}`}
              >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-menu__nav">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="mobile-menu__link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {/* Simple flattened mobile menu for dropdowns */}
                  {item.dropdown && (
                    <div className="pl-4 bg-gray-50/50">
                      {item.dropdown.map((dropItem) => (
                        <div key={dropItem.name}>
                          <Link
                            to={dropItem.path}
                            className="block px-8 py-2 text-sm text-gray-500 hover:text-[#001F3F]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        {/* Newsletter Section Removed as per user request */}

        {/* Main Footer Content */}
        <div className="footer__main">
          <div className="footer__container">
            <div className="footer__grid">
              {/* Company Info */}
              <div className="footer__company">
                <div className="footer__company-logo">
                  <div className="footer__company-icon">
                    <span>H</span>
                  </div>
                  <span className="footer__company-name">NAVRA</span>
                </div>
                <p className="footer__company-desc">
                  Inidan-based apparel exporter delivering high-quality, sustainable men’s and women’s wear with trusted service, global standards, and a commitment to craftsmanship.
                </p>
                <div className="footer__social">
                  <a href="#" aria-label="Facebook" className="footer__social-link">
                    <svg fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                      <path d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/navra.sourcing/" aria-label="Instagram" className="footer__social-link">
                    <svg fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                      <path d="M21.138 0.242c3.767 0.007 3.914 0.038 4.65 0.144 1.52 0.219 2.795 0.825 3.837 1.821 0.584 0.562 0.987 1.112 1.349 1.848 0.442 0.899 0.659 1.75 0.758 3.016 0.021 0.271 0.031 4.592 0.031 8.916s-0.009 8.652-0.030 8.924c-0.098 1.245-0.315 2.104-0.743 2.986-0.851 1.755-2.415 3.035-4.303 3.522-0.685 0.177-1.304 0.26-2.371 0.31-0.381 0.019-4.361 0.024-8.342 0.024s-7.959-0.012-8.349-0.029c-0.921-0.044-1.639-0.136-2.288-0.303-1.876-0.485-3.469-1.784-4.303-3.515-0.436-0.904-0.642-1.731-0.751-3.045-0.031-0.373-0.039-2.296-0.039-8.87 0-2.215-0.002-3.866 0-5.121 0.006-3.764 0.037-3.915 0.144-4.652 0.219-1.518 0.825-2.795 1.825-3.833 0.549-0.569 1.105-0.975 1.811-1.326 0.915-0.456 1.756-0.668 3.106-0.781 0.374-0.031 2.298-0.038 8.878-0.038h5.13zM15.999 4.364v0c-3.159 0-3.555 0.014-4.796 0.070-1.239 0.057-2.084 0.253-2.824 0.541-0.765 0.297-1.415 0.695-2.061 1.342s-1.045 1.296-1.343 2.061c-0.288 0.74-0.485 1.586-0.541 2.824-0.056 1.241-0.070 1.638-0.070 4.798s0.014 3.556 0.070 4.797c0.057 1.239 0.253 2.084 0.541 2.824 0.297 0.765 0.695 1.415 1.342 2.061s1.296 1.046 2.061 1.343c0.74 0.288 1.586 0.484 2.825 0.541 1.241 0.056 1.638 0.070 4.798 0.070s3.556-0.014 4.797-0.070c1.239-0.057 2.085-0.253 2.826-0.541 0.765-0.297 1.413-0.696 2.060-1.343s1.045-1.296 1.343-2.061c0.286-0.74 0.482-1.586 0.541-2.824 0.056-1.241 0.070-1.637 0.070-4.797s-0.015-3.557-0.070-4.798c-0.058-1.239-0.255-2.084-0.541-2.824-0.298-0.765-0.696-1.415-1.343-2.061s-1.295-1.045-2.061-1.342c-0.742-0.288-1.588-0.484-2.827-0.541-1.241-0.056-1.636-0.070-4.796-0.070zM14.957 6.461c0.31-0 0.655 0 1.044 0 3.107 0 3.475 0.011 4.702 0.067 1.135 0.052 1.75 0.241 2.16 0.401 0.543 0.211 0.93 0.463 1.337 0.87s0.659 0.795 0.871 1.338c0.159 0.41 0.349 1.025 0.401 2.16 0.056 1.227 0.068 1.595 0.068 4.701s-0.012 3.474-0.068 4.701c-0.052 1.135-0.241 1.75-0.401 2.16-0.211 0.543-0.463 0.93-0.871 1.337s-0.794 0.659-1.337 0.87c-0.41 0.16-1.026 0.349-2.16 0.401-1.227 0.056-1.595 0.068-4.702 0.068s-3.475-0.012-4.702-0.068c-1.135-0.052-1.75-0.242-2.161-0.401-0.543-0.211-0.931-0.463-1.338-0.87s-0.659-0.794-0.871-1.337c-0.159-0.41-0.349-1.025-0.401-2.16-0.056-1.227-0.067-1.595-0.067-4.703s0.011-3.474 0.067-4.701c0.052-1.135 0.241-1.75 0.401-2.16 0.211-0.543 0.463-0.931 0.871-1.338s0.795-0.659 1.338-0.871c0.41-0.16 1.026-0.349 2.161-0.401 1.073-0.048 1.489-0.063 3.658-0.065v0.003zM16.001 10.024c-3.3 0-5.976 2.676-5.976 5.976s2.676 5.975 5.976 5.975c3.3 0 5.975-2.674 5.975-5.975s-2.675-5.976-5.975-5.976zM16.001 12.121c2.142 0 3.879 1.736 3.879 3.879s-1.737 3.879-3.879 3.879c-2.142 0-3.879-1.737-3.879-3.879s1.736-3.879 3.879-3.879zM22.212 8.393c-0.771 0-1.396 0.625-1.396 1.396s0.625 1.396 1.396 1.396 1.396-0.625 1.396-1.396c0-0.771-0.625-1.396-1.396-1.396v0.001z"></path>
                    </svg>
                  </a>
                  <a href="#" aria-label="YouTube" className="footer__social-link">
                    <svg fill="currentColor" viewBox="0 0 28 28" className="w-4 h-4">
                      <path d="M11.109 17.625l7.562-3.906-7.562-3.953v7.859zM14 4.156c5.891 0 9.797 0.281 9.797 0.281 0.547 0.063 1.75 0.063 2.812 1.188 0 0 0.859 0.844 1.109 2.781 0.297 2.266 0.281 4.531 0.281 4.531v2.125s0.016 2.266-0.281 4.531c-0.25 1.922-1.109 2.781-1.109 2.781-1.062 1.109-2.266 1.109-2.812 1.172 0 0-3.906 0.297-9.797 0.297v0c-7.281-0.063-9.516-0.281-9.516-0.281-0.625-0.109-2.031-0.078-3.094-1.188 0 0-0.859-0.859-1.109-2.781-0.297-2.266-0.281-4.531-0.281-4.531v-2.125s-0.016-2.266 0.281-4.531c0.25-1.937 1.109-2.781 1.109-2.781 1.062-1.125 2.266-1.125 2.812-1.188 0 0 3.906-0.281 9.797-0.281v0z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="footer__section-title">QUICK LINKS</h4>
                <ul className="footer__links">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'Products', path: '/products' },
                    { name: 'About', path: '/about-us' },
                    { name: 'Contact', path: '/contact-us' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="footer__link">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About */}
              {/* Removed as per request to simplify structure based on provided HTML
              <div>
                <h4 className="footer__section-title">ABOUT</h4>
                <ul className="footer__links">
                  {[
                    'Blog',
                    'FAQ',
                    'Customer Reviews',
                    'Terms of Use',
                    'Privacy Policy',
                    'Sitemap',
                  ].map((item) => (
                    <li key={item}>
                      <Link to="/about" className="footer__link">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              */}

              {/* Contact Info */}
              <div>
                <h4 className="footer__section-title">CONTACT INFO</h4>
                <ul className="footer__contact-list">
                  <li className="footer__contact-item">
                    <svg className="footer__contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="footer__contact-text">+91 9346237014</span>
                  </li>
                  <li className="footer__contact-item">
                    <svg className="footer__contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="footer__contact-text">admin@exovateexports.com</span>
                  </li>
                  <li className="footer__contact-item">
                    <svg className="footer__contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="footer__contact-text">
                      H. No. 1-10-1-255/173<br />
                      Sai Nagar Colony, ECIL<br />
                      Hyderabad, Telangana – 500062
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <div className="container">
            <p className="footer__copyright-text">
              @2025 Navra. All rights reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`back-to-top ${isScrolled ? 'back-to-top--visible' : 'back-to-top--hidden'}`}
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Layout;
