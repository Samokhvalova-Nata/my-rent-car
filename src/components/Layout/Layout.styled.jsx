import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 8px 0;
  margin: 20px 0;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 600;
  transition: transform var(--transition);

  &.active {
    color: var(--accent-color);
  }

  &:hover,
  &:focus {
      transform: scale(1.05);
    }
`;