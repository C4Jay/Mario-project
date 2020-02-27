import React,{ Component } from 'react';
import { createProject } from '../../store/actions/projectactions';
import { connect } from 'react-redux';

class Createproject extends Component {
    state = {
        topic: '',
        content: ''

    }

    handleChnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })
    }

    handlePost = (e) => {
        e.preventDefault();
    //    console.log(this.state)
        this.props.createProject(this.state)




    
    }


    render () {
        return (
            <div className="container">
            <form onSubmit={this.handlePost} className="white">
            <h5 className="grey-text text-darken-3" style={{ textAlign: 'center' }}>Create Project</h5>
            
            <div className="input-field">
            <label htmlFor="topic">Topic</label>
            <input type ="text" id="topic" onChange={this.handleChnge}></input>
            </div>

            <div className="input-field ">
            <label htmlFor="content">content</label>
            <textarea name="content" cols="30" row="10" id="content" className="materialize-textarea" onChange={this.handleChnge}></textarea>
            </div>

         
            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-1">create project</button>
                </div>
            
            </form>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null,mapDispatchToProps)(Createproject)