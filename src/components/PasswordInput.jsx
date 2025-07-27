import React from 'react';

const PasswordInput = () => {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <input
      type="password"
      placeholder="Enter password"
      onChange={handleChange}
      className="border px-2 py-1 rounded"
    />
  );
};

export default PasswordInput;
