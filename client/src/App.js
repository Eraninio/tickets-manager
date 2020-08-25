import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Ticket from './components/Ticket';

const App = () => {
const [tickets, setTickets] = useState([]);

const getTicket = async () => {
  try {
    const res = await axios.get('/api/tickets');
    setTickets(res.data);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}

useEffect(() => {
  getTicket()
}, [])


  return (
  <div>
    <input></input>
    <Ticket tickets={tickets}/>
  </div>
  )
}

export default App;

