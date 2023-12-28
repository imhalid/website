'use client'
import React, { useEffect } from 'react';

const UserInfoComponent = () => {
  useEffect(() => {
    const deviceInformation = {
      deviceName: navigator.userAgent,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      language: navigator.language,
      timezoneOffset: new Date().getTimezoneOffset(),
      deviceMemory: navigator.deviceMemory,
    };

    console.log(deviceInformation);
  }, []);

return < div >
   </div >
};

export default UserInfoComponent;