import React, { useState, useEffect } from 'react';

const PrivacyToast = () => {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('privacy_dismissed')) setDismissed(true);
  }, []);

  return null;
};

export default PrivacyToast;