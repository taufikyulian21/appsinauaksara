import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
        <div className="h-32 bg-gradient-to-r from-jawa-gold to-amber-600"></div>
        <div className="px-8 pb-8">
            <div className="relative -top-12 flex justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg text-4xl">
                    👨‍🎓
                </div>
            </div>
            
            <h2 className="text-3xl font-bold text-center text-jawa-brown mb-8">Tentang Pembuat</h2>
            
            <div className="space-y-4 text-center">
                <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Pembuat Aplikasi</p>
                    <p className="text-xl font-bold text-gray-800">Guruh Saputra</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Kelas</p>
                    <p className="text-xl font-bold text-gray-800">6 SD</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Sekolah</p>
                    <p className="text-xl font-bold text-gray-800">SD Negeri Batur 01</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Kecamatan</p>
                    <p className="text-xl font-bold text-gray-800">Getasan</p>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-600 italic">
                    "Ayo nguri-uri budaya Jawa."
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;