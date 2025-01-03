import { PatternLayout } from "./components/PatternLayout";
import { PatternProvider } from "./context/context";

function App() {
  return (
    <PatternProvider>
      <PatternLayout />
    </PatternProvider>
  );
}

export default App;
