import PageHeader from '../components/layout/PageHeader';
import About from '../components/home/About';
import Leadership from '../components/home/Leadership';
import WhyUrban from '../components/home/WhyUrban';

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Urban" 
        subtitle="Building spaces that define the way you live."
      />
      <About />
      <WhyUrban />
      <Leadership />
    </>
  );
}
