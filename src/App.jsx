import React from "react"
import "./App.css"
import TodoList from "./components/TodoList"

export default function app() {
    return (
        <div className="todo-app">
            <TodoList />
        </div>
    )
}