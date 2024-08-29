import React from  "react";
import ReactDOM from "react-dom";
import Header from "./components/header";


var rootReact = ReactDOM.createRoot(document.getElementById("ROOT"));

function ElementCreation(){
    return(
    <div>
        <h1>created an element</h1>
        <Header/>
    </div>
    )
}

rootReact.render(<ElementCreation/>);