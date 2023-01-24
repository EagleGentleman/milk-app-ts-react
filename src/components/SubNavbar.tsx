import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchPanel from "./SearchPanel";
import FilterDropDown from "./FilterDropDown";

function SubNavbar() {
  return (
    <div>
      <Navbar  expand="lg" >
        <Container fluid style={{marginRight:"6rem",marginLeft:"6rem"}}>
            <SearchPanel></SearchPanel>
           <FilterDropDown></FilterDropDown>
        </Container>
      </Navbar>
    </div>
  );
}

export default SubNavbar;
