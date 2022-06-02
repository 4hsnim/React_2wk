import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button'

import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {db} from "./firebase"
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";
import { CreateDictionary,LoadDictionaryFB } from "./redux/modules/dict"


const Main = (props) => { 
    const data = useSelector((state) => state.dict.list) //state는 스토어에서 가지고오는 전체 데이터를 의미
    const history = useHistory()
    const dispatch = useDispatch()
    
    console.log(useSelector((state => state)))
    

    React.useEffect(() => {
        dispatch(LoadDictionaryFB())  
    },[])

    // useEffect에서 썻던 코드들.
    // console.log(db)
        
    //     collection(db,"dict")
    //     addDoc(collection(db,"dict"),{text: "잘되나 확인해보자!"})

    //     //가져오는거
    //     const query = await getDocs(collection(db,"dict"))
    //     console.log(query)
    //     query.forEach((doc)=> {
    //         console.log(doc.id, doc.data())
    //     })
    return (
        <div>        
            {data.map((list,index) => {
                return (
                    <WordList>
                        <h3>단어</h3>
                        <p>{list.word}</p>

                        <h3>설명</h3>
                        <p>{list.explanation}</p>

                        <h3>예시</h3>
                        <p style={{
                            color: "blue",
                            fontWeight: "bold"
                        }}>{list.example}</p>
                    </WordList>
                    )
            })}
   

        <Button variant="contained"
        onClick={() => {
            history.push("/add/");
        }}
        style={{
            margin:"20px",
    
        }}>단어 추가하기</Button>

        <Button variant="contained"
        onClick={()=>{
            window.scrollTo(0,0)
        }}
        style={{
            margin:"20px",
    
        }}>위로 올라가기</Button>
        

        </div>
        
    )
}

export default Main

const WordList = styled.div`
width: 400px;
  min-width:250px;
  max-width: 400px;
  max-height: 250px;
  min-height: 200px;
  background-color: white;
  border-radius: 5px;
  padding-left: 20px;
  margin: 20px;
  
`
