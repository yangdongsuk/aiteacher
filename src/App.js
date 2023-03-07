import "./App.css";
import { MantineProvider, AppShell, Header } from "@mantine/core";

import AppRouter from "./components/Router";
import MainHeader from "./components/Home/MainHeader";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppRouter />
    </MantineProvider>
  );
}

export default App;
