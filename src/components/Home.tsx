import { useEffect, useState } from 'react';
import { ExternalLink, Crown, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-serif">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/sander-crombach-6b3r1WAjPBI-unsplash.jpg"
          alt="London cityscape with Tower Bridge" 
          className="w-full h-full object-cover opacity-70"
        />
        {/* Red tint overlay inspired by Union Jack */}
        <div className="absolute inset-0 bg-red-600/30"></div>
        {/* Dynamic gradient overlay that intensifies with scroll */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]"
          style={{
            opacity: Math.min(0.3 + (scrollY / 1000), 1),
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="min-h-screen flex items-center justify-center relative">
          <div 
            className="text-center max-w-4xl mx-auto px-6 fade-in-up"
            style={{
              opacity: Math.max(1 - (scrollY / 200), 0),
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <div className="mb-8" 
            style={{
              opacity: Math.max(1 - (scrollY / 500), 0),
            }}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold tracking-wider mb-6 text-white drop-shadow-2xl">
                UK Accelerator
              </h1>
              <p className="text-lg md:text-xl text-[#C0C0C0] font-light tracking-wide max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                Maximum Effort. Outbuild Everyone.
              </p>
            </div>
            
            {/* Subtle accent element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10">
              <Crown size={400} className="text-white" />
            </div>
          </div>

          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            style={{
              opacity: Math.max(1 - (scrollY / 200), 0),
            }}
          >
            <ChevronDown 
              size={32} 
              className="text-white/60 animate-bounce-gentle cursor-pointer hover:text-white/80 transition-colors duration-300" 
              onClick={() => {
                document.getElementById('manifesto')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            />
          </div>
        </header>

        {/* Manifesto Section */}
        <section id="manifesto" className="py-24 px-6 bg-[#0A0A0A]/95 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto fade-in-up-delayed">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-16 text-center tracking-wide">
              The Manifesto
            </h2>
            
            <div className="space-y-8 text-[#FFFFFF] leading-relaxed text-lg md:text-xl">
              <h3 className='text-2xl md:text-3xl font-bold fade-in-up-stagger-1'>You are here because the noise is deafening.</h3>
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-2 fade-in-up-stagger-1">
                The endless talk. The digital ghost towns posing as communities.
                <br/>The architectural astronautics replacing execution.
                <br/>It's a sea of mediocrity, and it's holding the United Kingdom back.
              </p>

              <h3 className='text-2xl md:text-3xl font-bold fade-in-up-stagger-2'>We are the answer.</h3>
              <p className="fade-in-up-stagger-2">
                This is not a network. This is not a community.
                <br/>This is a battleground, built for the ruthless pursuit of technological supremacy.
                <br/>We are a self-administering, high-agency collective of elite builders.
              </p>
              <p className='fade-in-up-stagger-2'>
                We don't theorise. We don't complain. 
                <br/>We deliver, with exceptional firepower. 
              </p>
              
              <h3 className='text-2xl md:text-3xl font-bold fade-in-up-stagger-3'>Execution is the only metric.</h3>
              <p className='fade-in-up-stagger-3'>
                That's enforced through our central ritual, the <strong>Fight Night</strong>. 
                <br/>Every month, you ship a feature, a proof-of-concept, or a product. 
                <br/>You demo your work. You prove you belong.
              </p>
              
              <p className='fade-in-up-stagger-3'>
                Effort is respected. Excuses are not. 
                <br/>Fail to deliver a demo, and you are warned.
                <br/>Fail again, and you are exiled. Permanently.
              </p>

              <p className='fade-in-up-stagger-4'>
                The blacklist is automated. Impartial. Unforgiving.
                <br/>The mechanism that keeps this engine firing.
              </p>

              <p className='fade-in-up-stagger-4'>
                This is not a place for spectators.
                <br/>This is a place for gladiators.
              </p>

              <p className='fade-in-up-stagger-4'>
                We are the new standard.
                <br/>The centre of gravity for those who execute.
              </p>

              <p className="italic text-[#C0C0C0] text-center mt-12 fade-in-up-stagger-5">
                <strong>Build or be forgotten</strong> — UK Accelerator.
              </p>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="py-24 px-6 bg-[#111111]/95 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto text-center fade-in-up-delayed">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 tracking-wide">
              Request to Join
            </h2>
            
            <p className="text-[#C0C0C0] text-lg mb-12 leading-relaxed">
              Access is earned. We admit only those with a relentless track record.
              <br/>No tourists, no dreamers, just the dangerously capable.
            </p>
            
            <a 
              href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=ArIh-ODXS0KtmldsurCkgyZqDzgAeztPporYCK0TFyVUMDg2NDVHVUJaRlZPUk04UklQUjlTM0xKVi4u" 
              className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] font-sans font-semibold py-4 px-12 rounded-md hover:bg-[#F0F0F0] transition-all duration-300 text-lg hover:scale-105 hover:shadow-2xl"
            >
              Apply for Access
              <ExternalLink size={20} />
            </a>
            
            <p className="text-sm text-[#C0C0C0] leading-relaxed mt-8">
              Admission requires full alignment with the {' '}
              <Link to="/rules" className="text-[#0077FF] hover:underline transition-colors">
                rules
              </Link>{' '}
              and{' '}
              <a href="#manifesto" className="text-[#0077FF] hover:underline transition-colors">
                manifesto
              </a>.
                Read them first
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-[#333333] bg-[#0A0A0A]/95 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center fade-in-up-delayed">
            <p className="text-[#C0C0C0] text-sm">
              © 2025 UK Accelerator. For the ruthless pursuit of British technological supremacy.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;