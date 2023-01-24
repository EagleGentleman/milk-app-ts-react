import React, { useEffect, useMemo, useState } from "react";
import { IMilk } from "./Interfaces";
import data from "../milk.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import milk from "../milk.png";

function Main() {
  const [Milk, setMilk] = useState<IMilk[]>(data.results);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Add default value on page load
  useEffect(() => {
    setMilk(data.results);
  }, []);

  let options = new Array("All");
  Milk.map((c) => {
    options.push(c.type as string);
  });
  const uniqueNames = Array.from(new Set(options));

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory ) {
      return Milk;
    }
    return Milk.filter((item) => item.type === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, Milk]);

  function handleCategoryChange(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setSelectedCategory(e.target.value);
    console.log("👀" + selectedCategory);
  }
  return (
    <>
      <div>Filter by Category:</div>
      {/* All,Cashew milk,Pea milk,Walnut milk,Rice milk,Coconut milk,Soy milk,Hemp milk,Almond milk,Oat milk,Macadamia milk,Whole milk */}
      <div>
        <select
          name="category-list"
          id="category-list"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {uniqueNames.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>"👀"+{selectedCategory}</div>
      <div className="container d-flex flex-wrap justify-content-center">
        {filteredList &&
          filteredList.length > 0 &&
          filteredList.map((item) => (
            <Card
              style={{ width: "15rem", margin: "1rem", textAlign: "center" }}
            >
              <Card.Img
                variant="top"
                src={milk}
                style={{ width: "60%", marginLeft: "3rem" }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.type}
                </Card.Subtitle>
                <Card.Text>Type :{item.storage}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
}

export default Main;
