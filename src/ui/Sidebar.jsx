import { useState } from "react";
import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-200);
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  transition: left 0.3s ease-in-out;
  padding: 1.2rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

const ToggleButton = styled.button`
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <StyledSidebar isOpen={isOpen}>
        {/* Sidebar Content */}
        <button onClick={handleToggle}>close</button>
        <MainNav />
      </StyledSidebar>

      {/* Toggle Button */}
      <ToggleButton onClick={handleToggle}>{isOpen ? "" : "☰"}</ToggleButton>
    </>
  );
};

export default Sidebar;
