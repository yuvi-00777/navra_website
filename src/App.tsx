import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SolutionsPage from './pages/SolutionsPage';
import ServicesPage from './pages/ServicesPage';
import FabricsPage from './pages/FabricsPage';
import TechnologyPage from './pages/TechnologyPage';
import CutAndSewPage from './pages/CutAndSewPage';
import LogoCustomizePage from './pages/LogoCustomizePage';
import BlankWholesalePage from './pages/BlankWholesalePage';
import PrivateLabelPage from './pages/PrivateLabelPage';
import StartupsPage from './pages/StartupsPage';
import ClothingPrototypePage from './pages/ClothingPrototypePage';
import SampleDevelopmentPage from './pages/SampleDevelopmentPage';
import ApparelProductionPage from './pages/ApparelProductionPage';
import LabelsTagsPackagingPage from './pages/LabelsTagsPackagingPage';
import GlobalShippingPage from './pages/GlobalShippingPage';
// import ProductPhotographyPage from './pages/ProductPhotographyPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import OurEthicsPage from './pages/OurEthicsPage';
import CustomerReviewsPage from './pages/CustomerReviewsPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import TermsPrivacyPage from './pages/TermsPrivacyPage';
import CatalogPage from './pages/CatalogPage';

/**
 * Main App component with routing setup
 * Navigation and routes for Navra
 * 
 * Routes:
 * - / : Home page with hero, solutions, products showcase
 * - /products : Product catalog with categories
 * - /fabrics : Fabric information page
 * - /technology : Technology and manufacturing capabilities page
 * - /solutions : Business solutions list
 * - /solutions/cut-and-sew : Specific Cut & Sew OEM page
 * - /solutions/logo-customize : Specific Logo Customize page
 * - /solutions/blank-wholesale : Specific Blank Wholesale page
 * - /services : Services offered (Sample Development, Production, etc.)
 * - /about : About the company, contact info, reviews
 */
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/fabrics" element={<FabricsPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/cut-and-sew" element={<CutAndSewPage />} />
          <Route path="/solutions/logo-customize" element={<LogoCustomizePage />} />
          <Route path="/solutions/blank-wholesale" element={<BlankWholesalePage />} />
          <Route path="/solutions/private-label" element={<PrivateLabelPage />} />
          <Route path="/solutions/startups" element={<StartupsPage />} />
          <Route path="/services/clothing-prototype" element={<ClothingPrototypePage />} />
          <Route path="/services/sample-development" element={<SampleDevelopmentPage />} />
          <Route path="/services/apparel-production" element={<ApparelProductionPage />} />
          <Route path="/services/labels-tags-packaging" element={<LabelsTagsPackagingPage />} />
          <Route path="/services/global-shipping" element={<GlobalShippingPage />} />
          {/* <Route path="/services/product-photography" element={<ProductPhotographyPage />} /> */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms-privacy" element={<TermsPrivacyPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/our-ethics" element={<OurEthicsPage />} />
          <Route path="/customer-reviews" element={<CustomerReviewsPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
