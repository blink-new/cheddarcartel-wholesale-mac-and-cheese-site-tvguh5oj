import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cheddar-yellow text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.svg" alt="CheddarCartel" className="h-12 mb-4" />
            <p className="text-black/80 font-sans">
              Premium wholesale mac & cheese solutions for UK businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="text-cheddar-blue hover:text-cheddar-blue/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-cheddar-blue hover:text-cheddar-blue/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-cheddar-blue hover:text-cheddar-blue/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-cheddar-blue hover:text-cheddar-blue/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black/80 hover:text-cheddar-blue transition-colors font-sans">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-black/80 hover:text-cheddar-blue transition-colors font-sans">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-black/80 hover:text-cheddar-blue transition-colors font-sans">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black/80 hover:text-cheddar-blue transition-colors font-sans">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black/80 hover:text-cheddar-blue transition-colors font-sans">
                  Classic Cheddar
                </a>
              </li>
              <li>
                <a href="#" className="text-black/80 hover:text-cheddar-blue transition-colors font-sans">
                  Three Cheese Deluxe
                </a>
              </li>
              <li>
                <a href="#" className="text-black/80 hover:text-cheddar-blue transition-colors font-sans">
                  Truffle & Mushroom
                </a>
              </li>
              <li>
                <a href="#" className="text-black/80 hover:text-cheddar-blue transition-colors font-sans">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-black/80 font-sans">
              Cheddar Cartel Ltd<br />
              Unit 12, Cheese Business Park<br />
              Manchester, M1 2AB<br />
              United Kingdom
            </address>
            <p className="mt-4 text-black/80 font-sans">
              Email: <a href="mailto:sales@cheddarcartel.com" className="hover:text-cheddar-blue">sales@cheddarcartel.com</a>
            </p>
            <p className="text-black/80 font-sans">
              Phone: <a href="tel:+441234567890" className="hover:text-cheddar-blue">+44 (0) 1234 567890</a>
            </p>
          </div>
        </div>
        
        <hr className="border-black/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-black/80 text-sm font-sans">
            &copy; {new Date().getFullYear()} Cheddar Cartel Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-black/80 hover:text-cheddar-blue text-sm transition-colors font-sans">
              Privacy Policy
            </a>
            <a href="#" className="text-black/80 hover:text-cheddar-blue text-sm transition-colors font-sans">
              Terms of Service
            </a>
            <a href="#" className="text-black/80 hover:text-cheddar-blue text-sm transition-colors font-sans">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;