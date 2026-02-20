import React from 'react';

/** WhatsApp business number: country code + number, no + or spaces */
const WHATSAPP_NUMBER = '917680943044';

const DEFAULT_MESSAGE = 'Hi Navra, I\'d like to know more about your clothing manufacturing services.';

const WhatsAppButton: React.FC = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28" aria-hidden="true">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.736 5.49 2.023 7.784L.667 30.667l7.073-1.855A15.905 15.905 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.614 0-5.062-.764-7.098-2.076l-.509-.302-2.646.694.706-2.58-.333-.527A13.27 13.27 0 012.667 16c0-7.364 5.969-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.285-10.384c-.391-.196-2.314-1.141-2.67-1.27-.356-.13-.614-.196-.872.196-.26.391-1.004 1.27-1.231 1.532-.227.261-.454.294-.845.098-.391-.196-1.649-.608-3.139-1.939-1.161-1.035-1.946-2.313-2.172-2.704-.227-.391-.024-.603.171-.796.176-.176.391-.456.587-.685.196-.227.261-.391.391-.652.13-.261.065-.489-.033-.685-.098-.196-.872-2.098-1.194-2.875-.314-.755-.633-.652-.872-.652l-.74-.015c-.261 0-.685.098-1.043.489-.359.391-1.37 1.337-1.37 3.261 0 1.924 1.402 3.779 1.597 4.04.196.261 2.756 4.209 6.685 5.776.932.376 1.66.601 2.228.77.935.278 1.787.239 2.458.145.75-.109 2.314-.946 2.639-1.859.326-.914.326-1.698.228-1.859-.098-.163-.359-.261-.75-.457z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
