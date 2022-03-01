import React, { Component } from 'react';

class Formvalidation extends Component {
    constructor(){
        super()
        this.state ={
            fname: "",
            lname: "",
            email: "",
            phone: "",
        }
    }
    
    OnchangeHandler = (event) => {
        //var newname = event.target.value;
        var inputName = event.target.name;
        var inputvalue = event.target.value;
        this.setState({[inputName]: inputvalue})

        if(inputName === 'fname'){
            var namepattern = /^([a-zA-Z]){2,30}$/;
            if(!namepattern.test(inputvalue)){
                this.setState({fname: "First Name Is Not Valid"})
            }
        }else if(inputName === 'lname'){
            var lnamepattern = /^([a-zA-Z]){2,30}$/;
            if(!lnamepattern.test(inputvalue)){
                this.setState({lname: "First Name Is Not Valid"})
            }
        
        }else if(inputName === 'email'){
            var Emailpattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
            if(!Emailpattern.test(inputvalue)){
                this.setState({email: "Email Is Not Valid"})
            }
        
        }else if(inputName === 'phone'){
            if(! Number(inputvalue)){
                this.setState({phone: "Phone Is Not Valid"})
            }
        }
    };
    render() {
        return (
            <div>
               
            <form>
            <table>
                <tr>
                    <td>First Name: </td>
                    <td>{this.state.fname}</td>
                </tr>
                <tr>
                    <td>Last Name: </td>
                    <td>{this.state.lname}</td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td>{this.state.email}</td>
                </tr>
                <tr>
                    <td>Phone: </td>
                    <td>{this.state.phone}</td>
                </tr>
            </table>
            <h2>Sign Up Form</h2>
            <input onChange={this.OnchangeHandler} type="text" class="form-control" name="fname" id=""  placeholder="First name"></input><br></br>
           
            <input onChange={this.OnchangeHandler} type="text" class="form-control" name="lname" id=""  placeholder="Last name"></input><br></br>
           
            <input onChange={this.OnchangeHandler} type="email" class="form-control" name="email" id=""  placeholder="Email"></input><br></br>
          
            <input onChange={this.OnchangeHandler} type="text" class="form-control" name="phone" id=""  placeholder="Phone Number"></input><br></br>
            <label>Course</label><br></br>
            <select>     
                <option value="PHP">PHP</option>
                <option value="JQuery">JQuery</option>
                <option value="Laravel">Laravel</option>
                <option value="Wordpress">Wordpress</option>
            </select>
            <br></br>
            <input type="submit" class="form-control" name="submit" value="submit" ></input><br></br>
            </form>
        </div>
        );
    }
}

export default Formvalidation;