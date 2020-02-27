import React,{ Component } from 'react';

class Signin extends Component {
    state = {
        mail: '',
        password: ''

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
            <h5 className="grey-text text-darken-3" style={{ textAlign: 'center', color: 'blue' }}>SignIn</h5>
            <div className="input-field">
            <label htmlFor="mail">mail</label>
            <input type ="email" id="mail" onChange={this.handleChnge}></input>
            </div>

            <div className="input-field">
            <label htmlFor="password">password</label>
            <input type ="password" id="password" onChange={this.handleChnge}></input>
            </div>

            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-1">log in</button>
                </div>
            
            </form>
            </div>

        )
    }
}

export default Signin