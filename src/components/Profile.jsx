// Christian is doing profile

import React from "react";
import { useState, useEffect } from "react";

import {
  Form,
  Button,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  Col,
  Container,
  Card,
  Row,
} from "react-bootstrap";
import { getUser } from "../auth";
import { getAllProducts } from "../api";

const Profile = () => {
  let userName = getUser();
  let [allProducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    const products = await getAllProducts();
    setAllProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  console.log(allProducts);
  return (
    <div className="bg-image">
      <div className="mask"></div>
      <Container>
        <h1 className="text-center text-white p-4 mt-0 mb-1 mb-md-0">
          {userName} Profile Page
        </h1>
        <h3 className="text-center text-white p-4 mt-0 mb-1 mb-md-0">Your NFTs</h3>
        <Row className="m-5">
          {allProducts && allProducts.length
            ? allProducts.map((product, index) => {
                //console.log(product);
                if (userName === product.current_owner) {
                  return (
                    <Card
                      className="m-1"
                      key={product.id + index}
                      style={{ width: "18rem" }}
                    >
                      <Card.Img className="mt-3" src={product.image_url} />
                      <Card.Body className="text-center">
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>{product.current_owner}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                }
              })
            : "No products found"}
        </Row>
      </Container>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
};

export default Profile;

