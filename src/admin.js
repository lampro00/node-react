import React, { useEffect, useLayoutEffect, useState } from "react";
import GetData from "./uess";
import axios from "axios";
import { Link } from "react-router-dom";
function PostData() {
  const [Data1, Getdata1] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const user = e.target.userName.value;
    const body = user;
    axios
      .post("http://localhost:5000/adduser", {
        body,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(Data1);

  return (
    <div>
      <form onSubmit={handlesubmit} action="http://localhost:3000/">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" name="userName" id="title" />
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default PostData;
