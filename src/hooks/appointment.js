import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import { sampleUserData } from '../utils/sampleData';

const AppointmentContext = createContext({});

const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState(sampleUserData.mentorships);

  const addAppointment = useCallback(
    ({ link, date, description, title }) => {
      const id = uuid();   

      const obj = {
        id,        
        name: title,
        description,
        link,
        date,
      };

      setAppointments(state => [obj, ...state]);
    },
    [],
  );

  const removeAppointment = useCallback((id) => {
    setAppointments(state => state.filter(item => item.id !== id));
  }, []);

  return (
    <AppointmentContext.Provider
      value={{ appointments, addAppointment, removeAppointment }}
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
