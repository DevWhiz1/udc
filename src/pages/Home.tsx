import Hero from '../components/home/Hero';
import CompanyIntro from '../components/home/CompanyIntro';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Services from '../components/home/Services';
import WhyUrban from '../components/home/WhyUrban';
import Leadership from '../components/home/Leadership';
import Process from '../components/home/Process';
import ProjectVisualTour from '../components/home/ProjectVisualTour';
import BeforeAfter from '../components/home/BeforeAfter';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Blog from '../components/home/Blog';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <FeaturedProjects />
      <Services />
      <WhyUrban />
      <Leadership />
      <Process />
      <ProjectVisualTour />
      <BeforeAfter />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
