import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
// import Ticket from './components/Ticket'
import './App.css';
import axios from 'axios';
import Ticket from './components/Ticket';
// import Ticket from './components/Ticket';
const url = 'http://localhost:8080';

const App = () => {
const [tickets, setTickets] = useState([]);

const getTicket = async () => {
  // const toArray = [];
  try {
    const res = await axios.get(url + '/api/tickets');
    setTickets(res.data);
    console.log(res.data);
  }catch (e) {
    console.log(e);
  }
}

useEffect(() => {
  getTicket()
}, [])


  return (
  <div>
    <Ticket className='ticket' tickets={tickets}/>
    
  </div>
  )
}

export default App;

