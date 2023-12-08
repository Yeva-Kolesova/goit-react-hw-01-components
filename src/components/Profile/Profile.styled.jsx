import styled from 'styled-components';

export const ProfileWrap = styled.div`
  position: relative;
  width: 340px;
  height: 355px;

  border-radius: 5px;
  background-color: #fff;
  color: rgb(118, 134, 150);

  padding: 30px 0;
  margin: 50px auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  display: block;
  width: 100px;

  background-color: white;
  border-radius: 50%;
  border: 1px solid grey;

  margin-bottom: 25px;
}
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: rgb(31, 51, 73);

  margin-bottom: 15px;
`;
export const Tag = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
`;
export const Location = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`;
export const Stats = styled.ul`
  position: absolute;
  bottom: 0;
  width: 100%;

  list-style: none;

  display: flex;
  justify-content: space-between;

  background-color: rgb(243, 243, 243);

  margin-bottom: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: calc(100% / 3);
  height: 110px;

  border: 1px solid rgb(208, 218, 228);
  color: rgb(118, 134, 150);
  font-size: 18px;
`;

export const Quantity = styled.span`
  font-weight: 600;
  color: rgb(31, 51, 73);
`;
