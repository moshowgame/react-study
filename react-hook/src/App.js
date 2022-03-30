import React, { useState, useEffect } from "react";

import "./App.css";
import Counter from "./Counter";
import CounterOld from "./CounterOld";

function App() {

  return (
    <div className='App'>
      <h1>React Hook Study</h1>
      <Counter/>
      <CounterOld/>
      <h6>by zhengkai.blog.csdn.net</h6>
    </div>
  );
}

export default App;