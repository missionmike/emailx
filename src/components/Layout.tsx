import "../css/reset.scss";
import "../css/main.scss";

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
      {children}
    </Container>
  );
};

export { Layout };
