

import React from 'react';

const TicketTable = ({ tickets, handleRowClick }) => {
  return (
    <div className="table-responsive">
      <table className="ticket-table">
        <thead>
          <tr>
            <th>TKN</th>
            <th>Name</th>
            <th>Email</th>
            <th>Destination</th>
            <th>Phone Number</th>
            <th>Assign</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => {
            let name = '[Not provided]';
            let email = '[Not provided]';


            const fromString = ticket.from || '[Not provided in the text]';
            if (fromString !== '[Not provided in the text]') {
              const emailMatch = fromString.match(/<(.+?)>/);
              email = emailMatch ? emailMatch[1] : '[Not provided]';

              const nameMatch = fromString.match(/"(.+?)"/);
              name = nameMatch ? nameMatch[1] : '[Not provided]';
            }

            return (
              <tr key={ticket._id} onClick={() => handleRowClick(ticket, index)}>
                <td>TKN{index + 1}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{ticket.destination || 'No Destination'}</td>
                <td>{ticket.phoneNumber || 'No Phone'}</td>
                <td>
                  <button className="assign-btn">
                    Assign
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;

