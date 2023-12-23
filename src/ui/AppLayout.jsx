import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Sidebar />
        <Header />
      </StyledAppLayout>
    </>
  );
}
export default AppLayout;
