import "./App.css";
import FilterDropDown from "./components/FilterDropDown";
import Main from "./components/Main";
import NavigationBar from "./components/NavigationBar";
import SearchPanel from "./components/SearchPanel";
import SubNavbar from "./components/SubNavbar";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <SubNavbar></SubNavbar>
      <Main></Main>
    </div>
  );
}

export default App;
