import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Form, Alert } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IMilk } from "../Interfaces";
import milk from "../../milk.png";
import "./MilkDetail.css";

function MilksDetail() {
  const [Milk, setMilk] = useState<IMilk>({
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "Abcd efgh ijkl",
    type: "mno pqrst uv ",
    storage: 10,
  });
  const navigate = useNavigate();
  const [value1, setValue1] = useState<number>(0);
  const [isValid, setIsValid] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://localhost:7028/api/Milk/${id}`)
      .then((response) => {
        setMilk({
          name: response.data.name,
          type: response.data.type,
          storage: response.data.storage,
          id: response.data.id,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  }, [id]);
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue1(parseInt(event.target.value));
    // console.log("👌"+ value1)
  };
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    var payload = {
      name: Milk?.name,
      type: Milk?.type,
      Storage: Milk?.storage - value1,
      id: Milk?.id,
    };
    console.log("📩" + payload);

    axios
      .put(`https://localhost:7028/api/Milk/${id}`, payload)
      .then((response) => {
        console.log("✅" + response.data);
        setIsValid(true);
        // navigate("/");
      })
      .catch((e: Error) => {
        console.log("👻" + e);
        setIsValid(false);
      });
  };

  return (
    <>
      <Container>
        <Link to="/" style={{ float: "left" }}>
          🏠Home
        </Link>

        <Row>
          <Card
            style={{ width: "35rem", flexDirection: "row", marginTop: "10rem" }}
          >
            <Card.Img className="card__image" src={milk} />
            <Card.Body style={{ alignItems: "left" }}>
              <Card.Title>{Milk?.name}</Card.Title>
              <Card.Subtitle>{Milk?.type}</Card.Subtitle>
              <Card.Text>Quantity : {Milk?.storage} liters</Card.Text>
              <Form onSubmit={submitForm}>
                <Form.Range
                  value={value1}
                  onChange={changeValue}
                  max={Milk?.storage}
                />
                <p>Order Quantity: {value1}liter</p>
                <Button variant="primary" type="submit">
                  Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
        {isValid ? (
          <Alert variant="success">
            <Alert.Heading>Thank you!</Alert.Heading>
             {value1}liters {Milk?.type} order has been placed.
          </Alert>
        ) : null
        // <Alert variant="danger">Oops! Try again</Alert>
        }
      </Container>
    </>
  );
}

export default MilksDetail;
