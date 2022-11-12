import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/CartData";

function App() {

  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
   
    </div>

  );
}

export default App;
