import styled from "styled-components";

const NavbarContainer = styled.nav`
  // Navbar styling
`;

function Navbar() {
  return (
    <NavbarContainer>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </NavbarContainer>
  );
}

export default Navbar;
