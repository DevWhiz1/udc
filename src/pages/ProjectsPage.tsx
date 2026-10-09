import PageHeader from '../components/layout/PageHeader';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ProjectVisualTour from '../components/home/ProjectVisualTour';

export default function ProjectsPage() {
  return (
    <>
      <PageHeader 
        title="Our Projects" 
        subtitle="Explore our portfolio of residential and commercial developments."
      />
      <FeaturedProjects />
      <ProjectVisualTour />
    </>
  );
}
