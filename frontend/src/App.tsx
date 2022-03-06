import "./App.css";
import Button from "@material-ui/core/Button";
import { fetchDespesas } from "./services/backend.service";

function App() {
  fetchDespesas().then((d) => console.log(d));

  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default App;
