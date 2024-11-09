
import './App.css';
import Header from './components/Header';
import SocialProofSection from './components/SocialProofSection';
import Features from './components/Features';
import TestimonialSection from './components/TestimonialSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import BlogSection from './components/BlogSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <SocialProofSection />
        <Features />
        <TestimonialSection />
        <FeaturesSection />
        <FaqSection/>
        <BlogSection />
        <CtaSection />
        <Footer/>
    </div>
  );
}

export default App;
