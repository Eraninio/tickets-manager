import React from 'react';
import './Ticket.css';

const Ticket = (props) => {
    
    function hideTicket (e) {
        e.currentTarget.parentElement.className='hidden-ticket';
        props.setCountHiddenTicket(props.countHiddenTicket+1);
    }

    return (
        <>
        {props.tickets.map((ticket) => {
      return (
        <div key = {ticket.id} className='ticket'>
            <button className='hideTicketButton' onClick={hideTicket}>Hide</button>
            <h3>{ticket.title}</h3>
            <div>{ticket.content}</div>  
            <div >{ticket.labels !== undefined && ticket.labels.map((label)=> <p className="label">{label}</p>)}</div>
            <div>{ticket.userEmail}</div>
        </div>
      )
    })}
        </>

    )
}


export default Ticket;