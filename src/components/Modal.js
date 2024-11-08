/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import './DetailedModal.css'
import cross from '../assets/cross-image.png'

const Modal = ({ isOpen, onClose, ticket }) => {
  if (!isOpen) return null;

  // Check if fromString contains both name and email
  let name = '[Not provided]';
  let email = '[Not provided]';

  const fromString = ticket.from || '[Not provided in the text]'
  if (fromString !== '[Not provided in the text]') {
    const emailMatch = fromString.match(/<(.+?)>/); // Extracts the email inside <>
    email = emailMatch ? emailMatch[1] : '[Not provided]';

    const nameMatch = fromString.match(/"(.+?)"/); // Extracts the name inside ""
    name = nameMatch ? nameMatch[1] : '[Not provided]';

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>TKN{ticket?.index + 1}</h2>
          <img className="close-icon" src={cross} onClick={onClose} alt='close' />


          {/* <p><strong>Email:</strong> {ticket.from || '[Not provided in the text]'}</p> */}

          <p><strong>Email:</strong> {email}</p>

          <p><strong>Phone:</strong> {ticket.phoneNumber || '[Not provided in the text]'}</p>

          <hr />

          {/* Query Details */}
          <div className="query-details">
            <strong>Query Details</strong>

            {/* Split details into two sections */}
            <div className="section-split">
              <div>
                <p><strong>Query Type:</strong> {ticket.bookingType || 'N/A'}</p>
                <p><strong>Check-In Date:</strong> {ticket.checkInDate || 'N/A'}</p>
                <p><strong>Destination:</strong> {ticket.destination || 'N/A'}</p>
                <p><strong>Number of Guests:</strong> {ticket.numberOfGuests || 'N/A'}</p>
                <p><strong>Number of Children:</strong> {ticket.numberOfChildren || 'N/A'}</p>
                <p><strong>Meals:</strong> {ticket.meals || 'N/A'}</p>
                <p><strong>Hotel Star Rating:</strong> {ticket.hotelStarRating || 'N/A'}</p>
                <p><strong>Equipment:</strong> {ticket.equipment || 'N/A'}</p>
              </div>

              <div>
                <p><strong>Conference and Events:</strong> {ticket.conferenceAndEvents || 'N/A'}</p>
                <p><strong>Check-Out Date:</strong> {ticket.checkOutDate || 'N/A'}</p>
                <p><strong>Budget:</strong> {ticket.budget || 'N/A'}</p>
                <p><strong>Number of Adults:</strong> {ticket.numberOfAdults || 'N/A'}</p>
                <p><strong>Entertainment:</strong> {ticket.entertainment || 'N/A'}</p>
                <p><strong>Special Meals and Drinks:</strong> {ticket.specialMealsAndDrinks || 'N/A'}</p>
                <p><strong>Room Type:</strong> {ticket.roomType || 'N/A'}</p>
                <p><strong>Payment Details:</strong> {ticket.paymentDetails || 'Not provided'}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };
}
export default Modal;
