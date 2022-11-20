const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resData = await res.json();
  return resData;
};

export default getData;
