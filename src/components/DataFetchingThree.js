import React , {useEffect , useReducer} from 'react'
import axios from 'axios';

const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILED = "FETCH_FAILED";


const initialState= {
    data:[],
    isFetched : false
}

const reducer = (state,action) =>{
    switch(action.type){
        case FETCH_SUCCESS:
            return {
                data:action.payload,
                isFetched:true
            }
        case FETCH_FAILED:
            return {
                data:[],
                isFetched:false
            }
        default:
            return state
    }
}

const DataFetchingThree = ()=>{

    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            dispatch({type:FETCH_SUCCESS ,payload:response.data})
        })
        .catch(error=>{
            dispatch({type:FETCH_FAILED})
        })
    },[])
    return (
        <div>
            {state.isFetched ?<p>{state.data.map(d=>{
                return (
                    <li key={d.id}>{d.title}</li>
                )})}</p>
                :
                'loading'
                }
        </div>
    )
}

export default DataFetchingThree;