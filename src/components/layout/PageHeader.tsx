interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  image = "https://images.unsplash.com/photo-1541881451213-9799292db200?auto=format&fit=crop&q=80&w=2000" 
}: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-charcoal-dark flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark to-charcoal-dark/50" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-white mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
