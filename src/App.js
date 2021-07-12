import React, { Component } from "react";
import Login from "./Login";
import Clock from "./Clock";
import TodoInput from "./TodoInput";
import Todo from "./Todo";

const USERNAME = "username";
const LOGINSTATE = "loginstate";
const TODOLIST = "todolist";
let todoList = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem(USERNAME),
      loginState: localStorage.getItem(LOGINSTATE),
    };

    if (localStorage.getItem(TODOLIST)) {
      todoList = JSON.parse(localStorage.getItem(TODOLIST));
    }
  }
  savedTodoList = () =>
    localStorage.setItem(TODOLIST, JSON.stringify(todoList));

  inputUpdate = (text) => {
    localStorage.setItem(USERNAME, text.target.value);
    this.setState({ name: localStorage.getItem(USERNAME) });
  };
  todoUpdate = (text) => {
    this.setState({ todoWrite: text.target.value });
  };

  loginClick = () => {
    localStorage.setItem(LOGINSTATE, true);
    this.setState({ loginState: localStorage.getItem(LOGINSTATE) });
  };

  loginPressEnter=(e)=>{
    if(e.key === "Enter"){
      this.loginClick();
    };
  }

  todoClick = () => {
    const writeObj = {
      id: Date.now(),
      todo: this.state.todoWrite,
    };

    todoList.push(writeObj);
    this.savedTodoList();
    this.setState({ todoWrite: "" });
  };

  todoPressEnter=(e)=>{
    if(e.key === "Enter"){
      this.todoClick();
    };
  }

  todoDelClick = (event) => {
    const li = event.target.parentElement;
    const delId = parseInt(li.id);
    li.remove();
    todoList = todoList.filter((item) => item.id !== delId);
    this.savedTodoList();
  };

  getTime = () => {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minu = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    const currentTime = `${hour}:${minu}:${sec}`;

    this.setState({ currentTime: currentTime });
  };

  printTime = () => {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  };

  getImg = () => {
    const imgSet = ["0.jpg", "1.jpg", "2.jpg"];
    const imgNumber = Math.floor(Math.random() * imgSet.length);
    this.setState({ img: imgSet[imgNumber] });
  };

  componentDidMount() {
    this.printTime();
    this.getImg();
  }

  render() {
    const { name, loginState, currentTime, img, todoWrite } =
      this.state;
    const { loginClick, inputUpdate, todoClick, todoUpdate, todoDelClick, loginPressEnter, todoPressEnter } =
      this;

    return (
      <div>
        {loginState ? (
          `hello ${name}`
        ) : (
          <Login click={loginClick} change={inputUpdate} enter={loginPressEnter} />
        )}
        {<Clock clock={currentTime} />}
        <TodoInput
          click={todoClick}
          input={todoWrite}
          change={todoUpdate}
          enter={todoPressEnter}
        />
        {todoList.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            todo={item.todo}
            click={todoDelClick}
          />
        ))}
        <img src={`img/${img}`} alt="" />
      </div>
    );
  }
}

export default App;
