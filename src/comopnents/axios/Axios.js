import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resData = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(resData.data);
    };

    // Funciton Calling
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch API Using AXIOS</h1>

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

export default Axios;
