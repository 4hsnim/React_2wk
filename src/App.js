import React from 'react';
import Main from './Main';
import Add from './Add'
import styled from "styled-components";


import { Route } from "react-router-dom"


function App() {


  return (
    <div className="App">
      <Route path ="/" exact>
        <Wrap>
          <h1>MY DICTIONARY</h1>         
          <Main/>
        </Wrap>
      </Route>

      <Route path="/add/" exact>
        <Wrap>
          <h1>단어 추가하기</h1> 
          <Add/>

        </Wrap>
      </Route>
    </div>
  );
}

export default App;

const Wrap = styled.div`
  min-width: 30vw;
  max-width: 30vw;
  min-height: 95vh;
  background-color: #d9c8d8;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

`




