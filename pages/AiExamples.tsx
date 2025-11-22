import React, { useState } from 'react';
import { generateJavaneseExamples } from '../services/geminiService';
import { AiWordExample } from '../types';

const AiExamples: React.FC = () => {
  const [examples, setExamples] = useState<AiWordExample[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const data = await generateJavaneseExamples();
      setExamples(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-[80vh]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-jawa-brown mb-3">Generator Kata AI</h2>
        <p className="text-gray-600 mb-6">
          Minta kecerdasan buatan (AI) untuk membuatkan contoh kata atau kalimat baru untuk belajar.
        </p>
        
        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`bg-gradient-to-r from-jawa-red to-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center mx-auto gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sedang Membuat...
            </>
          ) : (
            <>✨ Buat Contoh Baru</>
          )}
        </button>
      </div>

      <div className="space-y-6">
        {examples.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-md border-l-8 border-jawa-blue flex flex-col md:flex-row items-center justify-between animate-fade-in-up">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{item.word}</h3>
              <p className="text-sm text-gray-500 italic">{item.meaning}</p>
            </div>
            
            <div className="bg-amber-50 px-8 py-4 rounded-xl border border-amber-100">
              <span className="text-4xl font-javanese text-jawa-brown">{item.script}</span>
            </div>
          </div>
        ))}

        {examples.length === 0 && !loading && (
          <div className="text-center text-gray-400 py-10 border-2 border-dashed border-gray-300 rounded-xl">
            Belum ada contoh. Klik tombol di atas!
          </div>
        )}
      </div>
    </div>
  );
};

export default AiExamples;