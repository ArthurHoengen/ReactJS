import React, { useState } from 'react';

export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }

  return (
    <input value={email} onChange={handleChange} />
  );
}

// Simplificando
// const handleChange = (event) => {
//     const newEmail = event.target.value;
//     setEmail(newEmail);
//   }

// Nisso:

// const handleChange = (event) => setEmail(event.target.value);

// Ou ainda:

// const handleChange = ({target}) => setEmail(target.value);