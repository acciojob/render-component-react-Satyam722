import React, { useState } from 'react';

const PersonalizedGreeting = () => {
  // 1. Use the useState hook to manage the name entered by the user.
  const [name, setName] = useState('');

  // 2. Handler function to update the 'name' state whenever the input changes.
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // 3. Conditional Greeting Logic:
  //    - The greeting should only be displayed if the 'name' state is NOT empty.
  const displayGreeting = name.trim().length > 0;

  return (
    <div className="greeting-container">
      <h2>Personalized Greeting</h2>

      {/* User Input Field */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange} // Links input changes to the state handler
      />

      {/* Live Greeting Update & Edge Case Handling:
        The greeting paragraph is only rendered if displayGreeting is true.
      */}
      {displayGreeting && (
        // The required greeting format: "Hello, [User's Name]!"
        <p className="greeting-message">
          Hello, {name}!
        </p>
      )}

      {/* Optional: Add basic styling classes if needed for display */}
      <style jsx="true">{`
        .greeting-container {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          max-width: 400px;
          margin: 20px auto;
        }
        input[type="text"] {
          padding: 10px;
          width: 100%;
          box-sizing: border-box;
          margin-bottom: 20px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .greeting-message {
          font-size: 1.2em;
          font-weight: bold;
          color: #3498db;
        }
      `}</style>
    </div>
  );
};

export default PersonalizedGreeting;
