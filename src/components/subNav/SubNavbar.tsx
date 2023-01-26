import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import SearchPanel from "./SearchPanel";
import FilterDropDown from "./FilterDropDown";

function SubNavbar() {
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid style={{ marginRight: "6rem", marginLeft: "6rem" }}>
          <SearchPanel></SearchPanel>
        </Container>
      </Navbar>
    </div>
  );
}

export default SubNavbar;
