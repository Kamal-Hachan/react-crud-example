import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';


export const getUser= async (userId)=> {
    return(axios.get('/user/'+userId,{
        headers: {
          'Access-Control-Allow-Origin': true
        }})); 
}
export const putUser = async (userId,user)=>{
    axios.put('/updateUser/'+userId, user,{
                headers: {
                "content-type": "application/json",
                }
                  
        }).then(res=>{ }
            )
}

const UpdateUser =  ()=>{
    
    const params = useParams();
    const userId=params.id
    
    var user={name:'', address:''}
    
     const [updatedUser,setUpdateUser]=useState({id:'',name:'',address:''},[])
  
    useEffect(()=>{
        getUser(userId).then(response=>{user=response.data
            setUpdateUser(user)
            // console.log("kkkkk")
            // console.log(user)
        })
    },[])
    
    function inputNameHandler(event) {
        user.name=event.target.value
        // console.log(userName)
    }
    function inputAddressHandler(event) {
        user.address=event.target.value
    }
    const updateUser = e=>{
       putUser(userId,user)
        }
        
    // console.log("hu")
    return(
        <div><div className = "container">
        <br/>
        <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Update User</h3>
                <div className = "card-body">
                    <form>
                        <div className = "form-group">
                            <label>Name: </label>
                            <input  name="name" placeholder={updatedUser.name}  className="form-control" onChange={inputNameHandler} />
                        </div>
                        <div className = "form-group">
                            <label> Address: </label>
                            <input placeholder={updatedUser.address} name="address" className="form-control" onChange={inputAddressHandler} />
                        </div>
                        
                        <br/>
                        <button className="btn btn-success" onClick={updateUser}>Save</button>
                        <Link to='/'><button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button></Link>
                    </form>
                </div>
            </div>
        </div>

   </div></div>
    )
}
  
export default UpdateUser;