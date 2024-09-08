import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Best Work Examples</h2>
      <ProjectCard 
        title="ERP Integration" 
        description="Streamlined business operations with ERP systems, improving efficiency by 30%."
        link="https://github.com/your-repo" 
      />
      <ProjectCard 
        title="React Portfolio" 
        description="Built a dynamic portfolio using React, enabling smooth UI/UX and scalability."
        link="https://github.com/your-repo" 
      />
      <ProjectCard 
        title="Fashion Website with MySQL" 
        description="Developed a fashion e-commerce site with MySQL database integration."
        link="https://github.com/your-repo" 
      />
    </section>
  );
};

export default Projects;
