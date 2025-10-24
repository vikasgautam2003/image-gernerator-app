"use client";

// We're using Next.js Link for navigation
import Link from 'next/link';
import AnimatedGallery from './components/AnimatedGallery';

// Using lucide-react for high-quality icons
import { Zap, Image, Cpu, Layers, Github, Twitter, Send } from 'lucide-react';

export default function HomePage() {
  
  // -- Helper component for the animated product showcase --
  // We use placeholder images. Replace these URLs with any images you've generated!
  const FloatingImage = ({ src, alt, className }) => (
    <div 
      className={`
        absolute rounded-xl shadow-2xl bg-black/30 border border-blue-500/20 
        overflow-hidden backdrop-blur-sm animate-float 
        ${className}
      `}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover" 
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      
      {/* This <style> tag injects the custom 'float' animation.
        This is the best way to add custom keyframes in a single file.
      */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-3deg);
          }
          50% {
            transform: translateY(-25px) rotate(3deg);
          }
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 15s ease-in-out infinite 3s;
        }

        .animate-float-fast {
          animation: float 8s ease-in-out infinite 1s;
        }
      `}</style>

      {/* -- Header -- */}
      <header className="sticky p-3 top-0 z-50 w-full bg-black/50 backdrop-blur-lg border-b border-gray-800/50">
        <nav className="max-w-full  mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <span className="text-3xl font-bold tracking-tighter">
              One<span className="text-blue-400">PnG</span>.AI
            </span>
          </Link>
          <Link href="/generate">
            <span className="hidden md:inline-block px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Start Generating
            </span>
          </Link>
        </nav>
      </header>

      {/* -- Hero Section -- */}
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4 -mt-16">
        
        {/* -- This is the animated product showcase -- */}
        {/* FIXED: Added z-0 to force this div to the background */}
        <div className="absolute inset-0 w-full h-full opacity-30 md:opacity-50 z-0">
          <FloatingImage 
            // UPDATED: Themed placeholder for visualization
            src="/1.png" 
            alt="AI generated art of a robot monk"
            className="w-48 h-32 md:w-84 md:h-72 top-[20%] left-[8%] animate-float-delay"
          />
          <FloatingImage 
            // UPDATED: Themed placeholder for visualization
            src="/2.png" 
            alt="AI generated art of a cyberpunk city"
            className="w-40 h-64 md:w-95 md:h-100 top-[7%] right-[12%] animate-float"
          />
           <FloatingImage 
            // UPDATED: Themed placeholder for visualization
            src="/5.png" 
            alt="AI generated art of a cyberpunk city"
            className="w-40 h-64 md:w-65 md:h-65 top-[7%] right-[45%] animate-float"
          />
          <FloatingImage 
            // UPDATED: Themed placeholder for visualization
            src="/11.png" 
            alt="AI generated art of a cosmic whale"
            className="w-32 h-32 md:w-56 md:h-56 bottom-[20%] left-[25%] opacity-50 blur-sm animate-float-fast"
          />
          <FloatingImage 
            // UPDATED: Themed placeholder for visualization
            src="/3.png" 
            alt="AI generated art of a fantasy castle"
            className="w-60 h-60 md:w-72 md:h-72 bottom-[15%] right-[20%] opacity-70 animate-float-delay"
          />
        </div>

       
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-8xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-300 to-blue-300 py-4">
           Imagine. Generate. Inspire.
          </h1>
          <p className="mt-10 text-sm md:text-2xl max-w-2xl text-gray-400 mb-20" >
            Welcome to <span className="font-bold text-white">OnePnG.AI</span>.
            Your new engine for instant, high-quality AI-driven creativity.
          </p>

          
          <Link href="/generate">
        <span className="mt-10 px-10 py-5 rounded-full text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50 animate-pulse hover:animate-none transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-400/50 cursor-pointer">
              Start Creating Now
            </span>


          </Link>
        </div>
      </main>
  <AnimatedGallery />
      

  
     <footer className="relative z-10 w-full bg-black border-t border-blue-900/50 pt-16 pb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-blue-500/50 blur-[30px]" />
        <div className="max-w-8xl mx-auto px-6 pl-5 pr-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <Link href="/">
                <span className="text-3xl font-bold tracking-tighter">
                  One<span className="text-blue-400">PnG</span>.AI
                </span>
              </Link>
              <p className="mt-2 text-lg text-gray-400">
                Create Beyond Reality.
              </p>
            </div>
            <div className="flex gap-6 md:gap-8">
              <Link href="/">
                <span className="text-gray-300 hover:text-blue-400 transition-colors">Home</span>
              </Link>
              <Link href="/generate">
                <span className="text-gray-300 hover:text-blue-400 transition-colors">Generate</span>
              </Link>
              <span className="text-gray-600 cursor-not-allowed" title="Coming Soon!">API</span>
            </div>
          </div>
          <div className="my-8 border-t border-gray-800/50" />
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} OnePnG.AI. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors" title="Join our community!">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

