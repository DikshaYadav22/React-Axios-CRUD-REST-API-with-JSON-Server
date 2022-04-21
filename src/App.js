import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContacts from "./components/AddContacts";
import Menu from "./components/Menu";

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/add/contacts" element={<AddContacts />} />
      </Routes>
    </Router>
  );
};

export default App;
