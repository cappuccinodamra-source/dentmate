import React from 'react';
import { 
  FileText, 
  Calendar, 
  Activity, 
  LayoutDashboard, 
  Shield, 
  MessageCircle 
} from 'lucide-react';
import { FeatureItem } from '../types';

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      title: "Complete Patient Profiles",
      description: "Store medical history, treatments, X-rays, allergies, and visit history securely in one unified digital file.",
      icon: FileText
    },
    {
      title: "Smart Appointment Scheduling",
      description: "Manage bookings, cancellations, reminders, and waiting lists seamlessly with our drag-and-drop calendar.",
      icon: Calendar
    },
    {
      title: "Treatment Tracking",
      description: "Track ongoing treatments and follow-up visits with clear timelines. Never miss a step in a patient's care plan.",
      icon: Activity
    },
    {
      title: "Clinic Dashboard",
      description: "Real-time insights on visits, analytics, and workload. See your clinic's performance at a glance.",
      icon: LayoutDashboard
    },
    {
      title: "Role-Based Access",
      description: "Separate permissions for doctor, assistant, and receptionist to ensure data security and workflow integrity.",
      icon: Shield
    },
    {
      title: "WhatsApp Notifications",
      description: "Automated reminders sent via WhatsApp to reduce no-show patients and keep your schedule full.",
      icon: MessageCircle
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Features</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Everything You Need to Run Your Clinic</h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">
            Designed to replace paper records and fragmented tools with one cohesive system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
