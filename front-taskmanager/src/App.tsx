import * as React from 'react';
import TaskInput from './components/taskInput/TaskInput';
import TaskTable from './components/taskTable/TaskTable';
import './App.css';
import SignInForm from './components/login/SignInForm';

const App = () => (
  <div className="App">
    <TaskTable />
    <TaskInput />
    <SignInForm />
  </div>
);

export default App;
