import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from './examplesFunctional/LoginForm';
import MultipleForm from './examplesFunctional/MultipleForm';
import ActivityForm from './examplesFunctional/ActivityForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LoginForm /> */}
    {/* <MultipleForm /> */}
    <ActivityForm />
  </React.StrictMode>
);