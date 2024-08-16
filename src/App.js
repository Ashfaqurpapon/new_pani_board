import Nav from "./components/Nav/Nav";

import logo from "./logo.svg";
import "./App.css";
import SideBar from "./myLayout/SideBar";
import Slideshow from "./components/Slideshow/Slideshow";
import NoticeBoard from "./components/NoticeBoard/NoticeBoard";
import Dropdown from "./components/Dropdown/Dropdown";
import ShorboShes from "./components/ShorboShes/ShorboShes";
import SlidingTextWithButto from "./components/SlidingTextWithButto/SlidingTextWithButto";

function App() {
  return (
    <div className="App">
      <Nav />
      <Slideshow />
      <Dropdown />
      <div className="shop_container">
        <div>
          <NoticeBoard />
          <ShorboShes />
          <SlidingTextWithButto />
        </div>
        <SideBar></SideBar>
      </div>
    </div>
  );
}

export default App;
