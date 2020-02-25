import  React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
// import e from 'express';

export default function Login(){
    const [form, setForm] = useState ({
        username: "",
        password: ""
    })

//onChange function
const handleChanges =(e)=> {
setForm({...form,[e.target.name]: e.target.value})
}



//handleSubmit function
     const handleSubmit = (e) => {
         e.preventDefault()
        axiosWithAuth()
        .post("/api/login", form)
        .then(res=>{
        console.log("I am the response from login", res)
        })
        .catch(err=>console.log(err))         
     }
     
// {username, password} = form
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <input 
                    type ="text"
                    name = "username"
                    placeholder ="username"
                    value= {form.username}
                    onChange = {handleChanges}
                    />
                </div>
                <div>
                    <input 
                    type ="password"
                    name = "password"
                    placeholder ="password"
                    value= {form.password}
                    onChange = {handleChanges}
                    />
                </div>
                <button>Login</button>
            </form>


        </div>
    )
}