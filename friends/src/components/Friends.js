import  React, {useState, useEffect} from 'react';
// import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import axios from'axios'

export default function Friends(){

const [friends, setFriends] = useState([])

useEffect(()=>{
    const token = window.localStorage.getItem('token');
    axiosWithAuth()   
    .get('/api/friends')
    .then(res=>{
        console.log("I am the response from friends", res)
    })
    .catch(err=>console.log(err))
})

    return(
        <div>


        </div>
    )
}