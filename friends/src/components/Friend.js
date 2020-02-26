import React from 'react';

export const Friend = ({friend}) => {

    return(
        <div className ="friend">
            <h3>id: {friend.id}</h3>
            <h3>name: {friend.name}</h3>
            <h3>age: {friend.age}</h3>
            <h3>email: {friend.email}</h3>           
          
        </div>
    )
}


