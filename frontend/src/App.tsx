import Layout from "@/modules/Layout/layout";
import StartChat from "@/modules/StartChat/layout";
import { ROUTES } from "@/shared/configs/route";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { default as ChatModule } from "./modules/Chat/layout";
import theme from "./shared/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.CHAT} />} />
          <Route path={ROUTES.CHAT} element={<Layout />}>
            <Route index element={<StartChat />} />
            <Route
              path={`${ROUTES.CHAT}/:sessionId`}
              element={<ChatModule />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
