import styled from "styled-components";
import React from "react";

const Container = ({ children }: { children?: React.Element[] }) => {
  interface ITable {
    subject?: string;
  }

  const TableElement = styled.table<ITable>`
    width: 600px;
    margin: 0 auto;
    background: white;
    table-layout: fixed;
  `;

  return (
    <TableElement>
      <tbody>{children}</tbody>
    </TableElement>
  );
};

const Row = styled.tr``;

const Box = styled.td``;

const RowBox = ({ children }: { children?: React.Element[] }) => {
  return (
    <Row>
      <Box>{children}</Box>
    </Row>
  );
};

const Content = ({ children }: { children?: React.Element[] }) => {
  return (
    <Row>
      <Box>
        <p>{children}</p>
      </Box>
    </Row>
  );
};

export { Container, Row, Box, RowBox, Content };
