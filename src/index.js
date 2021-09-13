import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

//component file
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css"

//const element = <h1>Hello from create React App</h1>

ReactDom.render(
       <React.StrictMode>
       <Router>
        <TodoContainer/>
        </Router>
       </React.StrictMode>,
     document.getElementById("root")
     )