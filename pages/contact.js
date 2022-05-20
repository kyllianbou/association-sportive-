import React from 'react';
import './css/contact.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Kylian',
    lastName: 'Mbappé'
  };
  
  const element = (
    <h1>
      Bonjour, {formatName(user)} !  </h1>
  );
  
  ReactDOM.render(
    element,
    document.getElementById('root')
  );