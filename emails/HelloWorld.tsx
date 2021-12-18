import React from "react";
import { Container, Row, Box, RowBox, Content } from "../src/components/Table";

const HelloWorld = () => {
  return (
    <Container>
      <RowBox>Hello World!</RowBox>
    </Container>
  );
};

HelloWorld.subject = "Hello, world!";

export default HelloWorld;
