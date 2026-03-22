import React, { useState, useEffect } from 'react';

function PrivacyToast() {
  const [visible, setVisible] = useState(false);

  useEffect(function() {
    const dismissed = localStorage.getItem('privacy_dismissed');
    if (!dismissed) {
      setTimeout(function() {
        setVisible(true);
      }, 2000);
    }
  }, []);

  const handleAccept = function() {
    localStorage.setItem('privacy_dismissed', 'true');
    setVisible(false);
  };

  const handleDecline = function() {
    localStorage.setItem('privacy_dismissed', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'min(520px, 92vw)',
      background: 'rgba(15, 15, 26, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      padding: '20px 24px',
      zIndex: 8888,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      animation: 'toastSlideUp 0.4s cubic-bezier(0.4,0,0.2,1)',
    }}>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{
          width: '36px', height: '36px',
          borderRadius: '10px',
          background: 'rgba(108,99,255,0.2)',
          border: '1px solid rgba(108,99,255,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          fontSize: '18px',
        }}>
          🍪
        </div>
        <div>
          <p style={{
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '4px',
            fontFamily: 'var(--font-display)',
          }}>
            We use cookies
          </p>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '13px',
            lineHeight: 1.6,
            fontWeight: '300',
          }}>
            This site uses cookies to improve your experience. No personal data is sold or shared with third parties.
          </p>
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
      }}>
        <button
          onClick={handleDecline}
          style={{
            padding: '9px 20px',
            borderRadius: '100px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={function(e) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
          }}
          onMouseLeave={function(e) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
          }}
        >
          Decline
        </button>

        <button
          onClick={handleAccept}
          style={{
            padding: '9px 20px',
            borderRadius: '100px',
            background: 'linear-gradient(135deg, #6c63ff, #a855f7)',
            border: 'none',
            color: 'white',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(108,99,255,0.35)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={function(e) {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(108,99,255,0.5)';
          }}
          onMouseLeave={function(e) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(108,99,255,0.35)';
          }}
        >
          Accept All
        </button>
      </div>

      <style>{`
        @keyframes toastSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default PrivacyToast;
