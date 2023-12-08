import {
  TransactionTable,
  TableHead,
  Tr,
  Th,
  Tbody,
  Td,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </TableHead>

      <Tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <Tr
            key={id}
            $color={idx % 2 === 0 ? 'rgb(255, 255, 255)' : 'rgb(236, 241, 244)'}
          >
            <Td $color={1}>{type}</Td>
            <Td $color={1}>{amount}</Td>
            <Td $color={1}>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </TransactionTable>
  );
};
