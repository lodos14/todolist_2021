function Todo({ todo, click, id }) {
  return (
    <div>
      <li id ={id}>
        {todo} <button onClick={click}>X</button>
      </li>
    </div>
  );
}

export default Todo;
