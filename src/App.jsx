import React from 'react';
import PasswordInput from './components/PasswordInput';
import SubmitButton from './components/SubmitButton';

const App = () => {
  return (
    <div className="p-4">
      <PasswordInput />
      <SubmitButton />
    </div>
  );
};

export default App;