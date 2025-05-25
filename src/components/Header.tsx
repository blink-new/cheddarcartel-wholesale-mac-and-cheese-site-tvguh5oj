import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-2" : "bg-cheddar-yellow py-4"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-black">
              <img 
                src="/images/cheddar-cartel-logo.svg" 
                alt="CheddarCartel Logo" 
                className="h-12"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-black font-medium hover:text-cheddar-blue transition-colors">
              Home
            </a>
            <a href="#products" className="text-black font-medium hover:text-cheddar-blue transition-colors">
              Products
            </a>
            <a href="#about" className="text-black font-medium hover:text-cheddar-blue transition-colors">
              About
            </a>
            <a href="#contact" className="text-black font-medium hover:text-cheddar-blue transition-colors">
              Contact
            </a>
            <Button 
              className="bg-cheddar-blue hover:bg-cheddar-blue/90 text-white"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-black hover:bg-cheddar-yellow/80"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen bg-white shadow-lg' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-black font-medium py-2 hover:text-cheddar-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#products" 
              className="text-black font-medium py-2 hover:text-cheddar-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#about" 
              className="text-black font-medium py-2 hover:text-cheddar-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-black font-medium py-2 hover:text-cheddar-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-cheddar-blue hover:bg-cheddar-blue/90 text-white w-full mt-2"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;