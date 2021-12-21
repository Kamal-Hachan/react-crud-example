import React, {Component} from 'react'
import {Link, withRauter} from 'react-router-dom'
import PropTypes from "prop-types";

class Example extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    //     let {id} = this.props.match.params;
    //     console.log(id)
    // }
    componentDidMount(){
        let id=this.props.metch.params
        console.log(id);
    }
      
    render() { 

        return ( <div>child</div> );
    }
}
 
export default Example;
