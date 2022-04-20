import "./assets/css/general.css";
import "./assets/css/style.css";
import { Routes, Route } from "react-router-dom";
import Index from "./webOffice/components";
import Login from "./auth/Login";
import FormEmpl from "./webOffice/form/FormEmpl";
import Register from "./auth/Register";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/emploi" element={<FormEmpl />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
