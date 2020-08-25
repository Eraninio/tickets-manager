import React from 'react';

const Ticket = (props) => {
    
    const style={
        display:" inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border:"1px solid black"
    }

    return (
        <>
        {props.tickets.map((ticket) => {
      return (
        <div key = {ticket.id} style={style} className='ticket'>
          <h3>{ticket.title}</h3>
          <div>{ticket.content}</div>  
          <div >{ticket.labels && ticket.labels.map((label)=> <p className="label">{label}</p>)}</div>
          <div>{ticket.userEmail}</div>
        </div>
      )
    })}
        </>

    )
}


export default Ticket;