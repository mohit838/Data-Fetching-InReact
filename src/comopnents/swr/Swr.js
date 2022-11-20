import axios from "axios";
import React from "react";
import useSWR from "swr";

// Fetcher Function
const fetcher = (url) => axios.get(url).then((res) => res.data);

const Swr = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  //   console.log(data);

  if (error) {
    return <h1>Error has been occured</h1>;
  }

  return (
    <div>
      <h1>Fetch API Using SWR</h1>

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

export default Swr;
