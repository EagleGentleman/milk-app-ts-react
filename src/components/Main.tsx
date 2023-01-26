import React, { useEffect, useMemo, useState } from "react";
import { IMilk } from "./Interfaces";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import milk from "../milk.png";
import axios from "axios";
import { Navbar, Container, Form, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Main() {
  const [Milk, setMilk] = useState<IMilk[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [search, setSearch]: [string, (search: string) => void] =
    React.useState("");

  useEffect(() => {
    axios.get("https://localhost:7028/api/Milk").then((response) => {
      setMilk((data) => {
        return response.data;
      });
    });
  }, []);
  const navigate = useNavigate();
  let options = new Array("All");
  Milk.map((c) => {
    options.push(c.type as string);
  });
  const uniqueNames = Array.from(new Set(options));

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory || selectedCategory === "All") {
      return Milk;
    }
    return Milk.filter((item) => item.type === selectedCategory);
  }
  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, Milk]);
  // Add search panel
  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {/* All,Cashew milk,Pea milk,Walnut milk,Rice milk,Coconut milk,
      Soy milk,Hemp milk,Almond milk,Oat milk,Macadamia milk,Whole milk */}
      <Navbar expand="lg">
        <Container fluid style={{ marginRight: "6rem", marginLeft: "6rem" }}>
          <div>
            <input
              style={{ fontSize: "large", borderRadius: "15px" }}
              type="search"
              placeholder="🔍 Search"
              onChange={handleChange}
            />
          </div>
          <div style={{ float: "right", marginRight: "5rem" }}>
            <Form.Select
              name="category-list"
              id="category-list"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {uniqueNames.map((c) => (
                <option value={c}>{c}</option>
              ))}
            </Form.Select>
          </div>
        </Container>
      </Navbar>

      <div className="container d-flex flex-wrap justify-content-center">
        {filteredList &&
          filteredList.length > 0 &&
          filteredList.map((item) => {
            if (
              search === "" ||
              item.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return (
                <Card className="milk__card"
                  onClick={() => navigate(`/milk-details/${item.id}`)}
                  style={{
                    width: "20rem",
                    margin: "1rem",
                    textAlign: "center",
                    paddingTop: "2rem",
                    cursor: "pointer",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={milk}
                    // style={{ width: "60%", marginLeft: "3rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {item.type}
                    </Card.Subtitle>
                    <Card.Text>{item.storage}liters</Card.Text>
                  </Card.Body>
        
                </Card>
              );
            }
            return null;
          })}
      </div>
    </>
  );
}

export default Main;
