import  React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Friend } from './Friend';
import {Form} from './Form';
import Loader from 'react-loader-spinner';

export default function Friends(props){

const [friends, setFriends] = useState([])

    useEffect(()=>{
        const token = window.localStorage.getItem('token');
        axiosWithAuth()   
        .get('/api/friends')
        .then(res=>{
        console.log("I am the response from friends", res)
        setFriends(res.data)
        // window.localStorage.setItem('token', res.data.payload);
        })
        .catch(err=>console.log(err))
    }, [])

    const addFriend = (person) => {
        setFriends([...friends, person])
        axiosWithAuth()      
        .post("/api/friends", person)
        .then(res=>{
        console.log("I am the response from Form", res)
        //  window.localStorage.setItem('token', res.data.payload);
        //  props.history.push('./protected')
        })
        .catch(err=>console.log(err))         
        }

        const logout = (e)=>{
        e.preventDefault()        
        window.localStorage.removeItem('token'); 
        props.history.push('/login')    
   
        }       
            

    return(

        <div>
            <button type = "submit"onClick = {logout}>Log out</button>
            <div className="friends">

                {props.fetchingData && (
                    <div className="key spinner">
                        <Loader type="Puff" color="#204963" height="60" width="60" />
                        <p>Loading Data</p>
                    </div>
                )}        


                {
                    friends.map((friend,id)=>(
                        <Friend key = {friend.id} friend = {friend} />
                    ))
                }

                <Form addFriend = {addFriend}/>
                

            </div>
        </div>
    )
}