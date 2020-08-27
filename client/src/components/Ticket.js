import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ticket.css';

const Ticket = ({
  ticket, getCounter, restoreApp, getTicket,
}) => {
  const [classTicket, setClassTicket] = useState('ticket');

  const hideClick = () => {
    setClassTicket('hiddenTicket');
    getCounter();
  };

  useEffect(() => {
    setClassTicket('ticket');
  }, [restoreApp]);

  const getDone = async (tick) => {
    try {
      await axios.post(`/api/tickets/${tick.id}/done`);
      getTicket();
    } catch (e) {
      console.log(e);
    }
  };

  const getUnDone = async (tick) => {
    try {
      await axios.post(`/api/tickets/${tick.id}/undone`);
      getTicket();
    } catch (e) {
      console.log(e);
    }
  };

  const getDate = (time) => {
    let date = new Date(time);
    date = date.toString();
    return date;
  };

  const stlye = ticket.done
    ? {
      backgroundColor: 'red',
      color: 'white',
      font: 'inherint',
    }
    : {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherint',
    };

  return (
    <div className={classTicket}>
      <div className="ticketi">
        <div className="date">
          {' '}
          {getDate(ticket.creationTime)}
          {' '}
        </div>
        <div className="email">{ticket.userEmail}</div>
        <button className="hideTicketButton" onClick={hideClick}>Hide</button>
        <h3 className="title">
          {ticket.title}
          {' '}
        </h3>
        <div className="labels">
          {ticket.labels !== undefined && ticket.labels.map((label) => <div className="label">{label}</div>)}
          {' '}
        </div>
        <button className="done" style={stlye} onClick={ticket.done ? () => getUnDone(ticket) : () => getDone(ticket)}>{ticket.done ? 'unDone' : 'Done'}</button>
        <p className="content">{ticket.content}</p>
      </div>
    </div>
  );
};

export default Ticket;
