// import "../css/reset.scss";
import React from "react";
import Helmet from "react-helmet";

import { Table } from "./Table";
import { Container } from "./Container";

import { ILayout } from "../types/interfaces";

const Layout: React.FunctionComponent<ILayout> = ({
  subject = "",
  children = <React.Fragment></React.Fragment>,
}) => {
  return (
    <Container>
      <Helmet>
        <title>{subject}</title>
      </Helmet>
      <Table subject={subject}>{children}</Table>
    </Container>
  );
};

export { Layout };
