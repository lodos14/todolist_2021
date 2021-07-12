function TodoInput({ click, input, change, enter }) {
  return (
    <div>
      <input
        type="text"
        placeholder="todo"
        onChange={change}
        value={input || ""}
        onKeyPress={enter}
      />
      <button onClick={click}>입력</button>
    </div>
  );
}

export default TodoInput;
