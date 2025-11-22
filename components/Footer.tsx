import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jawa-brown text-jawa-cream py-6 mt-12 border-t-4 border-jawa-gold">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-javanese mb-2 text-2xl">ꦩꦠꦸꦂꦤꦸꦮꦸꦤ꧀</p>
        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} Sinau Aksara Jawa. Dibuat dengan ❤️ oleh Guruh Saputra.
        </p>
      </div>
    </footer>
  );
};

export default Footer;