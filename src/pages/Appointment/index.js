import React, { useMemo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Daypicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiArrowLeft } from 'react-icons/fi';
import mLogoBlack from '../../assets/m-logo-black.svg';

import { useAuth } from '../../hooks/auth';

import { Container, Content, Description, VerticalLine, Calendar, Box, AvailableTimes, TimesScroll } from './styles';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [monthAvailability, setMonthAvailability] = useState([]);

  const [descriptionText, setDescriptionText] = useState('');
  const [selectedTime, setSelectedTime] = useState(-1);
  const [appointments, setAppointments] = useState([]);

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
          <Box 
            placeholder="Gostaria de falar sobre..." 
            value={descriptionText} 
            onChange={(e) => setDescriptionText(e.target.value)}
          />
        </Description>

        <VerticalLine/>
        
        <Calendar>
          <h2>Escolha uma Data e Hora</h2>

          <div>
            <Daypicker
              weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
              fromMonth={new Date()}
              disabledDays={[{ before: new Date(), daysOfWeek: [0] }, ...disabledDays]}
              modifiers={{
                available: { daysOfWeek: [1, 2, 3, 4, 5, 6] },
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

            <AvailableTimes selectedTime={selectedTime}>
              <h4>{'dia'}</h4>

              <TimesScroll>
                <div>{'14:30'}</div>
                <div>{'14:30'}</div>
                <div>{'14:30'}</div>
              </TimesScroll>

              <button>
                <p>Agendar</p>
              </button>
            </AvailableTimes>
          </div>

        </Calendar>

        <Link to="/dashboard">
          <FiArrowLeft color="FF4A08" size={22}/>
        </Link>
      </Content>    

      <Link to="/dashboard">
        <img alt="logo" src={mLogoBlack}/>
      </Link>
    </Container>
  );
}   

export default Appointment;