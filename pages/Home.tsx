import React from 'react';
import { AppRoute } from '../types';

interface HomeProps {
  onNavigate: (route: AppRoute) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-3xl border-4 border-jawa-gold relative overflow-hidden">
        {/* Decoration */}
        <div className="absolute top-0 left-0 w-full h-4 bg-jawa-gold"></div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-jawa-brown mb-4 font-javanese">
          Sugeng Rawuh
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-jawa-blue mb-6">
          Ayo Sinau Aksara Jawa!
        </h2>
        
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Selamat datang di aplikasi pembelajaran Aksara Jawa yang interaktif dan menyenangkan. 
          Belajar warisan budaya leluhur kini lebih mudah dengan bantuan teknologi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <button 
            onClick={() => onNavigate(AppRoute.NGLEGENA)}
            className="bg-jawa-gold hover:bg-amber-500 text-jawa-brown font-bold py-4 px-6 rounded-xl shadow-md transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <span className="text-2xl">ꦲ</span> Belajar Huruf
          </button>
          
          <button 
            onClick={() => onNavigate(AppRoute.QUIZ)}
            className="bg-jawa-blue hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-xl shadow-md transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
             🎮 Main Kuis
          </button>
          
          <button 
             onClick={() => onNavigate(AppRoute.AI_EXAMPLES)}
            className="bg-jawa-red hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl shadow-md transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
             🤖 Tanya AI
          </button>
          
           <button 
             onClick={() => onNavigate(AppRoute.SANDHANGAN)}
            className="bg-jawa-green hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-md transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
             📚 Sandhangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;