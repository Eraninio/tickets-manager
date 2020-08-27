import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Ticket from './components/Ticket';
import SearchText from './components/SearchText';
import Header from './components/Header';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [counter, setCounter] = useState(0);
  const [restoreApp, setRestoreApp] = useState(0);

  const getTicket = async () => {
    try {
      const res = await axios.get('/api/tickets');
      setTickets(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const sortTicketsByDate = () => {
    const sortedTickets = tickets.slice().sort((a, b) => b.creationTime - a.creationTime);
    setTickets(sortedTickets);
  };

  const getCounter = () => {
    setCounter(counter + 1);
  };

  const restore = () => {
    setRestoreApp(restoreApp + 1);
    setCounter(0);
  };

  useEffect(() => {
    getTicket();
  }, []);

  useEffect(() => {
    const data = async () => {
      const searchList = await axios.get(`/api/tickets?searchText=${searchText}`);
      setTickets(searchList.data);
    };
    data();
  }, [searchText]);

  return (
    <>
      <Header />
      <div className="header2">
        <div>Hidden TIckets:</div>
        <div id="hideTicketsCounter">{counter}</div>
        <button id="restoreHideTickets" onClick={restore}>restore</button>
        <button className="sort" onClick={sortTicketsByDate}>Sort By Date</button>
      </div>
      <div>
        <SearchText searchText={searchText} setSearchText={setSearchText} />
        {tickets.map((ticket, index) => <Ticket ticket={ticket} key={index} getCounter={getCounter} restoreApp={restoreApp} getTicket={getTicket} />)}
      </div>
    </>
  );
};

export default App;
