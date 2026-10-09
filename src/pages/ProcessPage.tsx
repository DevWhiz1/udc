import PageHeader from '../components/layout/PageHeader';
import Process from '../components/home/Process';
import BeforeAfter from '../components/home/BeforeAfter';

export default function ProcessPage() {
  return (
    <>
      <PageHeader 
        title="Our Process" 
        subtitle="Transparent, efficient, and quality-driven construction methodology."
      />
      <Process />
      <BeforeAfter />
    </>
  );
}
