import { BrowserRouter, Route, Routes } from "react-router-dom";
//styles
// import "./App.css";

// pages & components
import Login from "pages/login";
import Task from "pages/task";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={ <Login/> } />
            <Route path="/task" element={ <Task/> } />
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login">
//           <Login />
//         </Route>
//         <Route path="/">
//           <Task />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;


