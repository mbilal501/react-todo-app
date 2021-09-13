import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Header from "./Header"
import TodosList from "./TodosList"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"
import { Route, Switch } from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"


const TodoContainer = () => {

  const getInitialTodos = () => {
    
    //getting todos item
    const temp = localStorage.getItem("todo")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
 }
  const [todos, setTodos] = useState(getInitialTodos())

  useEffect(() => {
    console.log("test run")

    //storing todos item

  const temp = JSON.stringify(todos)
        localStorage.setItem("todo", temp)
  }, [todos])




  const handleChange = (id) => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    )
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo
      })
    )
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id;
      })
    ])
  };

    return (
      // we can also write <React.Fragfment></React.Fragfment> as <> </>
      <>
      <NavBar/>
      <Switch>
      <Route exact path="/">
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
            setUpdate={setUpdate}
          />
        </div>
      </div>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="*">
        <NotMatch/>
      </Route>
      </Switch>
      </>
    )
}

export default TodoContainer