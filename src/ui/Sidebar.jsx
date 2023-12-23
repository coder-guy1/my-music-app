import styled from "styled-components";
import MainNav from "./MainNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSymfony } from "@fortawesome/free-brands-svg-icons";

const StyledSidebar = styled.aside`
  background-color: #a2a2a2;
  padding: 3.2rem 1rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  width: calc(
    38% - 1px
  ); /* Set the width to 20% of the screen width, considering the border */
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const LogoIcon = styled(FontAwesomeIcon)`
  color: var(--color-primary); /* Change to your desired color */
  font-size: 2rem;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <LogoIcon icon={faSymfony} />
      <MainNav />
    </StyledSidebar>
  );
};

export default Sidebar;
