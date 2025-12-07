import React, { useState } from 'react';
import { Send, Phone, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    clinicName: '',
    yourName: '',
    phoneNumber: '',
    city: '',
    patientCount: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset for demo purposes
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Get DentMate for Your Clinic</h1>
          <p className="text-xl text-slate-600">
            Fill the form and our team will contact you within 24 hours.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Request Submitted!</h2>
            <p className="text-green-700">Thank you for your interest. We will be in touch shortly.</p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                    clinicName: '',
                    yourName: '',
                    phoneNumber: '',
                    city: '',
                    patientCount: '',
                    message: ''
                });
              }}
              className="mt-6 text-green-700 font-medium hover:underline"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="clinicName" className="block text-sm font-semibold text-slate-700 mb-2">Clinic Name</label>
                <input
                  type="text"
                  id="clinicName"
                  name="clinicName"
                  required
                  value={formData.clinicName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="e.g. Bright Smile Dental"
                />
              </div>
              <div>
                <label htmlFor="yourName" className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  required
                  value={formData.yourName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="Dr. John Doe"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="New York"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="patientCount" className="block text-sm font-semibold text-slate-700 mb-2">Number of Patients</label>
              <select
                id="patientCount"
                name="patientCount"
                required
                value={formData.patientCount}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
              >
                <option value="" disabled>Select an option</option>
                <option value="0-100">0 - 100</option>
                <option value="101-500">101 - 500</option>
                <option value="501-1000">501 - 1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                placeholder="Tell us about your clinic's needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all"
            >
              Submit Request
              <Send className="ml-2 w-5 h-5" />
            </button>
          </form>
        )}

        <div className="mt-12 text-center border-t border-slate-100 pt-8">
          <p className="text-slate-600 mb-4 font-medium">Or contact us directly on WhatsApp:</p>
          <a 
            href="https://wa.me/962790000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-bold text-lg"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>+962-XXX-XXXXXX</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
