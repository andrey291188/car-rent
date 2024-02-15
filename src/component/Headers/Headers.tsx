import { NavLink } from "react-router-dom";

const Headers = () => {

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">catalog</NavLink>
      <NavLink to="/favorites">favorites</NavLink>
    </nav>
  );
};

export default Headers;
