import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CardGallery from "./CardGallery";

const Gallery = () => {
  const products = [
    {
      id: 1,
      name: "smartphone",
      description:
        "smartphone de vanguardia Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?",
      price: 2000000,
      urlimage:
        "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "BMW",
      description:
        "auto de vanguardia Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?",
      price: 2000000,
      urlimage:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "NES",
      description:
        "comsola retro Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?",
      price: 2000000,
      urlimage:
        "https://images.pexels.com/photos/9100862/pexels-photo-9100862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "NES",
      description:
        "comsola retro Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?",
      price: 2000000,
      urlimage:
        "https://images.pexels.com/photos/9100862/pexels-photo-9100862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "NES",
      description:
        "comsola retro Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?",
      price: 2000000,
      urlimage:
        "https://images.pexels.com/photos/9100862/pexels-photo-9100862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <Row xs={1} sm={2} md={4}>
        {products.slice(0, 4).map((item) => (
          <Col key={item.id}>
            <CardGallery product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Gallery;
