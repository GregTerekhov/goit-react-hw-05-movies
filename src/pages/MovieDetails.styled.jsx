import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const BackButton = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-align: center;
  margin-bottom: 24px;
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 10px;
  transition: border-color 400ms ease, color 400ms ease;

  &:hover,
  &:focus,
  &:active {
    border-color: #ff7341;
    color: #ff7341;
  }
`;

export const DetailsContainer = styled.div`
  padding: 24px;
`;

export const MovieInfo = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`;

export const AdditionalInfo = styled.div`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

export const AdditionalList = styled.ul`
  list-style: none;
`;

export const SubMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: inherit;
  font-size: 24px;
  transition: color 400ms ease;

  &:hover,
  &:focus,
  &:active {
    color: #ff7341;
  }
`;
