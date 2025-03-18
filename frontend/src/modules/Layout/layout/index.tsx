import { Outlet } from "react-router";
import Sidebar from "../components/SideBar";
import * as Styled from "./styled";

function Layout() {
  return (
    <Styled.Container>
      <Sidebar />
      <Styled.MainContent>
        <Outlet />
      </Styled.MainContent>
    </Styled.Container>
  );
}

export default Layout;
