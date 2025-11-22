import React from 'react';
import { PASANGAN_DATA, NGLEGENA_DATA } from '../data/constants';

const Pasangan: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-jawa-brown text-center mb-2">Pasangan Aksara</h2>
      <p className="text-center text-gray-600 mb-8">Digunakan untuk mematikan huruf vokal di tengah kalimat.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NGLEGENA_DATA.map((base, index) => {
          const pasangan = PASANGAN_DATA[index];
          return (
            <div key={index} className="bg-white rounded-xl shadow p-4 border border-amber-100 flex items-center space-x-4">
              <div className="flex-1 text-center border-r border-gray-100 pr-4">
                <span className="block text-gray-400 text-sm mb-1">Induk</span>
                <span className="text-4xl font-javanese text-jawa-brown">{base.char}</span>
              </div>
              <div className="flex-1 text-center">
                 <span className="block text-jawa-blue text-sm font-bold mb-1">Pasangan</span>
                 <span className="text-4xl font-javanese text-jawa-blue">{pasangan.char}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-12 bg-jawa-cream p-6 rounded-xl border-l-4 border-jawa-gold shadow-sm">
        <h3 className="font-bold text-xl text-jawa-brown mb-2">Contoh Penggunaan:</h3>
        <div className="flex items-center gap-4">
           <div>
             <p className="text-lg">Mangan Sega (Makan Nasi)</p>
             <p className="text-3xl font-javanese mt-2">ꦩꦔꦤ꧀ꦱꦼꦒ</p>
           </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Huruf 'Na' mati karena bertemu pasangan 'Sa'.
        </p>
      </div>
    </div>
  );
};

export default Pasangan;