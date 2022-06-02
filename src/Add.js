import React from "react";
import styled from "styled-components";
import {CreateDictionary,AddDictFB} from "./redux/modules/dict"

import {useDispatch} from "react-redux"
import { useRef } from 'react';
import { useHistory } from "react-router-dom";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";

const Add = (props) => {
    const history = useHistory()
    const word = useRef(null)
    const explanation = useRef(null)
    const example = useRef(null)

    // console.log(word.current.value)

    const dispatch = useDispatch()
    const addDictionaryList = () =>{
        
        // dispatch(CreateDictionary(
        //     word.current.value, explanation.current.value, example.current.value
        //     ))
        // history.goBack()
        dispatch(AddDictFB({ word: word.current.value, explanation:explanation.current.value, example:example.current.value}))
        history.goBack()
    }

    return (
        <div>
            <AddContent>
                <h3>단어</h3>
                <Input ref={word}/>                
            </AddContent>
        
            <AddContent>
                <h3>설명</h3>
                <Input ref={explanation}/>               
            </AddContent>

            <AddContent>
                <h3>예시</h3>
                <Input ref={example}/>              
            </AddContent>

            <Button onClick={addDictionaryList}>
                추가하기
            </Button>
        </div>
        

    )
}

export default Add

const AddContent = styled.div`
  max-width: 400px;
  min-height: 100px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
`

const Input = styled.input`
width: 380px;
height: 60px;
`

const Button = styled.button`
  background-color: #39154a;
  color: white;
  font-weight:bold;
  font-size: large;
  width: 250px;
  height: 50px;
  margin-top: 50px;
  margin-left: 150px;

`