import "./App.css";
import Container from "./components/Container";
import {ThemeProvider} from "./contexts/ThemeContext";

function App() {

  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;
