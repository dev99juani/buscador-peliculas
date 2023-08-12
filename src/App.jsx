import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import { Movies } from "./assets/styled-component/Movies";
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <h1>HOLA</h1>
      <Movies/>
    </ThemeProvider>
  );
}

export default App;
