import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navraLogo from '../assets/navra_final_logo_crop.png';
import WhatsAppButton from './WhatsAppButton';
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
  collapsed?: boolean; // New property to track collapse state in mobile menu
}

/**
 * Layout component that wraps all pages
 * Contains the Header/Navigation and Footer
 * Navigation structure for Navra
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to manage collapsed sections in mobile menu
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([]);
  const location = useLocation();

  // If we are on the catalog page, render only children (no header/footer)
  if (location.pathname === '/catalog') {
    return <>{children}</>;
  }

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

  const toggleMobileDropdown = (itemName: string) => {
    setOpenMobileDropdowns(prev => 
      prev.includes(itemName) 
        ? [] 
        : [itemName]
    );
  };

  // Determine if we should show the dark header (scrolled style) by default
  // This is for pages that don't have a dark hero section at the top
  const isDetailPage = location.pathname.startsWith('/product') && location.pathname !== '/products';
  const shouldShowDarkHeader = isScrolled || isDetailPage || location.pathname === '/faq';

  // Navigation items with dropdowns for Navra
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about-us',
    },
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
                  } ${item.name === 'Contact Us' ? 'nav__link--btn' : ''}`}
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
                <div key={item.name} className="mobile-menu__item-wrapper">
                  <div className="mobile-menu__header">
                    <Link
                      to={item.path}
                      className="mobile-menu__link"
                      onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileDropdown(item.name);
                        }}
                        className="mobile-menu__toggle"
                      >
                        <svg 
                          className={`mobile-menu__arrow ${openMobileDropdowns.includes(item.name) ? 'mobile-menu__arrow--open' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  {/* Collapsible Dropdown for Mobile */}
                  {item.dropdown && (
                    <div 
                      className={`mobile-menu__dropdown ${openMobileDropdowns.includes(item.name) ? 'mobile-menu__dropdown--open' : ''}`}
                    >
                      {item.dropdown.map((dropItem) => (
                        <div key={dropItem.name}>
                          <Link
                            to={dropItem.path}
                            className="mobile-menu__sublink"
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
                  <span className="footer__company-name">NAVRA</span>
                  <span className="footer__company-tagline"> - Crafted for the world</span>
                </div>
                <p className="footer__company-desc">
                  Indian-based apparel exporter delivering high-quality, sustainable men’s and women’s wear with trusted service, global standards, and a commitment to craftsmanship.
                </p>
                <div className="footer__social">
                  <a href="https://www.facebook.com/share/17tpqwHDzs/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/navra.sourcing/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" aria-label="YouTube" className="footer__social-link">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/navra-sourcing" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__social-link">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
                    { name: 'FAQ', path: '/faq' },
                    { name: 'Catalog', path: '/catalog' },
                    { name: 'Terms & Privacy Policy', path: '/terms-privacy' },
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
                    <svg className="footer__contact-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="footer__contact-text">admin@thenavra.in</span>
                  </li>
                   <li className="footer__contact-item">
                    <svg className="footer__contact-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="footer__contact-text">+91 7680943044</span>
                  </li>
                  <li className="footer__contact-item">
                    <svg className="footer__contact-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
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

      {/* WhatsApp floating button */}
      <WhatsAppButton />

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
