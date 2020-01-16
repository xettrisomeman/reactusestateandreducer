import React ,{useState,useEffect} from 'react'
import axios from 'axios';

const DataFetchingOne = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1/')
        .then(res=>{
            setLoading(false)
            console.log(res.data);
            setPost(res.data)
            setError('')
        })
        .catch(err=>{
            setLoading(false)
            setError('something went wrong')
            setPost({})
        })
        
    },[])
    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error:null}
        </div>
    )
}

export default DataFetchingOne;