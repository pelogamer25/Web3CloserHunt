import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Background />
      
      <main className="relative flex flex-col gap-0">
        <Hero onScrollToForm={scrollToForm} />
        
        <Mission />
        
        {/* Transitional spacer with soft gradient masking */}
        <div className="h-24 w-full bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
        
        <ApplicationForm id="application-form" />
        
        <Footer />
      </main>
    </div>
  );
};

export default App;