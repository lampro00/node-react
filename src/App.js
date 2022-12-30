import logo from "./logo.svg";
import "./App.css";
import GetData from "./uess";
import PostData from "./admin";
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
                <a href="/">user</a>
              </li>
              <li className="main-header__item">
                <a href="/adduser">adduser</a>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <Routes>
            <Route exact path="/" element={<GetData />} />
            <Route exact path="/adduser" element={<PostData />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
