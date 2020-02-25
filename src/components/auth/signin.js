import React,{ Component } from 'react';

class Signin extends Component {
    state = {

    }

    handleChnge = (e) => {
        console.log(e)

    }

    handlePost = (e) => {
        console.log(e)

    }


    render () {
        return (
            <div className="container">
            <form onSubmit={this.handlePost} className="white">
            <h5 className="grey-text text-darken-3" style={{ textAlign: 'center' }}>SignIn</h5>
            <div className="input-field">
            <label htmlFor="mail"></label>
            <input type ="email" id="email" onChange={this.handleChnge}></input>
            </div>

            <div className="input-field">
            <label htmlFor="password"></label>
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