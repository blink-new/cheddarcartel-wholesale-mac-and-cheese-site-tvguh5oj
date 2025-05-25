import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/logo.svg" alt="CheddarCartel" className="h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#products" className="font-medium hover:text-primary transition-colors">
            Our Products
          </a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <Button className="bg-primary text-white">
            Request Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#products" 
              className="py-2 px-4 font-medium hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Our Products
            </a>
            <a 
              href="#about" 
              className="py-2 px-4 font-medium hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="py-2 px-4 font-medium hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button 
              className="w-full bg-primary text-white"
              onClick={toggleMenu}
            >
              Request Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;