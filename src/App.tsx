import "./App.css";
import Main from "./components/Main";
import NavigationBar from "./components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import MilksDetail from "./components/milkDetails/MilksDetail";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/milk-details/:id" element={<MilksDetail />} />
      </Routes>
    </div>
  );
}

export default App;
