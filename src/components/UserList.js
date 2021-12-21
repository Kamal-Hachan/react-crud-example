import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
class UserList extends Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
        this.deleteUser=this.deleteUser.bind(this)
    }
    
    componentDidMount(){
        axios.get('/users',{
            headers: {
              'Access-Control-Allow-Origin': true
            }})
        .then(response=>{
            this.setState({users:response.data})
            // console.log(this.state.users)
        })
    }
    deleteUser(id){
        axios.delete("removeUser/" + id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)
            })
            // console.log("deletesd")
        })  
    }
    render(){
       return (
       <div>
        <h2 className="text-center">User List</h2><br/><br/>
        <div className = "row">
        <Link to="/add-user" className='float-left'><button className="btn btn-primary"> Add User</button> </Link>
        </div>
        <br></br>
        <div className = "row">
               <table className = "table table-striped table-bordered">

                   <thead>
                       <tr>
                           <th> Name</th>
                           <th> Address</th>
                           <th> Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.users.map(
                               user => 
                               <tr key = {user.id}>
                                    <td> { user.name} </td>   
                                    <td> {user.address}</td>
                                    
                                    <td>
                                        <Link to={{pathname:'/update-user/'+user.id, state:"data from user"}} ><button  className="btn btn-info">Update </button></Link>
                                        {/* <Link to={{pathname:'/example/'+user.id, state:"data from user"}} ><button  className="btn btn-info">Example </button></Link> */}
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                    </td>
                               </tr>
                           )
                       }
                   </tbody>
               </table>

        </div>

   </div>
   )
    }
}
export default UserList;