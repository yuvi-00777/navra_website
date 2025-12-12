import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navraLogoWhite from '../assets/navra_logo_white.png';
import navraLogoDark from '../assets/navra_logo_dark.png';
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setIsSearchOpen(false);
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
        { name: 'Product Photography', path: '/services/product-photography' },
      ],
    },
    {
      name: 'About Us',
      path: '/about-us',
      dropdown: [
        { name: 'Contact Us', path: '/contact-us' },
        { name: 'About', path: '/about-us' },
        { name: 'Our Ethics', path: '/our-ethics' },
        { name: 'Customer Reviews', path: '/customer-reviews' },
      ],
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
              src={shouldShowDarkHeader ? navraLogoDark : navraLogoWhite} 
              alt="Navra" 
              style={{ height: '48px', width: 'auto' }} 
            />
            </Link>

            {/* Desktop Navigation */}
          <nav className="nav">
              {navItems.map((item) => (
                <div
                  key={item.name}
                className="nav__item"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
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
                        onMouseEnter={() => dropItem.items && setActiveSubDropdown(dropItem.name)}
                        onMouseLeave={() => setActiveSubDropdown(null)}
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
            {/* Search Button */}
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 transition-colors ${shouldShowDarkHeader ? 'text-gray-800 hover:text-[#c8a96a]' : 'text-white hover:text-[#c8a96a]'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl p-2 animate-fade-in border border-gray-100">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#c8a96a]"
                    autoFocus
                  />
                </div>
              )}
            </div>

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
                            className="block px-8 py-2 text-sm text-gray-500 hover:text-[#c8a96a]"
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
        {/* Newsletter Section */}
        <div className="newsletter">
          <div className="newsletter__container">
            <div className="newsletter__content">
              <h3>Get A Catalogue</h3>
              <p>Before you go, grab your Product Catalogue and Price List! We'll email it straight to you in 24h.</p>
              </div>
            <div className="newsletter__form">
              <input type="email" placeholder="Email *" className="newsletter__input" />
              <button className="newsletter__btn">Download</button>
            </div>
          </div>
        </div>

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
                  Navra was founded in 2003. From humble beginnings as a small clothing manufacturer, we've grown to be one of China's leading companies for women, men and children apparel manufacturing.
                </p>
                <div className="footer__social">
                  {['in', 'ig', 'fb', 'yt'].map((social) => (
                    <a key={social} href="#" className="footer__social-link">
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="footer__section-title">SERVICES</h4>
                <ul className="footer__links">
                  {[
                    'Clothing Prototype',
                    'Sample Development',
                    'Custom Apparel Production',
                    'Customized Labels & Tags & Packaging',
                    'Global Shipping',
                    'Product Photography',
                  ].map((service) => (
                    <li key={service}>
                      <Link to="/services" className="footer__link">{service}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About */}
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

              {/* Contact */}
              <div>
                <h4 className="footer__section-title">CONTACT</h4>
                <ul className="footer__contact-list">
                  <li className="footer__contact-item">
                    <svg className="footer__contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="footer__contact-text">+86 188 2580 3155</span>
                  </li>
                  <li className="footer__contact-item">
                    <svg className="footer__contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="footer__contact-text">info@navra.com</span>
                  </li>
                  <li className="footer__contact-item">
                    <svg className="footer__contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="footer__contact-text">
                      3/F-B, No. 9, Botou Industry Road, Humen Town, Dongguan, Guangdong, CN
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

      {/* WhatsApp Floating Button */}
      <a href="#" className="whatsapp-btn">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

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
