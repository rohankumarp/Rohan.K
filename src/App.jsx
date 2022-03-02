import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Skills from "./components/skills/Skills"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {

  const [menuopen,setmenuopen]= useState(false)

  return (
    <div className="app">
      <Topbar open={menuopen} setopen={setmenuopen}/>
      <Menu open={menuopen} setopen={setmenuopen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Skills/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
