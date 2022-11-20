import { Suspense } from "react";
import "./App.css";
import Axios from "./comopnents/axios/Axios";
import DefaultFetch from "./comopnents/fetch/DefaulFetch";
import Swr from "./comopnents/swr/Swr";

function App() {
  return (
    <div className="App">
      <h1>4 Ways to fetch data form API Calling</h1>

      <br />
      <br />
      <br />

      <Suspense fallback={<h1>Loading</h1>}>
        <Swr />
      </Suspense>
      <Axios />
      <DefaultFetch />
    </div>
  );
}

export default App;

// NOTE: Link for API Calling
// https://jsonplaceholder.typicode.com/
