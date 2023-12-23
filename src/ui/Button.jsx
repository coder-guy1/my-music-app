/* eslint-disable react/prop-types */
import styled from "styled-components";
const StyledBtn = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: green;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
function Button({ children }) {
  return <StyledBtn>{children}</StyledBtn>;
}
export default Button;
