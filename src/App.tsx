import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Products />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;