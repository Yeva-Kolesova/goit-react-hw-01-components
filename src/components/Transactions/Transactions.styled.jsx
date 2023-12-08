import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 0 auto 50px;
  -webkit-box-shadow: 0px 18px 20px -10px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 0px 18px 20px -10px rgba(0, 0, 0, 0.64);
  box-shadow: 0px 18px 20px -10px rgba(0, 0, 0, 0.64);
`;
export const TableHead = styled.thead`
  font-size: 20px;
`;
export const Tr = styled.tr`
  padding: 15px;
  background-color: ${props => props.$color};
`;
export const Th = styled.th`
  background-color: rgb(0, 188, 213);
  padding: 15px 50px;
`;
export const Tbody = styled.tbody`
  font-size: 18px;
`;
export const Td = styled.td`
  padding: 10px 0;
  text-align: center;
`;
