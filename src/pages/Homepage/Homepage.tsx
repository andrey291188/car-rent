import { NavLink } from "react-router-dom";
import { StyledHomepageWrapper } from "./StyledHomepage.styled";

const Homepage = () => {
  return (
    <StyledHomepageWrapper>
      <h1 className="title">Car rental website</h1>
      <p className="desc">On our website you can rent a car for your vacation or meeting</p>
      <NavLink className="button" to="/catalog">Go to choice</NavLink>
    </StyledHomepageWrapper>
  );
};

export default Homepage;
