import React from 'react';
import { SANDHANGAN_DATA } from '../data/constants';

const Sandhangan: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-jawa-brown text-center mb-2">Sandhangan</h2>
      <p className="text-center text-gray-600 mb-8">Tanda bunyi vokal dan penanda akhir suku kata.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SANDHANGAN_DATA.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100">
            <div className="bg-amber-50 px-6 py-3 border-b border-amber-100 flex justify-between items-center">
              <h3 className="font-bold text-lg text-jawa-brown">{item.name}</h3>
              <span className="text-xs bg-jawa-gold text-white px-2 py-1 rounded-full">{item.position}</span>
            </div>
            <div className="p-6 flex items-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-5xl font-javanese text-jawa-blue mr-6 shrink-0 relative">
                 {/* Dotted circle to represent base character position if needed, usually combined with 'ha' or just shown */}
                 <span className="opacity-30 absolute text-2xl">◌</span>
                 <span className="z-10">{item.char}</span>
              </div>
              <div>
                <p className="text-gray-600 mb-2 font-semibold">Fungsi: <span className="text-jawa-brown">{item.function}</span></p>
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Contoh</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-javanese">{item.example}</span>
                    <span className="text-lg font-bold text-gray-800">= {item.exampleLatin}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sandhangan;