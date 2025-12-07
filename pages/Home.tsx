import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
            New Version 2.0 Available
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            DentMate – Smart Dental <br className="hidden md:block" />
            <span className="text-primary-600">Clinic Management System</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10">
            Manage patient records, appointments, and clinic workflow—all in one clean, easy-to-use platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 md:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Try Live Demo
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:text-lg shadow-sm hover:shadow-md transition-all"
            >
              Request Your Clinic Version
            </Link>
          </div>
        </div>

        {/* Decorative background blob */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast & Intuitive</h3>
              <p className="text-slate-600">No training needed. Our interface is designed to be picked up in minutes, not days.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Scalable</h3>
              <p className="text-slate-600">Works for clinics with hundreds of patients. Whether you're a solo practice or a multi-chair clinic.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Records</h3>
              <p className="text-slate-600">Secure cloud-based medical records. Your patient data is encrypted and backed up daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Streamline Daily Operations</h2>
           <p className="text-xl text-slate-600 leading-relaxed">
             DentMate helps dental clinics streamline daily operations, reduce paperwork, and serve patients faster. Built for dentists, assistants, and reception teams who want simplicity and efficiency.
           </p>
           <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-primary-600 w-5 h-5 flex-shrink-0" />
                <span className="text-slate-700">Digital Patient Forms</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-primary-600 w-5 h-5 flex-shrink-0" />
                <span className="text-slate-700">Automated SMS Reminders</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-primary-600 w-5 h-5 flex-shrink-0" />
                <span className="text-slate-700">Financial Reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-primary-600 w-5 h-5 flex-shrink-0" />
                <span className="text-slate-700">Inventory Management</span>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
