import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Ticket from './components/Ticket';
import SearchText from './components/SearchText';

const App = () => {
const [tickets, setTickets] = useState([]);
const [searchText, setSearchText] = useState('');

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

useEffect(() => {
  const data = async () => {
    const searchList = await axios.get(`/api/tickets?searchText=${searchText}`);
    setTickets(searchList.data);
  };
  data();
}, [searchText]);



  return (
  <div>
    <SearchText searchText={searchText} setSearchText={setSearchText}/>
    <Ticket 
    tickets={tickets}
    />
  </div>
  )
}

export default App;

