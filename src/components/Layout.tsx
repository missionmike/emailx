// import "../css/reset.scss";

import { Column, Row, Table } from "./Table";

import { Container } from "./Container";
import Helmet from "react-helmet";
import { ILayout } from "../types/interfaces";
import React from "react";

const Layout: React.FunctionComponent<ILayout> = ({
  subject = "",
  children = <React.Fragment></React.Fragment>,
}) => {
  return (
    <Container>
      <Helmet>
        <title>{subject}</title>
      </Helmet>
      <Table subject={subject}>
        <tbody>
          <Row>
            <Column>{children}</Column>
          </Row>
        </tbody>
      </Table>
    </Container>
  );
};

export { Layout };
