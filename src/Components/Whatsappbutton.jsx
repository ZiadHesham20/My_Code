import React, { useState } from 'react';
import Whatsapp from './whatsapp.png';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <a
        href="https://wa.me/01123437255?text=مرحبًا، أريد مساعدة!"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          backgroundColor: '#25D366',
          color: '#fff',
          padding: '12px',
          borderRadius: '50%',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          zIndex: 1000,
        }}
        onMouseOver={() => setShowTooltip(true)}
        onMouseOut={() => setShowTooltip(false)}
        aria-label="Contact via WhatsApp"
      >
        <img
          src={Whatsapp}
          alt="WhatsApp"
          style={{
            width: '24px',
            height: '24px',
          }}
        />
      </a>
      {showTooltip && (
        <div
          style={{
            position: 'fixed',
            bottom: '60px',
            right: '16px',
            backgroundColor: '#f0f0f0', 
            color: '#000',
            padding: '10px 16px', 
            borderRadius: '6px', 
            fontSize: '16px', 
            fontWeight: 'bold', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // ظل أكبر
            zIndex: 1001,
          }}
        >
          Contact Us
        </div>
      )}
    </>
  );
}

