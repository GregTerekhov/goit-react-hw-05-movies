import styled from '@emotion/styled';

export const NotFoundContainer = styled.div`
  padding: 24px;
`;

export const HomeButton = styled.button`
  text-decoration: none;
  background-color: inherit;
  color: inherit;
  display: inline-block;
  margin-bottom: 24px;
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 400ms ease, color 400ms ease;

  &:hover,
  &:focus,
  &:active {
    border-color: #ff7341;
    color: #ff7341;
  }
`;
