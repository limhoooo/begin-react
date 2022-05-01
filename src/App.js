import React from "react";
import Hello from "./Hello";
import Wrapper from "./wrapper";
import Counter from "./Counter";
function App() {

  const name = 'reac111t';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <div className="App">
      <Wrapper>
        <Hello name={name} color="red" isSpecial />
        <Hello color="red" />
      </Wrapper>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      <Counter />
    </div>
  );
}

export default App;
