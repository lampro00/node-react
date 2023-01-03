import logo from "./logo.svg";
import "./App.css";
import GetData from "./compoment/shop";
import PostData from "./compoment/product";
import { Route, Redirect, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="main-header">
          <nav className="main-header__nav">
            <ul className="main-header__item-list">
              <li className="main-header__item">
                <a href="/">shop</a>
              </li>
              <li className="main-header__item">
                <a href="/admin/add-product">Addproduct</a>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <Routes>
            <Route exact path="/" element={<GetData />} />
            <Route exact path="/admin/add-product" element={<PostData />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
