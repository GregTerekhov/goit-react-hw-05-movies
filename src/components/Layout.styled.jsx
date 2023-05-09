import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  background-color: #e7e7e7;
  box-shadow: 0px 1px 10px 2px #414141;
  display: flex;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 24px;
`;

export const PageLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 24px;
  padding: 16px;

  &:hover,
  &:focus,
  &:active {
    color: #ff7341;
  }
`;
