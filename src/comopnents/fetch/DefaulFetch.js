import React, { useEffect, useState } from "react";

const DefaultFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const resData = await res.json();
      setData(resData);
    };

    // Funciton Calling
    fetchData();
  }, []);

  return (
    <div>
      <h1>Default Fetch API</h1>

      <br />
      <br />
      <br />
      {/* Main Code */}
      <div>
        {data.map((singleData) => (
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

export default DefaultFetch;
