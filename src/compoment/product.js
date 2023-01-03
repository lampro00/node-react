import React, { useEffect, useLayoutEffect, useState } from "react";
import GetData from "./shop";
import axios from "axios";
import { Link } from "react-router-dom";
function PostData() {
  const [Data1, Getdata1] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    let t = e.target.title.value;
    let i = e.target.imageUrl.value;
    let d = e.target.description.value;
    let p = e.target.price.value;

    const body = { t, i, d, p };
    const headers = { "Content-Type": "application/json" };
    axios
      .post("http://localhost:5000/admin/add-product", {
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
      <form onSubmit={handlesubmit}>
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" />
          <label for="title">Img</label>
          <input type="text" name="imageUrl" id="imageUrl" />
          <label for="title">Title</label>
          <input type="text" name="description" id="description" />
          <label for="title">Title</label>
          <input type="text" name="price" id="price" />
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default PostData;
