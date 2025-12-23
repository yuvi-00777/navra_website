import React from 'react';

const GoogleForm: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[500px] bg-white rounded-lg overflow-hidden">
      {/* 
        INSTRUCTIONS:
        1. Go to your Google Form.
        2. Click "Send" button.
        3. Click the "< >" (Embed HTML) tab.
        4. Copy the 'src' URL from the iframe code provided by Google.
        5. Paste it below in the 'src' attribute.
      */}
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfD_placeholder/viewform?embedded=true" 
        width="100%" 
        height="100%" 
        style={{ border: 0, minHeight: '500px' }} 
        allowFullScreen
        title="Contact Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;

