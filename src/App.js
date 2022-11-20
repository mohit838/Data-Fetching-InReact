import { Suspense } from "react";
import "./App.css";
import Axios from "./comopnents/axios/Axios";
import DefaultFetch from "./comopnents/fetch/DefaulFetch";
import ReactQuery from "./comopnents/reactQuery/ReactQuery";
import Swr from "./comopnents/swr/Swr";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <div className="App">
      <h1>4 Ways to fetch data form API Calling</h1>

      <br />
      <br />
      <br />

      {/* Very Popular Now-a-days */}
      {/* Warapping with all child componets*/}
      {/* Multiple time calling but not fetching multiple times! "That's the main point" */}
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<h1>Loading</h1>}>
          <ReactQuery />
          <ReactQuery />
          <ReactQuery />
        </Suspense>
      </QueryClientProvider>

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
