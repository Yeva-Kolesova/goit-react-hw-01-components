import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 350px;

  background-color: #fff;
  border-radius: 5px;

  margin: 0 auto 70px;
`;
export const Title2 = styled.h2`
  text-align: center;

  padding: 30px 0;
`;

export const StatList = styled.ul`
  list-style: none;

  display: flex;
  width: 100%;

  margin: 0;
  padding: 0;

  background: #808080a3;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80px;

  border: 1px solid #0000004d;
`;
