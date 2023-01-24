import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterDropDown() {
  return (
    <div>
    <DropdownButton
      align="end"
      title="Filter items"
      id="dropdown-menu-align-end"
      variant="dark"
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>
    </div>
  );
}

export default FilterDropDown;
