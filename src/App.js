import "./App.css";
import Axios from "./comopnents/axios/Axios";
import DefaultFetch from "./comopnents/fetch/DefaulFetch";

function App() {
  return (
    <div className="App">
      <h1>4 Ways to fetch data form API Calling</h1>

      <br />
      <br />
      <br />

      <DefaultFetch />
      <Axios />
    </div>
  );
}

export default App;

// NOTE: Link for API Calling
// https://jsonplaceholder.typicode.com/
