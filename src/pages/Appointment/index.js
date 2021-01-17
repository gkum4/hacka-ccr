import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Daypicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiArrowLeft } from 'react-icons/fi';
import mLogoBlack from '../../assets/m-logo-black.svg';

import { sampleAvailableTimes } from '../../utils/sampleData';
import { useAppointment } from '../../hooks/appointment';
import { useToast } from '../../hooks/toast';
import { 
  Container, 
  Content, 
  Description, 
  VerticalLine, 
  Calendar, 
  Box, 
  AvailableTimes, 
  TimesScroll,
  TimeItem,
} from './styles';

const dayOfTheWeekDictionary = {
  0: 'Domingo',
  1: 'Segunda-Feira',
  2: 'Terça-Feira',
  3: 'Quarta-Feira',
  4: 'Quinta-Feira',
  5: 'Sexta-Feira',
  6: 'Sábado',
};

const monthDictionary = {
  0: 'Janeiro',
  1: 'Fevereiro',
  2: 'Março',
  3: 'Abril',
  4: 'Maio',
  5: 'Junho',
  6: 'Julho',
  7: 'Agosto',
  8: 'Setembro',
  9: 'Outubro',
  10: 'Novembro',
  11: 'Dezembro',
}

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [monthAvailability, setMonthAvailability] = useState([]);

  const [availableTimes, setAvailableTimes] = useState(sampleAvailableTimes);

  const [titleText, setTitleText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [selectedTime, setSelectedTime] = useState(-1);

  const { addAppointment } = useAppointment();
  const { addToast } = useToast();
  const history = useHistory();

  useEffect(() => {  
    setMonthAvailability([]);

    setAvailableTimes(sampleAvailableTimes)
  }, []);

  const hanldeDateChange = useCallback((day, modifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month) => {
    setCurrentMonth(month);
  }, []);

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

  const selectTime = useCallback((time) => {
    setSelectedTime(time);
  }, []);

  const schedule = useCallback(() => {
    if (descriptionText === '' || selectedTime === '' || titleText === '') {
      return;
    }

    addAppointment({
      link: 'https://meet.google.com/new',
      description: descriptionText,
      date: selectedDate.getDate() + '/' + selectedDate.getMonth()+1 + '/' + selectedDate.getFullYear() + ' - ' + selectedTime,
      title: titleText,
    });

    addToast({
      title: 'MENTORIA AGENDADA!', 
      type: 'success', 
      description: 'Agora que seu agendamento foi feito, você pode acompanhar sua próxima mentoria na sua tela inicial.'
    });

    history.push('/dashboard');
  }, [titleText, addAppointment, descriptionText, selectedTime, addToast, history, selectedDate]);

  return (
    <Container>
      <Content>
        <Description>
          <h2>AGENDAMENTO DE MENTORIA</h2>
          <p>
            Para melhor te atendermos, selecione a data e 
            hora e nos informe o assunto que você deseja conversar sobre.
          </p>

          <h3>ASSUNTO</h3>

          <input 
            value={titleText} 
            onChange={(e) => setTitleText(e.target.value)}
          />

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
              <h4>{dayOfTheWeekDictionary[selectedDate.getDay()] + ', ' + selectedDate.getDate() + ' ' + monthDictionary[selectedDate.getMonth()]}</h4>

              <TimesScroll>
                {availableTimes.map(item => (
                  <TimeItem onClick={() => selectTime(item)} selected={selectedTime === item}>{item}</TimeItem>
                ))}
              </TimesScroll>

              <button onClick={() => schedule()}>
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