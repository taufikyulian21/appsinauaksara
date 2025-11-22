import React, { useState } from 'react';
import { NGLEGENA_DATA } from '../data/constants';
import { Aksara } from '../types';

const Nglegena: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<Aksara | null>(null);

  const playAudio = (latin: string) => {
    // Simple browser TTS fallback since we don't have assets
    const utterance = new SpeechSynthesisUtterance(latin);
    utterance.lang = 'id-ID'; // Indonesian accent is close enough for basic syllables
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-jawa-brown text-center mb-2">Aksara Nglegena</h2>
      <p className="text-center text-gray-600 mb-8">Klik kartu untuk melihat detail dan mendengar suara.</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {NGLEGENA_DATA.map((char, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedChar(char);
              playAudio(char.latin);
            }}
            className="bg-white rounded-xl shadow-md border-2 border-amber-200 hover:border-jawa-gold cursor-pointer p-4 flex flex-col items-center transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-5xl mb-2 font-javanese text-jawa-brown">{char.char}</span>
            <span className="text-lg font-bold text-gray-700">{char.latin}</span>
          </div>
        ))}
      </div>

      {/* Modal for Detail */}
      {selectedChar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedChar(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative animate-bounce-in" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedChar(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            
            <div className="mb-6">
              <span className="text-8xl font-javanese text-jawa-brown block mb-4">{selectedChar.char}</span>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{selectedChar.latin}</h3>
              <p className="text-gray-500">Aksara Dasar</p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => playAudio(selectedChar.latin)}
                className="flex items-center gap-2 bg-jawa-blue text-white px-4 py-2 rounded-full hover:bg-sky-600 transition"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                Dengar Suara
              </button>
            </div>
            
            <div className="mt-6 bg-amber-50 p-3 rounded-lg text-sm text-amber-800">
              Tips: Huruf ini dibaca dengan mulut terbuka (Legena).
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nglegena;