import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-1">DentMate</h3>
            <p className="text-sm text-slate-400">Smart Dental Clinic System</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
             <Link to="/features" className="hover:text-white transition-colors">Features</Link>
             <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
             <Link to="/demo" className="hover:text-white transition-colors">Live Demo</Link>
          </div>

          <div className="text-sm text-slate-500 text-center md:text-right">
            <p>&copy; {currentYear} DentMate. All rights reserved.</p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <span className="cursor-pointer hover:text-white">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white">Terms</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
