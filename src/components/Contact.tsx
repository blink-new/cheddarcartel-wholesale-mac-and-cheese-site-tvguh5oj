import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission to a backend here
    
    // Simulate successful submission
    setFormState(prev => ({
      ...prev,
      submitted: true
    }));
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-brand-yellow"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8 max-w-lg font-sans">
              Interested in our wholesale mac & cheese products? Fill out the form 
              and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="font-sans">sales@cheddarcartel.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="font-sans">+44 (0) 1234 567890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Visit Us</h3>
                  <p className="font-sans">
                    Cheddar Cartel Ltd<br />
                    Unit 12, Cheese Business Park<br />
                    Manchester, M1 2AB<br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
              {formState.submitted ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-lg mb-6 font-sans">
                    Your message has been received. We'll be in touch shortly.
                  </p>
                  <Button 
                    className="bg-primary text-white"
                    onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-1 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-1 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block mb-1 font-medium">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-1 font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full py-6 h-auto text-lg bg-primary text-white"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;