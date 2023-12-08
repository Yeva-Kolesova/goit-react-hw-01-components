import styled from 'styled-components';

export const FriendListItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  border-radius: 4px;

  margin-bottom: 50px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 300px;

  border-radius: 4px;
  -webkit-box-shadow: 3px 9px 34px -16px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 3px 9px 34px -16px rgba(0, 0, 0, 0.64);
  box-shadow: 3px 9px 34px -16px rgba(0, 0, 0, 0.64);
  background: #ffff;

  padding: 10px;
`;

export const StatusColor = styled.span`
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};

  width: 20px;
  height: 20px;

  border-radius: 10px;
`;
