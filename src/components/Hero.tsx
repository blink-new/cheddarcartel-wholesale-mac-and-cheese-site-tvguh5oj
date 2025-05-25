import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 bg-cheddar-yellow relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black">
              Premium Wholesale <span className="text-cheddar-blue">Mac & Cheese</span> for UK Businesses
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800">
              Supply your hotel, restaurant, or retail business with the UK's finest wholesale mac & cheese. Made with the finest ingredients for consistent quality and exceptional taste.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-cheddar-blue hover:bg-cheddar-blue/90 text-white text-lg py-6 px-8 h-auto"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Wholesale Pricing
              </Button>
              
              <Button 
                variant="outline"
                className="border-cheddar-blue text-cheddar-blue hover:bg-cheddar-blue/10 text-lg py-6 px-8 h-auto"
                onClick={() => {
                  const productsSection = document.getElementById('products');
                  productsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Our Products
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Gourmet Mac & Cheese" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Fast UK Delivery</p>
                  <p className="text-sm text-gray-600">Next-day available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
};

export default Hero;