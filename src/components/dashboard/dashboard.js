import React, { Component } from 'react';
import Notifications from './notifications';
import Projectlist from '../projects/projectlist';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
class Dashboard extends Component {
    render () {
        console.log(this.props)
        const { projects } = this.props
        return (
            <div className="dashboard container">
            <div className="row">
            <div className="col s12 m6">
            <Projectlist projects={projects}></Projectlist>
            </div>
            <div className="col s12 m5 offset-m1">
            <Notifications>
            </Notifications>
            </div>
            
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
 connect(mapStateToProps),
 firestoreConnect([
      { collection: 'projects' }
 ])   
)(Dashboard)