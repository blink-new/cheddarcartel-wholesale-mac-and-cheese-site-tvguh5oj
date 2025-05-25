import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cheddar-yellow">CheddarCartel</h3>
            <p className="text-gray-300 mb-4">
              Premium wholesale Mac &amp; Cheese supplier for UK businesses, delivering quality and consistency for your customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cheddar-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cheddar-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cheddar-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cheddar-yellow transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-cheddar-yellow transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-cheddar-yellow transition-colors">Products</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-cheddar-yellow transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-cheddar-yellow transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-300 hover:text-cheddar-yellow transition-colors">Classic Mac &amp; Cheese</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-cheddar-yellow transition-colors">Truffle Mac &amp; Cheese</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-cheddar-yellow transition-colors">Smoky Bacon Mac &amp; Cheese</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-cheddar-yellow transition-colors">Wholesale Pricing</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-cheddar-yellow flex-shrink-0" />
                <span className="text-gray-300">123 Cheese Lane, London, UK W1 8XX</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-cheddar-yellow flex-shrink-0" />
                <span className="text-gray-300">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-cheddar-yellow flex-shrink-0" />
                <span className="text-gray-300">info@cheddarcartel.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} CheddarCartel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;