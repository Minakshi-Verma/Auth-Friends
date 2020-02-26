import React, {useState} from 'react';


export const Form = ({addFriend}) => {
    
const [friend, setFriend] = useState({
    id:"",
    name:"",
    age:"",
    email:""
})

//handleChange function
const handleChanges = (e) => {
    setFriend({...friend,[e.target.name]: e.target.value}) 
}

//handleSubmit function
const handleSubmit = (e) => {
    e.preventDefault()
    addFriend(friend)   
    setFriend({
        id:"",
        name:"",
        age:"",
        email:""})
      
}

    return(
        <div>
            <form onSubmit = {handleSubmit}>

                <div>
                    <input 
                    type ="text"
                    name = "id"
                    placeholder ="id"
                    value= {friend.id}
                    onChange = {handleChanges}
                    />
                </div>
                <div>
                    <input 
                    type ="text"
                    name = "name"
                    placeholder ="name"
                    value= {friend.name}
                    onChange = {handleChanges}
                    />
                </div>
                <div>
                    <input 
                    type ="text"
                    name = "age"
                    placeholder ="age"
                    value= {friend.age}
                    onChange = {handleChanges}
                    />
                </div>
                <div>
                    <input 
                    type ="email"
                    name = "email"
                    placeholder ="email"
                    value= {friend.email}
                    onChange = {handleChanges}
                    />
                </div>
            <button type = "submit">Add friend</button>

            </form>

        </div>
    )
}