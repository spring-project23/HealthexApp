import React, { useState } from 'react';
import './Medications.css';

const EmergencyContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = () => {
    const newContact = {
      name: name,
      phone: phone
    };

    setContacts([...contacts, newContact]);

    setName('');
    setPhone('');
  };

  return (
    <div className="medications-container">
      <h2>Add Emergency Contact</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button onClick={addContact}>Add Contact</button>

      <h2>Emergency Contacts</h2>
      {contacts.map((contact, index) => (
        <div key={index}>
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default EmergencyContacts;
