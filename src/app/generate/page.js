// "use client";

// import { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { Sparkles } from 'lucide-react'; // Using Lucide for a nice icon

// export default function GeneratePage() {
//   const [prompt, setPrompt] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
  
//   // Cooldown state
//   const [isCoolingDown, setIsCoolingDown] = useState(false);
//   const [countdown, setCountdown] = useState(60);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     if (isCoolingDown && countdown > 0) {
//       timerRef.current = setTimeout(() => {
//         setCountdown(countdown - 1);
//       }, 1000);
//     } else if (countdown === 0) {
//       setIsCoolingDown(false);
//       setCountdown(60);
//       if (timerRef.current) {
//         clearTimeout(timerRef.current);
//       }
//     }
//     return () => {
//       if (timerRef.current) {
//         clearTimeout(timerRef.current);
//       }
//     };
//   }, [isCoolingDown, countdown]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!prompt || isLoading || isCoolingDown) return;

//     setIsLoading(true);
//     setError(null);
//     setImageUrl("");

//     try {
//       const response = await fetch('/api/generate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ prompt }),
//       });

//       if (!response.ok) {
//         const errData = await response.json();
//         throw new Error(errData.error || 'Failed to generate image');
//       }

//       const data = await response.json();
//       setImageUrl(data.imageUrl);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//       setIsCoolingDown(true);
//     }
//   };

//   const getButtonText = () => {
//     if (isLoading) return 'Generating...';
//     if (isCoolingDown) return `Ready in ${countdown}s...`;
//     return 'Generate Image';
//   };

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white font-inter">
      
//       {/* Grid 1: Control Panel (Left Side) */}
//       <aside className="w-full lg:w-1/3 xl:w-1/4 p-6 md:p-8 bg-gray-800/30 backdrop-blur-md border-r border-gray-700/50">
//         <div className="flex flex-col h-full">
//           <header className="mb-8">
//             <Link href="/">
//               <span className="text-purple-400 hover:text-purple-300 transition-colors">
//                 &larr; Back to Home
//               </span>
//             </Link>
//             <h1 className="text-3xl font-bold text-white mt-4 flex items-center">
//               <Sparkles className="w-8 h-8 mr-3 text-purple-400" />
//               Image Engine
//             </h1>
//           </header>

//           <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-4">
//             <label htmlFor="prompt" className="block text-sm font-medium text-gray-300">
//               Enter your prompt
//             </label>
//             <textarea
//               id="prompt"
//               name="prompt"
//               rows="6"
//               className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:opacity-50 transition-colors"
//               placeholder="e.g., A red panda wearing a tiny astronaut helmet, photorealistic..."
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               disabled={isLoading || isCoolingDown}
//             />
            
//             <div className="flex-grow" />

//             <button
//               type="submit"
//               className="w-full px-6 py-4 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 disabled:bg-gray-600 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
//               disabled={isLoading || isCoolingDown || !prompt}
//             >
//               {getButtonText()}
//             </button>
//           </form>
//         </div>
//       </aside>

//       {/* Grid 2: Gallery / Canvas (Right Side) */}
//       <main className="w-full lg:w-2/3 xl:w-3/4 p-6 md:p-10 flex items-center justify-center lg:h-screen lg:sticky lg:top-0">
//         <div className="w-full max-w-3xl h-full flex items-center justify-center">

//           {isLoading && (
//             <div className="flex flex-col items-center justify-center text-gray-400">
//               <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
//               <p className="mt-6 text-lg">Generating your masterpiece...</p>
//             </div>
//           )}

//           {error && !isLoading && (
//             <div className="bg-red-800/50 border border-red-600 text-red-200 px-6 py-4 rounded-lg shadow-lg" role="alert">
//               <strong className="font-bold text-lg">Generation Failed</strong>
//               <span className="block mt-1">{error}</span>
//             </div>
//           )}

//           {imageUrl && !isLoading && (
//             <div className="w-full rounded-lg overflow-hidden shadow-2xl bg-gray-800/30 border border-gray-700/50">
//               <img
//                 src={imageUrl}
//                 alt="Generated AI image"
//                 className="w-full h-auto object-contain max-h-[85vh]"
//               />
//             </div>
//           )}

