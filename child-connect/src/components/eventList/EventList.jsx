/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllEvents } from '../../redux/actions';
import Event from '../event/Event';
import './EventList.css';

const EventList = () => {
  const currentEvents = useSelector(({ events }) => events);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, []);

  return (
    <div className="eventList-container">
      <h2 data-testid="eventList-h2">Lista de Eventos en tu barrio</h2>
      <section className="eventList">
        {currentEvents && (
          <>
            {
              currentEvents.map((event) => <Event eventId={event.id} data={event} data-testid="event-crated" />)
            }
          </>
        )}
      </section>
      {}
    </div>
  );
};

export default EventList;
