import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useRef } from "react";
import { items } from "./constants/items";
import Home from "./Pages/Home";
function App() {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  return <>
  <Navbar refs={refs} items={items}/>
  <Home refs={refs}/>
  <Footer/>
  </>;
}

export default App;