//           {!isLoading && !error && !imageUrl && (
//             <div className="text-center text-gray-500">
//               <Sparkles className="w-24 h-24 mx-auto opacity-30" />
//               <h2 className="mt-6 text-3xl font-semibold">Welcome</h2>
//               <p className="mt-2 text-lg">Your generated images will appear here.</p>
//             </div>
//           )}

//         </div>
//       </main>
//     </div>
//   );
// }














"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Download } from 'lucide-react'; 

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCoolingDown, setIsCoolingDown] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isCoolingDown && countdown > 0) {
      timerRef.current = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsCoolingDown(false);
      setCountdown(60);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isCoolingDown, countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt || isLoading || isCoolingDown) return;

    setIsLoading(true);
    setError(null);
    setImageUrl("");

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to generate image');
      }

      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setIsCoolingDown(true);
    }
  };

  const getButtonText = () => {
    if (isLoading) return 'Generating...';
    if (isCoolingDown) return `Ready in ${countdown}s...`;
    return 'Generate Image';
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'generated-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white font-inter">
      <aside className="w-full lg:w-1/3 p-6 md:p-8 bg-gray-900/30 backdrop-blur-md border-r border-blue-500/20 shadow-[10px_0_25px_-10px_rgba(59,130,246,0.2)]">
        <div className="flex flex-col h-full max-w-lg mx-auto">
          <header className="mb-20">
            <Link href="/">
              <span className="text-blue-400 hover:text-blue-300 transition-colors">
                &larr; Back to Home
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-white mt-10 flex items-center">
              <Sparkles className="w-8 h-8 mr-3 text-blue-400" />
              Image Engine
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-4">
            <label htmlFor="prompt" className="block text-lg font-medium text-gray-300">
              Enter your prompt
            </label>
            <textarea
              id="prompt"
              name="prompt"
              rows="6"
              className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 transition-colors focus:shadow-md focus:shadow-blue-500/50"
              placeholder="e.g., A red panda wearing a tiny astronaut helmet, photorealistic..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading || isCoolingDown}
            />
            <div className="flex-grow" />
            <button
              type="submit"
              className="w-full px-6 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-600 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              disabled={isLoading || isCoolingDown || !prompt}
            >
              {getButtonText()}
            </button>
          </form>
        </div>
      </aside>

      <main className="w-full lg:w-2/3 p-6 md:p-10 flex items-center justify-center lg:h-screen lg:sticky lg:top-0">
        <div className="w-full max-w-3xl h-full flex items-center justify-center">
          {isLoading && (
            <div className="flex flex-col items-center justify-center text-gray-400">
              <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
              <p className="mt-6 text-lg">Generating your masterpiece...</p>
            </div>
          )}

          {error && !isLoading && (
            <div className="bg-red-800/50 border border-red-600 text-red-200 px-6 py-4 rounded-lg shadow-lg" role="alert">
              <strong className="font-bold text-lg">Generation Failed</strong>
              <span className="block mt-1">{error}</span>
            </div>
          )}

          {!isLoading && !error && !imageUrl && (
            <div className="text-center text-gray-500">
              <Sparkles className="w-24 h-24 mx-auto text-blue-500 opacity-20" />
              <h2 className="mt-6 text-3xl font-semibold">Welcome</h2>
              <p className="mt-2 text-lg">Your generated images will appear here.</p>
            </div>
          )}

          {imageUrl && !isLoading && (
            <div className="w-full flex flex-col">
              <button
                onClick={handleDownload}
                className="mb-4 inline-flex items-center justify-center self-end px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg text-sm transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Image
              </button>

              <div className="w-full rounded-lg overflow-hidden shadow-2xl bg-black/30 border border-blue-500/30 shadow-blue-500/20">
                <img
                  src={imageUrl}
                  alt="Generated AI image"
                  className="w-full h-auto object-contain max-h-[75vh]"
                />
              </div>
            </div>

             
          )}

         
        </div>
      </main>
    </div>
  );
}
