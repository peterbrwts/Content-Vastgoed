// components/CookieBanner.tsx
'use client'
import { useEffect, useState } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    } else if (consent === 'accepted') {
      loadCookies();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    loadCookies();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const loadCookies = () => {
    // Load Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=YOUR_GTM_ID`; // Replace with your GTM ID
    document.body.appendChild(gtmScript);

    // Load Google Maps (if necessary)
    const mapsScript = document.createElement('script');
    mapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`; // Replace with your Google Maps API key
    document.body.appendChild(mapsScript);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <p className="text-sm">
        We gebruiken cookies om je ervaring te verbeteren. Door onze website te gebruiken, ga je akkoord met ons gebruik van cookies.
      </p>
      <div className="space-x-2">
        <button onClick={handleDecline} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded">
          Weigeren
        </button>
        <button onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded">
          Accepteren
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
