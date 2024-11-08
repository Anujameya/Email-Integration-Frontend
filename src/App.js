

import React, { useEffect, useState } from 'react';
import logo from './assets/ameya.png';
import axios from 'axios';
import TicketTable from './components/TicketTable';
import Modal from './components/Modal'
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // const response = await axios.get('https://email-integration-backend-1.onrender.com/api/tickets');
        const response = await axios.get('http://localhost:5000/api/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const handleRowClick = (ticket, index) => {
    setSelectedTicket({ ...ticket, index });
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      <header className="header">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <h1>Tickets</h1>
      </header>

      <TicketTable tickets={tickets} handleRowClick={handleRowClick} />
      {selectedTicket && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          ticket={selectedTicket}
        />
      )}

      <footer className="footer">
        <p>
          Copyright © 2024 CRM | Designed by
          <a href="https://iameya.in/" target="_blank" rel="noopener noreferrer"> Ameya Innovex</a> |
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
