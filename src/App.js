import React,{useState} from "react";
import Accordion from "./components/Accordion";
import SearchList from "./components/Search"
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Headers from "./components/Headers";

function App() {

  const items=[
    {
    name:"red",
    ages:19
    },
    {
      name:"yellow",
      ages:24
    },
    {
      name:"green",
      ages:24
    }

  ];

  const[stae,sets]=useState(items[0])
  return (
    <div>
      <Headers/>
      <Route path="/">
        <Accordion item={items}/>
      </Route>
      <Route path="/searchlist">
        <SearchList/>
      </Route>
      <Route path="/dropdown">
        <DropDown label="choose a color" item={items} stae={stae} sets={sets}/>
      </Route>
      <Route path="/translate">
        <Translate/>
      </Route>
    </div>
  );
}

export default App;
