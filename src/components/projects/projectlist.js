import React from 'react';
import ProjectSummary from './projectsummary'
import { Link } from 'react-router-dom'
const Projectlist = ({projects}) => {
    return (
        <div className="project-list section">
        { projects && projects.map(project => {
            return (
                <Link to={'/project/' + project.id}>
                <ProjectSummary project={project} key={project.id}></ProjectSummary>
                </Link>
            )
        })}


        </div>

        
    )
}


export default Projectlist;