import * as React from 'react';
import TaskInput from './components/taskInput/TaskInput';
import TaskTable from './components/taskTable/TaskTable';
import './App.css';

const App = () => (
  <div className="App">
    <TaskTable />
    <TaskInput />
  </div>
);

export default App;
