import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  border-bottom: 2px solid rgb(52, 112, 255);
  background-color: rgba(18, 20, 23, 0.2);

  .navigate {
    display: flex;
    gap: 20px;
  }

`;

export const NavigateButton = styled(NavLink)`
    border: 2px solid rgb(52, 112, 255);
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    color: rgb(52, 112, 255);
    &.active {
        background-color: rgb(52, 112, 255);
        border: 2px solid white;
        color: white;
    };
`