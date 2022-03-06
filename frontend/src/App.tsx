import "./App.css";
import Button from "@material-ui/core/Button";
import { fetchDespesas } from "./services/backend.service";
import AppControls from "./components/AppControls";

function App() {
  fetchDespesas().then((d) => console.log(d));

  return (
    <div className="App">
      <AppControls />
    </div>
  );
}

export default App;
