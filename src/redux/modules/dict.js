// dict.js
import {db} from "../../firebase"
import { collection, doc, getDoc, getDocs, addDoc,updateDoc,deleteDoc } from "firebase/firestore";
import { async } from "@firebase/util";
// Actions
const LOAD = 'dict/LOAD'; 
const CREATE = 'dict/CREATE';//'프로젝트이름/모듈명/액션'
const UPDATE = 'dict/widgets/UPDATE';
const REMOVE = 'dict/widgets/REMOVE';

const initialState = {
    list:[],
}

// Action Creators
export const LoadDictionary = (dict_list) =>{
    return {type: LOAD,dict_list}
}
export const CreateDictionary = (word, explanation, example) => {
    return {type: CREATE, word, explanation, example}
    }


// middlewares
export const LoadDictionaryFB= () => {
    return async (dispatch) => {
        const dict_data = await getDocs(collection(db,"dict"))
        console.log(dict_data)

        let dict_list =[]
        dict_data.forEach((b)=> {
            dict_list.push({...b.data()})
        })
        dispatch(LoadDictionary(dict_list))
    }
}

export const AddDictFB = (dict) => {
    return async (dispatch) => {
        const docRef = await addDoc(collection(db,"dict"),dict)
        const _dict = await getDoc(docRef)
        const dict_data = {..._dict.data()}
        console.log(docRef)
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:{
            return {list:action.dict_list}
        }
        case CREATE : {
            const new_dictionary_list =
                 [...state.list, 
                {Word:action.word, 
                Explanation:action.explanation,
                Example:action.example}]
            console.log(new_dictionary_list)
            return {list:new_dictionary_list}
        }
    default: return state;
    }
    }

