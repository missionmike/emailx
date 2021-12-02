import styled from "styled-components";

interface ITable {
  subject?: string;
}

const Table = styled.table<ITable>`
  width: 600px;
  margin: 0 auto;
  background: white;
`;

export { Table };
