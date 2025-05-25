const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1633504495163-a96c73de63ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="CheddarCartel facility" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">About CheddarCartel</h2>
            <p className="text-black/70 mb-4">
              Founded in 2018, CheddarCartel has rapidly become the UK's premier wholesale supplier of 
              gourmet Mac &amp; Cheese products to the hospitality industry.
            </p>
            <p className="text-black/70 mb-4">
              Our mission is simple: to provide restaurants, hotels, and catering services with 
              consistently exceptional Mac &amp; Cheese products that will delight their customers and 
              simplify their operations.
            </p>
            <p className="text-black/70 mb-6">
              Using traditional recipes with modern innovation, we've perfected our Mac &amp; Cheese 
              formulations to deliver the perfect balance of flavor, texture, and visual appeal that 
              keeps customers coming back for more.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-cheddar-yellow/20 p-4 rounded-lg text-center">
                <h4 className="font-bold text-2xl mb-1">200+</h4>
                <p className="text-black/70">Business Clients</p>
              </div>
              <div className="bg-cheddar-yellow/20 p-4 rounded-lg text-center">
                <h4 className="font-bold text-2xl mb-1">5</h4>
                <p className="text-black/70">Product Varieties</p>
              </div>
              <div className="bg-cheddar-yellow/20 p-4 rounded-lg text-center">
                <h4 className="font-bold text-2xl mb-1">98%</h4>
                <p className="text-black/70">Client Retention</p>
              </div>
              <div className="bg-cheddar-yellow/20 p-4 rounded-lg text-center">
                <h4 className="font-bold text-2xl mb-1">UK-wide</h4>
                <p className="text-black/70">Distribution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;