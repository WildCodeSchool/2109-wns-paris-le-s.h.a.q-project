import * as React from 'react';
import Task from 'pages/task';
import './App.css';
import SignInForm from './components/login/SignInForm';

const App = () => (
  <div className="App">
    <Task />
    <SignInForm />
  </div>
);

export default App;
