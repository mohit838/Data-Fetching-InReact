import React from "react";
import { useQuery } from "react-query";
import getData from "./getData";

const ReactQuery = () => {
  // Queries
  const { data } = useQuery("data", () => getData());

  return (
    <div>
      <h1>Fetch API React Query</h1>

      <br />
      <br />
      <br />
      {/* Main Code */}
      <div>
        {data?.map((singleData) => (
          <ul key={singleData.id} style={{ listStyle: "none" }}>
            <li>{singleData.userId}</li>
            <li>{singleData.title}</li>
            <li>{singleData.body}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ReactQuery;
