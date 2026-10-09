import PageHeader from '../components/layout/PageHeader';
import Blog from '../components/home/Blog';

export default function BlogPage() {
  return (
    <>
      <PageHeader 
        title="From The Journal" 
        subtitle="Insights, ideas, and guides for building in Pakistan."
      />
      <Blog />
    </>
  );
}
