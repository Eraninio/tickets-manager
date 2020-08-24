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
        <div key={ticket.id} style={style}>
          <h3>{ticket.title}</h3>
          <div>{ticket.content}</div>  
          <div>{JSON.stringify(ticket.labels)}</div>
          <div>{ticket.userEmail}</div>
        </div>
      )
    })}


        </>

    )
}


export default Ticket;