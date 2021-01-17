import React, { useMemo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Daypicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiArrowLeft } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Container, Content, Description, Calendar, Box } from './styles';

const Appointment = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [monthAvailability, setMonthAvailability] = useState([]);

  const [appointments, setAppointments] = useState([]);

  const { signOut, user } = useAuth();

  const hanldeDateChange = useCallback((day, modifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month) => {
    setCurrentMonth(month);
  }, []);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', { locale: ptBR });
  }, [selectedDate]);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter(monthDay => monthDay.available === false)
      .map(monthDay => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  return (
    <Container>
      <Content>
        <Description>
          <h2>AGENDAMENTO DE MENTORIA</h2>
          <p>
            Para melhor te atendermos, selecione a data e 
            hora e nos informe o assunto que você deseja conversar sobre.
          </p>

          <h3>DESCRIÇÃO DO ASSUNTO</h3>
          <Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Risus lobortis in faucibus maecenas. Bibendum massa nibh dui hac 
            fermentum diam enim eget. Ut at aliquam, metus viverra eu mauris 
            habitant dolor. Integer neque massa enim sit nunc sagittis, 
            habitant convallis pulvinar. Velit diam scelerisque.
          </Box>
        </Description>
        
        <Calendar>
          <Daypicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onMonthChange={handleMonthChange}
            onDayClick={hanldeDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>

        <Link to="/dashboard">
          <FiArrowLeft />
        </Link>
      </Content>      
    </Container>
  );
}   

export default Appointment;