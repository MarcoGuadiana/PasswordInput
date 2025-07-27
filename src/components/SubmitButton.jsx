import React from 'react';

    const SubmitButton = () => {
  const handleEnter = () => {
    console.log("Mouse Entering");
  };

  const handleLeave = () => {
    console.log("Mouse Exiting");
  };

  return (
    <button
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
    >
      Submit Password
    </button>
  );
};

export default SubmitButton;