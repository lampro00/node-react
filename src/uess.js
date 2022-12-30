import React, { useEffect, useLayoutEffect, useState } from "react";
function GetData(d) {
  const [Data1, Getdata1] = useState([]);
  useEffect(() => {
    async function fetchuser() {
      const url = "http://localhost:5000/users";
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      Getdata1(responseJson);
    }
    fetchuser();
  }, []);
  console.log(Data1);   
  return (
    <ul>
      {Data1.map((data) => (
        <li>{data}</li>
      ))}
    </ul>
  );
}

export default GetData;
