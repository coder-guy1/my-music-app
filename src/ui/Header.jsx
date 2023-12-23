import { Link } from "react-router-dom";
import StyledButton from "./Button";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto; /* Push buttons to the right */
`;

function Header() {
  return (
    <StyledHeader>
      <ButtonsContainer>
        <Link to="/login">
          <StyledButton>Login</StyledButton>
        </Link>
        <Link to="/signup">
          <StyledButton>Sign Up</StyledButton>
        </Link>
      </ButtonsContainer>
    </StyledHeader>
  );
}

export default Header;
