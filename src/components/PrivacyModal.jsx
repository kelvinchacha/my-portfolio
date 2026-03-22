import React from 'react';
import { HiMiniXMark } from 'react-icons/hi2';

function PrivacyModal(props) {
  const onClose = props.onClose;

  if (!props.open) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.7)',
          zIndex: 20000,
          backdropFilter: 'blur(6px)',
        }}
      />
      <div style={{
        position: 'fixed',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(640px, 92vw)',
        maxHeight: '80vh',
        background: '#0f0f1a',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.8)',
        zIndex: 20001,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Header */}
        <div style={{
          padding: '18px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
          background: 'rgba(255,255,255,0.03)',
        }}>
          <div>
            <h2 style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: '700',
              fontFamily: 'var(--font-display)',
              marginBottom: '2px',
            }}>
              Privacy Policy
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
              Last updated: March 2026
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,59,48,0.3)',
              border: 'none', borderRadius: '8px',
              color: 'white', cursor: 'pointer',
              width: '32px', height: '32px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onMouseEnter={function(e) { e.currentTarget.style.background = 'rgba(255,59,48,0.8)'; }}
            onMouseLeave={function(e) { e.currentTarget.style.background = 'rgba(255,59,48,0.3)'; }}
          >
            <HiMiniXMark size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{
          overflowY: 'auto',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255,255,255,0.1) transparent',
        }}>

          <Section title="1. Overview">
            This Privacy Policy explains how Dev. Chacha (Kelvin Chacha), operating under aXeraf Technologies, handles information collected through this portfolio website located at kelvinchacha.github.io/my-portfolio. By using this site, you agree to the practices described below.
          </Section>

          <Section title="2. Information We Collect">
            When you use the contact form, we collect your name, email address, subject, and message via EmailJS. When you use the WhatsApp contact option, we collect your name, region, and message  this information is sent directly to WhatsApp and is not stored on our servers. When you interact with the AI Assistant, your messages are processed by Groq's API to generate responses. We do not store chat histories. We also use browser localStorage to remember your cookie consent preference.
          </Section>

          <Section title="3. How We Use Your Information">
            Information submitted through the contact form is used solely to respond to your inquiry. We do not use your data for marketing, advertising, or any third-party purposes. WhatsApp messages are handled entirely through WhatsApp's own platform and privacy policy. AI Assistant conversations are processed in real time and are not stored or used for training.
          </Section>

          <Section title="4. Third-Party Services">
            This site uses the following third-party services: EmailJS for email delivery, Groq API for AI Assistant responses, Vercel for serverless API functions, and GitHub Pages for website hosting. Each of these services operates under their own privacy policies. We do not sell or share your data with advertisers or data brokers.
          </Section>

          <Section title="5. Cookies & Local Storage">
            This site uses browser localStorage not tracking cookies to remember your privacy consent. No analytics cookies, advertising cookies, or third-party tracking scripts are used on this site.
          </Section>

          <Section title="6. Data Security">
            We take reasonable measures to protect your information. Contact form submissions are transmitted securely via EmailJS. API calls to Groq are made through a secure Vercel serverless function your API keys are never exposed to the browser.
          </Section>

          <Section title="7. Your Rights">
            You have the right to request deletion of any personal data you have submitted via the contact form. To do so, contact us directly at chacha@axeraf.co.tz. Since we do not maintain a database of visitor information, most data is not retained beyond the initial email delivery.
          </Section>

          <Section title="8. Children's Privacy">
            This site is not directed at children under the age of 13. We do not knowingly collect personal information from children.
          </Section>

          <Section title="9. Changes to This Policy">
            We may update this Privacy Policy from time to time. Changes will be reflected by updating the date at the top of this page.
          </Section>

          <Section title="10. Contact">
            If you have any questions about this Privacy Policy, contact us at chacha@axeraf.co.tz or via WhatsApp at +255 750 792 039.
          </Section>

        </div>
      </div>
    </>
  );
}

function Section(props) {
  const title = props.title;
  const children = props.children;
  return (
    <div>
      <h3 style={{
        color: 'white',
        fontSize: '15px',
        fontWeight: '700',
        fontFamily: 'var(--font-display)',
        marginBottom: '8px',
      }}>
        {title}
      </h3>
      <p style={{
        color: 'rgba(255,255,255,0.55)',
        fontSize: '14px',
        lineHeight: 1.8,
        fontWeight: '300',
      }}>
        {children}
      </p>
    </div>
  );
}

export default PrivacyModal;