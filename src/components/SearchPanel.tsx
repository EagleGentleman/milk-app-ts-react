import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchPanel() {
  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="dark">Search</Button>
      </Form>
    </>
  );
}

export default SearchPanel;
