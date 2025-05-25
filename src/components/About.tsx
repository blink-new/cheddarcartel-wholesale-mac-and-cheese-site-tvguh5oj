import { Award, Clock, Truck, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="text-primary" />,
      title: 'Premium Quality',
      description: 'Made with the finest British cheeses and ingredients, ensuring superior taste and quality.'
    },
    {
      icon: <Truck className="text-primary" />,
      title: 'Reliable Delivery',
      description: 'Nationwide delivery with temperature-controlled vehicles for consistent product quality.'
    },
    {
      icon: <Clock className="text-primary" />,
      title: 'Time-Saving',
      description: 'Ready to heat products that save your kitchen time without compromising on taste.'
    },
    {
      icon: <Users className="text-primary" />,
      title: 'Dedicated Support',
      description: 'Our team of food service experts provides personalized customer support.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Cheddar Cartel</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-sans">
            We're passionate about creating the finest wholesale mac & cheese products 
            for UK food service businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-gray-100 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 font-sans">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Our Kitchen" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 font-sans">
                <p>
                  Founded in 2018 by a team of passionate food service professionals, Cheddar Cartel was born out of a simple idea: 
                  to create premium, consistent mac & cheese products that restaurants and hotels could rely on.
                </p>
                <p>
                  We started in a small production kitchen in Manchester and quickly grew as our reputation for quality and service spread 
                  across the UK food service industry.
                </p>
                <p>
                  Today, we supply hundreds of businesses across the country, from boutique hotels to restaurant chains, 
                  all while maintaining our commitment to quality, taste, and exceptional service.
                </p>
                <p>
                  We source our ingredients from trusted British suppliers, supporting local farmers and businesses, and ensuring 
                  the highest standards for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;