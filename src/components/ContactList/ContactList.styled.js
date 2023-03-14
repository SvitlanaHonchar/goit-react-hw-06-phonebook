import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  /* justify-content: center; */
  align-items: center;

  padding: 20px;

  font-size: 20px;
  font-weight: 500;

  & button {
    margin-left: 10px;

    &:focus {
      background-color: #c7dcff;
    }

    &:hover {
      background-color: #c7dcff;
    }
  }
`;

export const StyledOl = styled.ol`
  margin: 0;

  padding: 0;

  font-size: 20px;
  font-weight: 500;
`;
