import { GlobalStyleReset } from "../css/GlobalStyleReset";
import { GlobalStyleMain } from "../css/GlobalStyleMain";
import { Container } from "./Container";
import Helmet from "react-helmet";
import { ILayout } from "../types/interfaces";
import React from "react";

const Layout: React.FunctionComponent<ILayout> = ({
  subject = `untitled_${Date.now()}`,
  children = <React.Fragment></React.Fragment>,
}) => {
  return (
    <Container>
      <Helmet>
        <title>{subject}</title>
      </Helmet>
      <GlobalStyleReset />
      <GlobalStyleMain />
      {children}
    </Container>
  );
};

export { Layout };
