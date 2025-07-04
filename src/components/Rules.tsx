import { ArrowLeft, Users, Target, Shield, UserCheck, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

function Rules() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-serif">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/luke-ow-_o7WxqRnm6s-unsplash.jpg" 
          alt="Buckingham Palace with the Queen's Guard" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 to-[#0A0A0A]/95"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <header className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[#C0C0C0] hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-sans font-bold tracking-wider mb-4 text-white">
              Rules
            </h1>
            <p className="text-lg text-[#C0C0C0] font-light max-w-2xl">
              The binding standards required for entry, and continued existence, in UK Accelerator.
            </p>
          </div>
        </header>

        <main className="py-12 px-6 bg-[#0A0A0A]/95 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Membership & Commitment */}
            <section className="fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <Users className="text-white" size={32} />
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-wide">
                  1. Membership & Commitment
                </h2>
              </div>
              
              <div className="space-y-6 text-[#FFFFFF] leading-relaxed text-lg">
                <p>1.1. Admission is granted through evidence of excellence. Submissions are reviewed quarterly.</p>
                
                <div>
                  <p className="mb-4">1.2. All members must participate in Demo Night, held on the last day of each month. Each submission must include:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-[#C0C0C0]">
                    <li>Name(s) of contributor(s)</li>
                    <li>Video demo (public or unlisted)</li>
                    <li>GitHub link or private code justification</li>
                    <li>A short message summarising work completed</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-900/30 border border-yellow-600/50 rounded-lg p-6 my-6">
                  <p className="text-yellow-200">First failure to submit results in a formal warning.</p>
                </div>
                
                <div className="bg-red-900/30 border border-red-600/50 rounded-lg p-6 my-6">
                  <p className="text-red-200">Second failure results in immediate removal and permanent entry on the blacklist.</p>
                </div>
                
                <p className="font-semibold">Extensions or excuses are not accepted. <span className="italic">You either build or you don't belong.</span></p>
                
                <p>1.3. Obvious low-effort submissions may be treated as a non-submission at the discretion of moderators. The spirit of contribution matters as much as the act.</p>
              </div>
            </section>

            {/* Cultural Code */}
            <section className="fade-in-up-delayed">
              <div className="flex items-center gap-4 mb-8">
                <Target className="text-white" size={32} />
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-wide">
                  2. Cultural Code
                </h2>
              </div>
              
              <div className="space-y-6 text-[#FFFFFF] leading-relaxed text-lg">
                <p>2.1. Action over intention. Talking about ideas is not contribution.</p>
                <p>2.2. Effort is respected. Absence is not.</p>
                <p>2.3. There are no spectators. Every member is either building or leaving.</p>
                <p>2.4. No posturing. No vibes. No theatre. Only output, progress, and real work.</p>
                <p>2.5. Feedback is expected to be constructive, professional and actionable. <strong>Do not be an asshole</strong>. Start with what's good. End with what could be better. That's the rule</p>
              </div>
            </section>

            {/* Conduct */}
            <section className="fade-in-up-stagger-1">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="text-white" size={32} />
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-wide">
                  3. Conduct
                </h2>
              </div>
              
              <div className="space-y-6 text-[#FFFFFF] leading-relaxed text-lg">
                <p>3.1. Members are expected to maintain an elite standard of professionalism inside and outside the group</p>
                <p>3.2. Don't explain. Don't complain. We celebrate failure, not excuses. Ownership is the only acceptable response to missed goals. Anything else wastes everyone's time.</p>
                <p>3.3. There is no winner in an argument. Arguing for the sake of being right is a distraction. Arguments lead to blacklist inclusion.</p>
                
                <div className="bg-red-900/30 border border-red-600/50 rounded-lg p-6 my-6">
                  <p className="text-red-200">Any act of deception, plagiarism, or reputation fraud result in immediate expulsion and listing to the public blacklist.</p>
                </div>
              </div>
            </section>

            {/* Onboarding */}
            <section className="fade-in-up-stagger-2">
              <div className="flex items-center gap-4 mb-8">
                <UserCheck className="text-white" size={32} />
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-wide">
                  4. Onboarding
                </h2>
              </div>
              
              <div className="space-y-6 text-[#FFFFFF] leading-relaxed text-lg">
                <p>4.1. Applications are reviewed quarterly, with successful candidates onboarded in small batches.</p>
              </div>
            </section>

            {/* Accountability */}
            <section className="fade-in-up-stagger-3">
              <div className="flex items-center gap-4 mb-8">
                <Scale className="text-white" size={32} />
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-wide">
                  5. Accountability
                </h2>
              </div>
              
              <div className="space-y-6 text-[#FFFFFF] leading-relaxed text-lg">
                <p>5.1. Enforcement is automated, impartial, and unapologetic. Rules are applied without bias.</p>
                <p>5.2. <strong>The blacklist is permanent.</strong> Re-entry is not permitted.</p>
                
                <p className="font-semibold italic text-[#C0C0C0] text-center text-xl mt-12 p-6 border-t border-[#333333]">
                  Build, or be forgotten. There are no second chances.
                </p>
              </div>
            </section>

          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-[#333333] bg-[#0A0A0A]/95 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#C0C0C0] text-sm">
            © 2025 UK Accelerator. For the ruthless pursuit of British technological supremacy.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Rules;