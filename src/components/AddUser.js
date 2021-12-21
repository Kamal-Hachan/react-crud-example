import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class AddUser extends Component {
    constructor() {
        super();
        this.state = { 
            name:'',
            address:''
         }
    }
    changeHandler = e=>{
           
            if(e.target.name==='userName'){
                this.setState({name:e.target.value})
            }
            else{
                this.setState({address:e.target.value})
            }
    }
    addUser = e=>{
        // const user = {name:this.state.name, address: this.state.address}
        axios.post(
            '/addUser', this.state).then(res=>this.props.history.push('/')
            )

//         var bodyFormData = new FormData();
//         bodyFormData.append({'name':this.state.name})
//         bodyFormData.append({'address':this.state.address})
//         axios({
//            method: "post",
//            url: "/addUser",
//            data: bodyFormData,
//            headers: { "Content-Type": "multipart/form-data" },
//         })
    }
    render() { 
        
            return (
                <div>
                    <br></br>
                       <div className = "container">
                            <div className = "row">
                                <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add User</h3>
                                    <div className = "card-body">
                                        <form>
                                            <div className = "form-group">
                                                <label > Name: </label>
                                                <input placeholder="Nmae" name="userName" className="form-control" id="name"
                                                    value={this.state.userName} onChange={this.changeHandler}/>
                                            </div>
                                            <br/>
                                            <div className = "form-group">
                                                <label for='address'> Address </label>
                                                <input placeholder="Address" name="address" className="form-control" id="address" 
                                                    value={this.state.address} onChange={this.changeHandler}/>
                                            </div>
                                            <br/>
                                            <br/>
                                            
    
                                            <button className="btn btn-success" onClick={this.addUser}>Save</button>
                                            <Link to='/'><button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button></Link>
                                            <Link to='/'><button className="btn btn-danger"  style={{marginLeft: "10px"}}>User List</button></Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
    
                       </div>
                </div>
             )
            
        }
}
 
export default AddUser;
