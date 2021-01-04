import React from 'react';

import ProjectCard from './ProjectCard';
import { ProjectsData } from '../../constants/ProjectConstants';

import './ProjectBlock.scss';

const ProjectsBlock = () => {

    return (
        <div className='card-wrapper-outer'>
            <h3> Projects </h3>
            {
                ProjectsData.map(project => <ProjectCard project={project} key={project.id} />)
            }

            <button className='btn view-all-btn'> View All Projects</button>
        </div>
    )
}

export default ProjectsBlock
