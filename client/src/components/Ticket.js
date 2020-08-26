import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ticket.css';

const Ticket = ({ticket, getCounter , restoreApp, getTicket }) => {
    const [classTicket, setClassTicket] = useState('ticket');

    

    const hideClick = () => {
        setClassTicket('hiddenTicket');
        getCounter()
    }

    useEffect(() => {
        setClassTicket('ticket')
    }, [restoreApp]);


    const getDone = async (ticket) => {
        try {
            await axios.post(`/api/tickets/${ticket.id}/done`);
            getTicket();
        } catch (e) {
            console.log(e);
        } 
     } 

     const getUnDone = async (ticket) => {
        try {
            await axios.post(`/api/tickets/${ticket.id}/undone`);
            getTicket();
        } catch (e) {
            console.log(e);
        } 
     } 

     const getDate =  (time) => {
         let date =  new Date(time);
         date  = date.toString();
         return date;
     }

     const stlye = ticket.done ?
     {
         backgroundColor: 'red',
         color: 'white',
         font: 'inherint'
     } :
     {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherint'
     }

      return (
          <div>
            <div className={classTicket}>
                <button style={stlye} onClick={ticket.done ? () => getUnDone(ticket) : () => getDone(ticket)}>{ticket.done ? 'unDone' : 'Done'}</button>
                <h3>{ticket.title} </h3>
                <p>{ticket.content}</p>
                <div>{ticket.labels !== undefined && ticket.labels.map((label) => <div className="label">{label}</div>)} </div>
                <br/>
                <div> {getDate(ticket.creationTime)} </div> 
                <br/>
                <button className="hideTicketButton" onClick={hideClick} >hide</button>
            </div>
          </div>
      )
    }

export default Ticket;