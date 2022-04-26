import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages & components
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Task from "pages/task";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={ <Login/> } />
            <Route path="/signup" element={ <SignUp/> } />
            <Route path="/task" element={ <Task/> } />
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App


