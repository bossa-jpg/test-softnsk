import { AppHeader } from "./components/AppHeader";
import { AboutBlock } from "./components/AboutBlock";
import { OrderingBlock } from "./components/OrderingBlock";
import { AppFooter } from "./components/AppFooter";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AboutBlock />
      <OrderingBlock />
      <AppFooter />
    </div>
  );
}

export default App;
