import "./App.css";
import { MantineProvider } from "@mantine/core";

import AppRouter from "./components/Router";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppRouter />
    </MantineProvider>
  );
}

export default App;
