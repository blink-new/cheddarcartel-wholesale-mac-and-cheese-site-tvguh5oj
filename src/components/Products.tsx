import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Classic Mac & Cheese",
      description: "Our signature recipe with premium aged cheddar and a perfect creamy sauce. Available in bulk for commercial kitchens.",
      image: "https://images.unsplash.com/photo-1612152328178-4a6c43c8fd0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["High-quality cheddar", "Ready to heat", "Consistent results", "12-month shelf life"]
    },
    {
      id: 2,
      name: "Luxury Truffle Mac & Cheese",
      description: "Elevate your menu with our premium truffle-infused mac & cheese. Perfect for high-end restaurants and gourmet menus.",
      image: "https://images.unsplash.com/photo-1633436375153-d7045cb93e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["Black truffle infused", "Premium ingredients", "Vacuum sealed", "Award-winning recipe"]
    },
    {
      id: 3,
      name: "Spicy Jalapeño Mac & Cheese",
      description: "Add some heat to your menu with our spicy jalapeño blend. Popular choice for casual dining and pub menus.",
      image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["Medium spice level", "Real jalapeño pieces", "Customer favorite", "Versatile side dish"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Wholesale Products</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We supply the finest quality mac & cheese in bulk quantities for hotels, restaurants, and food service businesses across the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-none shadow-md hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-sm text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="mr-2 text-cheddar-blue">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-cheddar-blue hover:bg-cheddar-blue/90 text-white"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request Wholesale Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Custom Solutions Available</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Need a custom mac & cheese recipe for your business? We offer bespoke recipe development and white-label solutions.
          </p>
          <Button 
            className="bg-cheddar-blue hover:bg-cheddar-blue/90 text-white text-lg py-6 px-8 h-auto"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Discuss Custom Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;