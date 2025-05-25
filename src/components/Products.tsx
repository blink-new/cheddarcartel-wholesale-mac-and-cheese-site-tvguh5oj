import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Cheddar',
      description: 'Our signature classic cheddar mac & cheese made with premium aged cheddar.',
      image: 'https://images.unsplash.com/photo-1612152328957-e80d7280f3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      features: [
        'Premium aged cheddar',
        'Creamy texture',
        'Ready to heat',
        'Available in 5kg and 10kg catering trays'
      ]
    },
    {
      id: 2,
      name: 'Three Cheese Deluxe',
      description: 'A luxury blend of cheddar, parmesan, and red leicester for the ultimate cheese experience.',
      image: 'https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      features: [
        'Three premium British cheeses',
        'Rich and indulgent',
        'Ready to heat',
        'Available in 5kg and 10kg catering trays'
      ]
    },
    {
      id: 3,
      name: 'Truffle & Mushroom',
      description: 'Gourmet truffle-infused mac & cheese with wild mushrooms for a sophisticated offering.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      features: [
        'Black truffle infusion',
        'Wild mushroom medley',
        'Elegant and distinctive',
        'Available in 5kg gourmet trays'
      ]
    }
  ];

  return (
    <section 
      id="products" 
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Products</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-body">
            We offer a range of gourmet wholesale mac & cheese products perfect for 
            restaurants, hotels, and food service businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:scale-105"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4 font-body">{product.description}</p>
                <ul className="mb-6 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle 
                        size={18} 
                        className="mr-2 flex-shrink-0 mt-1 text-primary"
                      />
                      <span className="font-body text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-primary text-white"
                >
                  Request Sample
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Custom Formulations Available</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 font-body">
            Looking for a custom flavor or formulation? We can work with your chefs to create 
            the perfect mac & cheese for your menu.
          </p>
          <Button 
            className="bg-primary text-white text-lg px-8 py-6 h-auto"
          >
            Discuss Custom Options
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;