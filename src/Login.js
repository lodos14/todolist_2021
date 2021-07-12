

function Login({ click,change, enter }) {
  return (
    <div>
      <input
        type="test"
        placeholder="이름을 입력하세요"
        required
        maxLength="15"
        onChange={change}
        onKeyPress={enter}
      />
      <button onClick={click}>Log In</button>
    </div>
  );
}

export default Login;
