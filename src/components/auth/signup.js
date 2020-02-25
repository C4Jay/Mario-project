import React,{ Component } from 'react';

class Signup extends Component {
    state = {
        mail: '',
        password: '',
        firstname: '',
        surname: ''

    }

    handleChnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })

    }

    handlePost = (e) => {
        e.preventDefault();
        console.log(this.state)

    
    }


    render () {
        return (
            <div className="container">
            <form onSubmit={this.handlePost} className="white">
            <h5 className="grey-text text-darken-3" style={{ textAlign: 'center' }}>SignUp</h5>
            
            <div className="input-field">
            <label htmlFor="firstname">first name</label>
            <input type ="text" id="firstname" onChange={this.handleChnge}></input>
            </div>

            <div className="input-field ">
            <label htmlFor="surname">surname</label>
            <input type ="text" id="surname" onChange={this.handleChnge}></input>
            </div>

            <div className="input-field">
            <label htmlFor="mail">mail</label>
            <input type ="email" id="mail" onChange={this.handleChnge}></input>
            </div>

            <div className="input-field">
            <label htmlFor="password">password</label>
            <input type ="password" id="password" onChange={this.handleChnge}></input>
            </div>

            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-1">sign up</button>
                </div>
            
            </form>
            </div>

        )
    }
}

export default Signup