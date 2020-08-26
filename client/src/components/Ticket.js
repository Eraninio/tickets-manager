import React, { useState, useEffect } from 'react';
import './Ticket.css';

const Ticket = ({ticket, getCounter , restoreApp}) => {
    const [classTicket, setClassTicket] = useState('ticket');
    

    const hideClick = () => {
        setClassTicket('hiddenTicket');
        getCounter()
    }

    useEffect(() => {
        setClassTicket('ticket')
    }, [restoreApp]);


      return (
          <div>
            <div className={classTicket}>
                <h4>{ticket.title} </h4>
                <p>{ticket.content}</p>
                <p>{ticket.labels !== undefined && ticket.labels.map((label) => <span className="label">{label}</span>)} </p>
                <button className="hideTicketButton" onClick={hideClick} >hide</button>
            </div>
          </div>
      )
    }

export default Ticket;