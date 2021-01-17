import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { AppointmentProvider } from './appointment';

const AppProvider = ({ children }) => (  
  <AppointmentProvider>
    <AuthProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </AuthProvider>
  </AppointmentProvider>
);

export default AppProvider;
