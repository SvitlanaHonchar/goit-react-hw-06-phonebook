import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;

  width: 200px;

  padding: 20px;
  margin-bottom: 20px;

  border: 1px solid black;
  border-radius: 5px;

  font-size: 24px;
  font-weight: 600;
`;

export const StyledBtn = styled.button`
  width: 170px;
  height: 30px;
  padding: 0;
  margin: 0;

  border: 1px solid black;
  border-radius: 5px;

  &:focus {
    background-color: #c7dcff;
    border-radius: 5px;
  }

  &:hover {
    background-color: #c7dcff;
    border-radius: 5px;
  }
`;
