import React, { useEffect, useLayoutEffect, useState } from "react";
import "./product.css";
function GetData(d) {
  const [Data1, Getdata1] = useState([]);
  useEffect(() => {
    async function fetchuser() {
      const url = "http://localhost:5000";
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      Getdata1(responseJson);
    }
    fetchuser();
  }, []);
  console.log(Data1);

  var a = Data1.map((value) => {
    return (
      <article className=" card product-item">
        <header className=" card__header">
          <h1 className=" product__title"> {value.title}</h1>
          <div className="card__image">
            <img src={value.imageUrl} />
            <div className="card__content">
              <h2 className="product__price">{value.price}</h2>
              <p>{value.description}</p>
              <div className="card__actions">
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </header>
      </article>
    );
  });

  return <main>{a}</main>;
}

export default GetData;
