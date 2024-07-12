import React, { useState } from 'react';
import '../App.css';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    // You can add your subscribe logic here
    console.log(`Subscribing with email: ${email}`);
  };

  return (
    <div className='sbs-form'>
      <input
        type="email"
        id="emailInput"
        placeholder="Enter your email"
        value={email}
        onChange={handleInputChange}
      />
      <button className='sbs-btn' onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default SubscribeForm;
