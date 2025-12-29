import React from 'react';
import './TermsPrivacyPage.css';

const TermsPrivacyPage: React.FC = () => {
  return (
    <div className="terms-privacy-page">
      {/* Hero Banner */}
      <section className="terms-hero">
        <div className="terms-hero__decorations">
          <div className="terms-hero__decoration"></div>
        </div>
        <div className="container terms-hero__content">
          <h1 className="terms-hero__title">
            Terms & Privacy Policy
          </h1>
          <p className="terms-hero__subtitle">
            Transparency and trust are at the core of our business. Please read our terms and privacy policy carefully.
          </p>
        </div>
      </section>

      <div className="terms-content">
        <p className="terms-last-updated">Last Updated: December 28, 2025</p>

        {/* Privacy Policy Section */}
        <section className="terms-section" id="privacy-policy">
          <h2>Privacy Policy</h2>
          
          <p>
            At Navra (Exovate Exports), we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or engage with our services.
          </p>

          <h3>1. Information We Collect</h3>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and shipping address when you contact us or place an order.</li>
            <li><strong>Order Details:</strong> Specifications, designs, and requirements for your custom apparel orders.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, and pages visited (via cookies).</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>Your information is used strictly for the following purposes:</p>
          <ul>
            <li>To process and fulfill your custom manufacturing orders.</li>
            <li>To communicate with you regarding quotes, samples, production updates, and shipping.</li>
            <li>To improve our website functionality and customer service.</li>
            <li>To send you relevant updates or promotional offers (only if you have opted in).</li>
          </ul>

          <h3>3. Data Protection</h3>
          <p>
            We implement strict security measures to protect your personal data from unauthorized access, alteration, or disclosure. 
            Your designs and tech packs are treated as confidential intellectual property and are never shared with third parties without your explicit consent.
          </p>

          <h3>4. Third-Party Disclosure</h3>
          <p>
            We do not sell, trade, or transfer your personally identifiable information to outside parties. 
            This does not include trusted third parties who assist us in operating our website, conducting our business (e.g., shipping partners), or servicing you, so long as those parties agree to keep this information confidential.
          </p>
        </section>

        {/* Terms and Conditions Section */}
        <section className="terms-section" id="terms-conditions">
          <h2>Terms and Conditions</h2>
          
          <p>
            Welcome to Navra. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h3>1. Custom Manufacturing Services</h3>
          <p>
            Navra specializes in custom apparel manufacturing. All orders are subject to acceptance and availability. 
            We reserve the right to refuse service to anyone for any reason at any time.
          </p>

          <h3>2. Orders and Payments</h3>
          <ul>
            <li><strong>Quotes:</strong> Price quotes are valid for 30 days unless otherwise stated.</li>
            <li><strong>Payment Terms:</strong> A deposit is typically required to commence production, with the balance due prior to shipment. Specific terms will be outlined in your invoice.</li>
            <li><strong>Cancellations:</strong> Once production has started (fabric cutting or sourcing), orders cannot be cancelled without incurring costs for work already completed.</li>
          </ul>

          <h3>3. Intellectual Property</h3>
          <p>
            You retain full ownership of your designs and brand assets. By submitting designs to us, you grant Navra a non-exclusive license solely for the purpose of manufacturing your products. 
            Navra retains ownership of any proprietary manufacturing processes or generic templates used.
          </p>

          <h3>4. Quality and Returns</h3>
          <p>
            We strive for excellence in every garment. If you receive defective items, you must notify us within 7 days of receipt. 
            Due to the custom nature of our products, returns are generally not accepted unless there is a manufacturing defect that deviates significantly from the approved sample.
          </p>

          <h3>5. Shipping and Delivery</h3>
          <p>
            Delivery timelines provided are estimates. Navra is not liable for delays caused by shipping carriers, customs clearance, or force majeure events. 
            Risk of loss passes to the buyer upon handover to the carrier.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India. 
            Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
          </p>
        </section>

        <div className="terms-contact-box">
          <h3>Questions?</h3>
          <p>If you have any questions about our Terms or Privacy Policy, please contact us:</p>
          <p><strong>Email:</strong> <a href="mailto:admin@thenavra.in">admin@thenavra.in</a></p>
          <p><strong>Phone:</strong> +91 7680943044</p>
          <p><strong>Address:</strong> Sai Nagar Colony, ECIL, Hyderabad, Telangana – 500062</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacyPage;

