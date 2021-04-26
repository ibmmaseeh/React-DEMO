import { useState } from "react";
import axios from "axios";
import { Userlist } from "../userlist/Userlist";



function Userform(){    //component,controller
    const [userform,setUserform]=useState({//useState-hook-predefined function
        name:'Ram',
        mobileNumber:1
    })
    const save=function (){
        console.log(userform.name,userform.mobileNumber);
        axios   //fetch
        .post('http://localhost:8080/user',userform)
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    };
    return(//view   //JSX
        <div>
            <input value={userform.name} name='name' onChange={updateState}></input>
            <input value={userform.mobileNumber} name='mobileNumber' onChange={updateState} placeholder='Age'></input>
            <button onClick={save}>Save</button>
            <Userlist></Userlist>
        </div>
    
    )
  
    function updateState(event){
        
           const current= {...userform,
            [event.target.name]:event.target.value};
            
            console.log(current);
        setUserform(current);
    
    }
}

export default Userform;