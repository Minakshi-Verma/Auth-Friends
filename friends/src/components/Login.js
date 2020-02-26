import  React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import{useHistory} from 'react-router-dom';

// import Loader from 'react-loader-spinner';


export default function Login(props){
    const [creds, setCreds] = useState ({
        username: "",
        password: ""
    })

 
let history = useHistory()
console.log(history)

//onChange function
const handleChanges =(e)=> {
setCreds({...creds,[e.target.name]: e.target.value})
}



//handleSubmit function
     const handleSubmit = (e) => {
         e.preventDefault()
        axiosWithAuth()      
        .post("/api/login", creds)
        .then(res=>{
        console.log("I am the response from login", res)
       window.localStorage.setItem('token', res.data.payload);
       props.history.push('/protected')
        })
        .catch(err=>console.log(err))         
     }    


    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <input 
                    type ="text"
                    name = "username"
                    placeholder ="username"
                    value= {creds.username}
                    onChange = {handleChanges}
                    />
                </div>
                <div>
                    <input 
                    type ="password"
                    name = "password"
                    placeholder ="password"
                    value= {creds.password}
                    onChange = {handleChanges}
                    />
                </div>
                <button type = "submit">Login</button>                
            </form>


        </div>
    )
}