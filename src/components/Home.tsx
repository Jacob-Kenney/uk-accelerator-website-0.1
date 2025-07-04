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
          src="/sander-crombach-6b3r1WAjPBI-unsplash (1).jpg" 
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
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-2 fade-in-up-stagger-1">
                In the corridors of power, where decisions shape the future of nations, artificial intelligence stands as both architect and oracle. We are not builders of mere applications, but sculptors of systemic change—engineers of the impossible, guardians of the transformative.
              </p>
              
              <p className="fade-in-up-stagger-2">
                UKACC exists for those who understand that true innovation requires not just technical brilliance, but institutional courage. We seek minds that comprehend the weight of responsibility that comes with wielding tools capable of reshaping entire industries, economies, and societies.
              </p>
              
              <p className="fade-in-up-stagger-3">
                Our fellowship extends only to those who demonstrate not merely competence, but character. Who possess not just ambition, but wisdom. Who understand that the greatest technological advances emerge from the intersection of relentless curiosity and disciplined restraint.
              </p>
              
              <p className="fade-in-up-stagger-4">
                We are the quiet revolution. The calculated disruption. The thoughtful transformation of what it means to build systems that think, learn, and decide alongside human intelligence.
              </p>
              
              <p className="font-semibold italic text-[#C0C0C0] text-center mt-12 fade-in-up-stagger-5">
                This is not for everyone. This is for the few who would reshape everything.
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
                manifesto.{' '}
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