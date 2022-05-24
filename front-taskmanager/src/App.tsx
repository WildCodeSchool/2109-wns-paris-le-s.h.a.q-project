import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages & components
import SignIn from './pages/login';
import SignUp from './pages/signUp';
import Task from './pages/task';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
