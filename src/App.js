import { Suspense } from "react";
import "./App.css";
import Axios from "./comopnents/axios/Axios";
import DefaultFetch from "./comopnents/fetch/DefaulFetch";
import ReactQuery from "./comopnents/reactQuery/ReactQuery";
import Swr from "./comopnents/swr/Swr";

function App() {
  return (
    <div className="App">
      <h1>4 Ways to fetch data form API Calling</h1>

      <br />
      <br />
      <br />

      {/* Very Popular Now-a-days */}
      <ReactQuery />

      {/* If use suspense then no need to use optional chaining */}
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
