import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

const AppointmentContext = createContext({});

const AppointmentProvider = ({ children }) => {
  const [appointment, setAppointment] = useState([]);

  const addAppointment = useCallback(
    ({ title, link, data }) => {
      const id = uuid();   

      const obj = {
        id,        
        title,
        link,
        data,
      };

      setAppointment(state => [...state, obj]);
    },
    [],
  );

  const removeAppointment = useCallback((id) => {
    setAppointment(state => state.filter(item => item.id !== id));
  }, []);

  return (
    <AppointmentContext.Provider
      value={{ appointment, addAppointment, removeAppointment }}
    >
      {children}
    </AppointmentContext.Provider>
  );

};

function useAppointment() {
  const context = useContext(AppointmentContext);

  if (!context) {
    throw new Error('useAppointment must be used within a AppointmentProvider');
  }

  return context;
}

export { AppointmentProvider, useAppointment};
